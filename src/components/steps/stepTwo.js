/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Typography from '@material-ui/core/Typography'
import { updateWallet } from '../../state/actions/wallets'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
	fabNext: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -27,
		bottom: 80,
		position: 'absolute',
		[theme.breakpoints.down('xs')]: {
			bottom: 0,
			right: 0,
		},
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
		color: '#fff',
	},
	inputLabel: {
		color: '#FFF',
	},
})

class StepTwo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			walletAddress: '',
		}
	}

	onClick = () => {
		const { walletAddress } = this.state;
		const { dispatch, user } = this.props;
		const data = {
			walletAddress,
			walletType: 'eth',
			userId: user.userId,
		}

		dispatch(updateWallet(data))
		this.props.onClick()
	}

	handleChange = (event) => this.setState({ walletAddress: event.target.value })

	render() {
		const { classes } = this.props
		const { walletAddress } = this.state;
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Please enter your Ethereum wallet address. We need this because it is just waymobetta if you do.
				</Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="walletAddress">
							Wallet Address
						</InputLabel>
						<Input
							id="walletAddress"
							name="walletAddress"
							onChange={this.handleChange}
							autoFocus
						/>
					</FormControl>
				</form>
				<Fab
					color="primary"
					aria-label="Add"
					className={classes.fabNext}
					onClick={this.onClick}
					disabled={!walletAddress}
				>
					<ArrowForward />
				</Fab>
			</React.Fragment>
		)
	}
}

StepTwo.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
	onClick: PropTypes.func,
	dispatch: PropTypes.func,
	user: PropTypes.object,
}

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps)(withStyles(styles)(StepTwo))
