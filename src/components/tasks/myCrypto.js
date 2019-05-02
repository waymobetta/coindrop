import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import FileCopy from '@material-ui/icons/FileCopy'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class MyCryptoTask extends Component {
  state = {
    activeStep: 0,
    codeCopied: false,
    verificationMessage: ''
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleVerificationChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  getSteps = () => {
    return ['Download the MyCrypto App', 'Sign the Message', 'Verify'];
  }

  getStepContent = (step) => {
    const { task, classes } = this.props;
    const { verificationMessage } = this.state;
    const message = 'I <3 coindrop';
    const verificationSample = `{
      'address': '0xfedc485ab2c87529fb13414c57e391a98fd113ef',
      'msg': 'I <3 coindrop',
      'sig': '0x995f0b0cef348d3eb6c9fd6f3537dbe7e7906a1c498a5796a098f587e2a61380602874c36c24599f67ecfe4429d842f454f0362037c1758900ccef8aae805dee1b',
      'version': '2'
    }`


    switch (step) {
      case 0:
        return (<span>Download the MyCrypto app by clicking <a href={task.resourceURL} target="_blank" rel="noreferrer noopener">here</a> and following the <a href='https://support.mycrypto.com/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum' target="_blank" rel="noreferrer noopener">instructions</a></span>);
      case 1:
        return (
          <span>Sign the below message within the MyCrypto app
          <p>{message}</p>
            <CopyToClipboard
              text={this.state.message}
              onCopy={() => this.setState({ codeCopied: true })}>
              <span
                role='img'
                description='aria-label'>
                <FileCopy />
              </span>
            </CopyToClipboard>
            {
              this.state.codeCopied
                ? <span style={{ color: 'green' }}>copied</span>
                : null
            }
            <i>Already signed a message in the app? Paste your signed message code-block in the space below and verify it!</i>
          </span>);
      case 2:
        return (
          // <Form>
          //   <FormGroup>
          //     <Label
          //       for='verifyMessage'>
          //       Verify Message
          //     </Label>
          //     <Input
          //       className='inputClass'
          //       type='textarea'
          //       placeholder={verificationSample}
          //       name='text'
          //       id='verifyMessage'
          //       value={this.state.verifyMessage}
          //       onChange={event => this.handleChange(event)}
          //     />
          //   </FormGroup>
          // </Form>


          <form>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="verificationMessage"
                label="Verification Message"
                multiline
                rows="6"
                placeholder={verificationSample}
                value={verificationMessage}
                onChange={this.handleVerificationChange}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </FormControl>
          </form>
        )
      default:
        return 'Unknown step';
    }
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

MyCryptoTask.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
};

export default withStyles(styles)(MyCryptoTask);


