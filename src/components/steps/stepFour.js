/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Chip from '@material-ui/core/Chip'
import ButtonOutlineLight from '../ButtonOutlineLight'
import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
	code: {
		padding: 25,
		borderRadius: 30,
	},
	fabCopy: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -50,
		top: 210,
		position: 'absolute',
	},
	root: {
		position: 'relative',
	},
})

class StepFour extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stackHelp: false,
		}
		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		this.props.onClick()
	}

	render() {
		const { classes, canClaimEther, selectedPlatform } = this.props
		console.log(canClaimEther)
		return (
			<React.Fragment>
				{selectedPlatform === 'reddit' ? (
					<React.Fragment>
						<Typography variant="h5" gutterBottom>
							Verification Code
						</Typography>
						<Chip
							variant="outlined"
							label="AJY765439096GGDC876997"
							className={classes.code}
						/>
						<p>
							Copy the code and paste it in our subreddit using
							this link.
						</p>
						<br />
						<p>Already paste the code? </p>
						<ButtonOutlineLight size="large" onClick={this.onClick}>
							Verify
						</ButtonOutlineLight>
						<Fab
							color="primary"
							aria-label="Add"
							className={classes.fabCopy}
						>
							<ArrowForward />
						</Fab>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Typography variant="h5" gutterBottom>
							Verification Code
						</Typography>
						<Chip
							variant="outlined"
							label="AJY765439096GGDC876997"
							className={classes.code}
						/>
						<p>
							Copy the code and paste it in your Stack Overflow
							profile at the bottom of your “About me”.
						</p>
						<br />
						<p>Already paste the code? </p>
						<ButtonOutlineLight size="large" onClick={this.onClick}>
							Verify
						</ButtonOutlineLight>
					</React.Fragment>
				)}
			</React.Fragment>
		)
	}
}

StepFour.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
}

export default withStyles(styles)(StepFour)
