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
import { ReactComponent as CopyIcon } from '../assets/copy.svg'

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
		borderRadius: 40,
		border: '2px solid #707070',
		height: 74,
		maxWidth: '390px',
		width: '100%',
		fontSize: 18,
		margin: '20px 0px',
	},
	fabCopy: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -27,
		top: 210,
		position: 'absolute',
	},
	root: {
		position: 'relative',
	},
	connectSubTitle: {
		fontSize: 24,
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
						<Typography
							variant="h6"
							gutterBottom
							classes={{ root: classes.connectSubTitle }}
						>
							Verification Code
						</Typography>

						<span className={classes.code}>
							AJY765439096GGDC876997
						</span>
						<p>
							Copy the code and paste it in our subreddit using
							this link.
						</p>
						<p>Already paste the code? </p>
						<Button
							variant="outlined"
							color="primary"
							onClick={this.onClick}
						>
							Verify
						</Button>
						<Fab
							color="primary"
							aria-label="Add"
							className={classes.fabCopy}
						>
							<CopyIcon />
						</Fab>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Typography
							variant="h3"
							gutterBottom
							classes={{ root: classes.connectSubTitle }}
						>
							Verification Code
						</Typography>
						<span className={classes.code}>
							AJY765439096GGDC876997
						</span>
						<p>
							Copy the code and paste it in your Stack Overflow
							profile at the bottom of your “About me”.
						</p>
						<p>Already paste the code? </p>
						<Button
							variant="outlined"
							color="primary"
							onClick={this.onClick}
						>
							Verify
						</Button>
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
