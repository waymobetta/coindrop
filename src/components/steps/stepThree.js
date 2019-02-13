/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { ReactComponent as Reddit } from '../assets/reddit.svg'
import { ReactComponent as StackOverflow } from '../assets/stackOverflow.svg'
import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import stackHelp1 from '../assets/stackHelp1.png'
import stackHelp2 from '../assets/stackHelp2.png'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
	reddit: {
		width: 36,
		height: 36,
	},
	stackOverflow: {
		width: 36,
		height: 36,
	},
	fabNext: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -27,
		top: 210,
		position: 'absolute',
	},
	form: {
		position: 'relative',
		width: '80%',
	},
	fabBackTopLeft: {
		top: -20,
		left: -20,
		position: 'absolute',
		background: 'transparent',
		boxShadow: 'none',
	},
	inputLabel: {
		color: '#FFF',
	},
	stackHelpBox: {
		display: 'flex',
		width: '700px',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		borderRadius: 30,
		padding: '10px 20px',
		alignItems: 'center',
	},
	stackHelpBoxLeft: {
		marginRight: '-220px',
	},
	stackHelpBoxRight: {
		marginLeft: '-220px',
	},
	stackHelpBoxText: {
		width: 200,
		textAlign: 'left',
	},
})

class StepThree extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stackHelp: false,
			redditUserName: 'ceonex',
			stackOverflowId: '89723872424',
		}
		this.showStackHelp = this.showStackHelp.bind(this)
		this.hideStackHelp = this.hideStackHelp.bind(this)
		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		this.props.onClick()
	}

	showStackHelp() {
		this.setState({
			stackHelp: true,
		})
	}

	hideStackHelp() {
		this.setState({
			stackHelp: false,
		})
	}

	submitFormInput() {
		this.props.onSelectClick(this.state.redditUserName)
	}

	render() {
		const { classes } = this.props
		const { stackHelp } = this.state
		return (
			<React.Fragment>
				{this.props.selectedPlatform === 'reddit' ? (
					<React.Fragment>
						<form className={classes.form}>
							<Reddit className={classes.reddit} />
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="redditUserName">
									Reddit Username
								</InputLabel>
								<Input
									id="redditUserName"
									name="redditUserName"
									autoFocus
								/>
							</FormControl>
						</form>
						<Fab
							color="primary"
							aria-label="Add"
							className={classes.fabNext}
							onClick={this.onClick}
						>
							<ArrowForward />
						</Fab>
					</React.Fragment>
				) : (
					<React.Fragment>
						{!stackHelp ? (
							<React.Fragment>
								<form className={classes.form}>
									<StackOverflow
										className={classes.stackOverflow}
									/>
									<FormControl
										margin="normal"
										required
										fullWidth
									>
										<p>Stack Overflow UserID</p>

										<Input
											id="stackOverflowId"
											name="stackOverflowId"
											autoFocus
											placeholder="User: 109873627"
										/>
									</FormControl>

									<Button
										variant="text"
										size="small"
										color="primary"
										onClick={this.showStackHelp}
									>
										Where is my ID
									</Button>
								</form>
								<Fab
									color="primary"
									aria-label="Add"
									className={classes.fabNext}
									onClick={this.onClick}
								>
									<ArrowForward />
								</Fab>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Typography variant="h6" gutterBottom>
									Stack Overflow UserID
								</Typography>

								<p>Copy only the numbers</p>
								<div
									className={classNames(
										classes.stackHelpBox,
										classes.stackHelpBoxLeft
									)}
								>
									<p
										className={classNames(
											classes.stackHelpBoxText
										)}
									>
										1. You can find your UserID in the
										search field.
									</p>
									<img
										width="340"
										height="48"
										src={stackHelp1}
										className={classNames(
											classes.stackHelpBoxImage
										)}
									/>
								</div>
								<div
									className={classNames(
										classes.stackHelpBox,
										classes.stackHelpBoxRight
									)}
								>
									<img
										width="373"
										height="26"
										src={stackHelp2}
										className={classNames(
											classes.stackHelpBoxImage
										)}
									/>
									<p
										className={classNames(
											classes.stackHelpBoxText
										)}
									>
										2.You can also find your UserID in the
										browser.
									</p>
								</div>
								<Fab
									color="primary"
									aria-label="Add"
									className={classes.fabBackTopLeft}
									onClick={this.hideStackHelp}
								>
									<ArrowBack />
								</Fab>
							</React.Fragment>
						)}
					</React.Fragment>
				)}
			</React.Fragment>
		)
	}
}

StepThree.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepThree)
