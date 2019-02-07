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

const styles = theme => ({
	paper: {
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'transparent',
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
		border: '2px solid #fff',
	},
})

class StepFinal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
	}

	componentDidMount() {
		this.timerHandle = setTimeout(() => {
			this.setState({
				show: true,
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
		const { show } = this.state
		return show ? (
			<div className={classes.root}>
				<Typography variant="h6" gutterBottom align="center">
					Congrats!
				</Typography>
				<Paper className={classes.paper} elevation={0}>
					{canClaimEther && verified ? (
						<div>
							<p>Now claim your $5 in Ether </p>
							<p>Enter your Ethereum address</p>
							<form className={classes.form}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="redditUserName">
										Wallet Address
									</InputLabel>
									<Input
										id="redditUserName"
										name="redditUserName"
										autoFocus
									/>
								</FormControl>
							</form>
							<Button
								variant="outlined"
								size="large"
								color="primary"
								onClick={this.onClick}
							>
								Get Paid
							</Button>
							<p>You don´t have one? Create Wallet</p>
						</div>
					) : (
						<div>
							<img src={OopsImage} />
							<p>
								To qualify for this offer you must have at least
								100 Reddit Karma and/or 100 Stack Overflow
								reputation.
							</p>
							<p>Come back to claim once you have reached 100!</p>
						</div>
					)}
				</Paper>
			</div>
		) : (
			<div>Verified!!!</div>
		)
	}
}

StepFinal.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StepFinal)
