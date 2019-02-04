/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
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
			<div className={classes.root}>
				{selectedPlatform === 'reddit' ? (
					<div>
						<Chip
							variant="outlined"
							label="AJY765439096GGDC876997"
						/>
						<p>
							Copy the code and paste it in our subreddit using
							this link.
						</p>
						<p>Already paste the code? </p>
						<Button
							variant="outlined"
							size="large"
							color="primary"
							onClick={this.onClick}
						>
							Verify
						</Button>
					</div>
				) : (
					<div>
						<Chip
							variant="outlined"
							label="AJY765439096GGDC876997"
						/>
						<p>
							Copy the code and paste it in your Stack Overflow
							profile at the bottom of your “About me”.
						</p>
						<p>Already paste the code? </p>
						<Button
							variant="outlined"
							size="large"
							color="primary"
							onClick={this.onClick}
						>
							Verify
						</Button>
					</div>
				)}
			</div>
		)
	}
}

StepFour.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
}

export default withStyles(styles)(StepFour)
