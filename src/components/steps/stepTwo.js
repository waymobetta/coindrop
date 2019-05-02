/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
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

class StepTwo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			walletAddress: '',
		}
	}

	onClick = () => {
		this.props.onClick()
	}

	submitFormInput() {
		const { walletAddress } = this.state;
		this.props.onSelectClick(walletAddress)
	}

	render() {
		const { classes } = this.props

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
		)
	}
}

StepTwo.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepTwo)
