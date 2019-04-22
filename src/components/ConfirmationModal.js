import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * can start passing props down to make this a reusable component
 * example: title, description, etc
 */

class ConfirmationModal extends React.Component {

  handleClose = () => {
    this.props.toggle(false);
  }

  render() {
    const { open } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"One more step!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please check your email for a verification email. Once you are verified, you will be able to login.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Got it
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationModal;