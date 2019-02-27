/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import OopsImage from '../assets/oops.png'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import classNames from 'classnames'
import { ReactComponent as CloseIcon } from '../assets/close.svg'
import { ReactComponent as VerifiedIcon } from '../assets/verified.svg'
import PillCloud from '../steps/pillCloud'

const styles = theme => ({
	paper: {
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'transparent',
		padding: '40px 20px',
		borderRadius: '67px',
		height: 400,
		maxWidth: 540,
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
		border: '2px solid #fff',
	},
	paperNormal: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '40px 20px 30px 20px',
		borderRadius: '67px',
		height: 400,
		maxWidth: 540,
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
		...theme.boxShadow,
	},
	stepTitle: {
		fontSize: 40,
		color: '#FFFFFF',
		fontWeight: 500,
	},
	verifiedBox: {
		width: 300,
		height: 300,
		display: 'block',
		margin: 'auto',
		position: 'absolute',
		zIndex: '99',
		left: '0',
		right: '0',
		margin: '0px auto',
		top: '30%',
	},
	verifiedTitle: {
		color: '#fff',
		fontSize: '40px',
		fontWeight: '500',
		margin: 'auto',
		textAlign: 'center',
	},
	verifiedIcon: {
		width: 128,
		height: 128,
		display: 'block',
		margin: '0px auto 30px auto',
	},
	inputWhite: {
		'&:before': {
			borderBottomColor: '#FFF',
			borderWidth: 1,
		},
	},
	inputLabel: {
		color: '#FFF',
	},
	fabBackTopClose: {
		top: -20,
		right: -20,
		position: 'absolute',
		background: 'transparent',
		boxShadow: 'none',
	},
	closeIcon: {
		width: 24,
		height: 24,
	},
	verifiedBg: {
		background: 'linear-gradient(#572fff 0%, #bf41ff 100%)',
		top: 0,
		right: 0,
		width: '100%',
		height: '100vh',
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
	},
	claimEtherBg: {
		background: 'linear-gradient(#572fff 0%, #bf41ff 100%)',
		top: 0,
		right: 0,
		width: '100%',
		height: '100vh',
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
	},
	claimEtherForm: {
		width: '80%',
	},
	textWhite: {
		color: '#FFF',
	},
})

class StepFinal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showVerified: false,
		}
	}

	componentDidMount() {
		this.timerHandle = setTimeout(() => {
			this.setState({
				showVerified: true,
			})
			this.timerHandle = 0
		}, 2000)
	}

	componentWillUnmount() {
		if (this.timerHandle) {
			clearTimeout(this.timerHandle)
			this.timerHandle = 0
		}
	}

	render() {
		const { classes, canClaimEther, verified } = this.props
		const { showVerified } = this.state
		return showVerified ? (
			<div className={classes.root}>
				{canClaimEther && verified ? (
					<React.Fragment>
						<div className={classes.claimEtherBg} />
						<Typography
							variant="h6"
							gutterBottom
							align="center"
							classes={{ root: classes.stepTitle }}
						>
							Congrats!
						</Typography>
						<Paper className={classes.paper} elevation={0}>
							<Typography
								variant="h3"
								gutterBottom
								classes={{ root: classes.textWhite }}
							>
								Now claim your $5 in Ether
							</Typography>
							<Typography
								variant="subtitle2"
								classes={{ root: classes.textWhite }}
								gutterBottom
							>
								Enter your Ethereum address
							</Typography>
							<form className={classes.claimEtherForm}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel
										htmlFor="walletAddress"
										classes={{
											root: classes.inputLabel,
										}}
									>
										Wallet Address
									</InputLabel>
									<Input
										id="walletAddress"
										name="walletAddress"
										classes={{
											root: classes.inputWhite,
										}}
										autoFocus
									/>
								</FormControl>
							</form>
							<Button
								variant="outlined"
								color="secondary"
								onClick={this.onClick}
							>
								Get Paid
							</Button>
							<Typography
								variant="subtitle2"
								classes={{ root: classes.textWhite }}
								gutterBottom
							>
								You don´t have one? Create Wallet
							</Typography>
						</Paper>
					</React.Fragment>
				) : (
					<Paper className={classes.paperNormal} elevation={0}>
						<img src={OopsImage} />
						<Typography variant="subtitle2" gutterBottom>
							To qualify for this offer you must have at least 100
							Reddit Karma and/or 100 Stack Overflow reputation.
						</Typography>
						<Typography variant="subtitle2" gutterBottom>
							Come back to claim once you have reached 100!
						</Typography>
						<Fab
							color="primary"
							aria-label="Add"
							className={classes.fabBackTopClose}
						>
							<CloseIcon
								color="white"
								className={classes.closeIcon}
							/>
						</Fab>
					</Paper>
				)}
			</div>
		) : (
			<React.Fragment>
				<div className={classes.verifiedBg}>
					<div className={classes.verifiedBox}>
						<VerifiedIcon
							className={classes.verifiedIcon}
							color="white"
						/>
						<h3 className={classes.verifiedTitle}>Verified</h3>
					</div>
					<PillCloud />
				</div>
			</React.Fragment>
		)
	}
}

StepFinal.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StepFinal)
