/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
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
						<p>
							To qualify for this offer you must have at least 100
							Reddit Karma and/or 100 Stack Overflow reputation.
						</p>
						<p>Come back to claim once you have reached 100!</p>
					</div>
				)}
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
