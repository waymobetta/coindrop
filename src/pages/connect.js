/* eslint-disable */
import React from 'react'
//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Landing from '../components/LayoutConnect'
import SEO from '../components/seo'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepOne from '../components/steps/StepOne'
import StepTwo from '../components/steps/StepTwo'
import StepThree from '../components/steps/StepThree'
import StepFour from '../components/steps/StepFour'
import StepFinal from '../components/steps/StepFinal'
import StepIcon from '@material-ui/core/StepIcon'

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: 'auto',
		height: '100%',
		background: 'linear-gradient(#572fff 0%, #bf41ff 100%)',
		borderBottomRightRadius: 250,
		borderBottomLeftRadius: 250,
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
		maxWidth: 540,
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
	},
	grow: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: '#272B2F',
		height: 200,
	},
	subGrid: {
		height: 300,
		marginTop: 200,
	},
	stepLabel: {
		padding: 0,
		height: 10,
		width: 10,
	},
	stepper: {
		width: 144,
		margin: '0px auto',
	},
	stepIcon: {
		fill: '#ccc',
		width: 16,
		height: 16,
	},
	stepIconActive: {
		fill: '#D74EFF',
		width: 16,
		height: 16,
	},
	stepIconText: {
		display: 'none',
	},
})

function getSteps() {
	return ['Step 1', 'Create an ad group', 'Create an ad', 'Verification Code']
}

class Connect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeStep: 0,
			skipped: new Set(),
			selectedPlatform: '',
			verified: true,
			canClaimEther: true,
		}
	}
	isStepOptional = step => step === 0

	getStepContent = step => {
		switch (step) {
			case 0:
				return <StepOne onClick={this.handleNext} />
			case 1:
				return <StepTwo onSelectClick={this.handleSelection} />
			case 2:
				return (
					<StepThree
						selectedPlatform={this.state.selectedPlatform}
						onClick={this.handleNext}
					/>
				)
			case 3:
				return (
					<StepFour
						onClick={this.handleVerify}
						selectedPlatform={this.state.selectedPlatform}
						canClaimEther={this.state.canClaimEther}
					/>
				)
			default:
				return 'Unknown step'
		}
	}

	getStepTitle = step => {
		switch (step) {
			case 0:
				return ''
			case 1:
				return 'Connect Accounts'
			case 2:
				return 'Connect Accounts'
			case 3:
				return 'Almost Done'
			default:
				return ''
		}
	}

	handleSelection = selection => {
		const { activeStep } = this.state
		let { skipped } = this.state
		if (this.isStepSkipped(activeStep)) {
			skipped = new Set(skipped.values())
			skipped.delete(activeStep)
		}
		this.setState({
			activeStep: activeStep + 1,
			skipped,
			selectedPlatform: selection,
		})
	}

	handleNext = () => {
		const { activeStep } = this.state
		let { skipped } = this.state
		// if (this.isStepSkipped(activeStep)) {
		// 	skipped = new Set(skipped.values())
		// 	skipped.delete(activeStep)
		// }
		this.setState({
			activeStep: activeStep + 1,
			skipped,
		})
	}

	handleVerify = () => {
		const { activeStep } = this.state
		// We will return verification response here
		this.setState({
			activeStep: activeStep + 1,
			verified: true,
		})
	}

	handleBack = () => {
		this.setState(state => ({
			activeStep: state.activeStep - 1,
		}))
	}

	handleSkip = () => {
		const { activeStep } = this.state
		if (!this.isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.")
		}

		this.setState(state => {
			const skipped = new Set(state.skipped.values())
			skipped.add(activeStep)
			return {
				activeStep: state.activeStep + 1,
				skipped,
			}
		})
	}

	handleReset = () => {
		this.setState({
			activeStep: 0,
		})
	}

	tryAgain = () => {
		this.setState({
			activeStep: 2,
		})
	}

	isStepSkipped(step) {
		return this.state.skipped.has(step)
	}

	render() {
		const { classes } = this.props
		const steps = getSteps()
		const { activeStep, canClaimEther, verified } = this.state
		return (
			<Landing>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<div className={classes.root}>
					<Grid
						container
						spacing={0}
						justify="center"
						alignContent="space-around"
						alignItems="center"
					>
						<Grid
							item
							xs={10}
							sm={8}
							md={6}
							className={classes.subGrid}
						>
							<Typography
								variant="h6"
								gutterBottom
								align="center"
							>
								{this.getStepTitle(activeStep)}
							</Typography>

							<React.Fragment>
								{activeStep === steps.length ? (
									<React.Fragment>
										{verified ? (
											<StepFinal
												verified
												canClaimEther={canClaimEther}
											/>
										) : (
											<Paper
												className={classes.paper}
												elevation={10}
											>
												<React.Fragment>
													<p>Sorry!!!</p>
													<p>
														It seems that there was
														a problem and we
														couldn´t connect your
														account.
													</p>
													<Button
														variant="outlined"
														size="large"
														color="primary"
														onClick={this.tryAgain}
													>
														Try Again
													</Button>
												</React.Fragment>
											</Paper>
										)}
									</React.Fragment>
								) : (
									<Paper
										className={classes.paper}
										elevation={10}
									>
										<React.Fragment>
											{this.getStepContent(activeStep)}
											<Stepper
												activeStep={activeStep}
												connector=""
												classes={{
													root: classes.stepper,
												}}
											>
												{steps.map((label, index) => {
													const props = {}
													const labelProps = {}
													if (
														this.isStepSkipped(
															index
														)
													) {
														props.completed = false
													}
													return (
														<Step
															key={label}
															{...props}
														>
															<StepLabel
																classes={{
																	root:
																		classes.stepLabel,
																}}
																StepIconProps={{
																	classes: {
																		root:
																			classes.stepIcon,
																		active:
																			classes.stepIconActive,
																		text:
																			classes.stepIconText,
																		completed:
																			classes.stepIconActive,
																	},
																}}
															/>
														</Step>
													)
												})}
											</Stepper>
										</React.Fragment>
									</Paper>
								)}
							</React.Fragment>
						</Grid>
					</Grid>
				</div>
			</Landing>
		)
	}
}

Connect.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Connect)
