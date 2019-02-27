import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
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
		position: 'absolute',
		right: -27,
		bottom: 140,
		[theme.breakpoints.down('xs')]: {
			bottom: 0,
			right: 0,
		},
	},
	root: {
		position: 'relative',
	},
	alreadyPasted: {
		borderTop: '1px solid #ccc',
		paddingTop: 15,
		marginTop: 15,
		width: '80%',
	},
	copyText: {
		width: '60%',
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
		const { classes, selectedPlatform } = this.props
		return (
			<React.Fragment>
				{selectedPlatform === 'reddit' ? (
					<React.Fragment>
						<Typography variant="h3" gutterBottom>
							Verification Code
						</Typography>

						<span className={classes.code}>
							AJY765439096GGDC876997
						</span>
						<Typography
							variant="subtitle2"
							gutterBottom
							className={classes.copyText}
						>
							Copy the code and paste it in our subreddit using
							this link.
						</Typography>
						<Typography
							variant="subtitle2"
							gutterBottom
							className={classes.alreadyPasted}
						>
							Already paste the code?
						</Typography>
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
						<Typography
							variant="subtitle2"
							gutterBottom
							className={classes.copyText}
						>
							Copy the code and paste it in your
							<b> Stack Overflow </b>
							profile at the bottom of your “About me”.
						</Typography>
						<Typography
							variant="subtitle2"
							gutterBottom
							className={classes.alreadyPasted}
						>
							Already paste the code?
						</Typography>
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
				)}
			</React.Fragment>
		)
	}
}

StepFour.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepFour)
