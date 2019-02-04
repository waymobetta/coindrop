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
			<div className={classes.root}>
				{this.props.selectedPlatform === 'reddit' ? (
					<form className={classes.form}>
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
						<Button
							variant="outlined"
							size="large"
							color="primary"
							onClick={this.onClick}
						>
							Next
						</Button>
					</form>
				) : (
					<div>
						{!stackHelp ? (
							<form className={classes.form}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">
										Stack Overflow UserID
									</InputLabel>
									<Input
										id="stackOverflowId"
										name="stackOverflowId"
										autoFocus
									/>
								</FormControl>
								<Button
									variant="outlined"
									size="large"
									color="primary"
									onClick={this.onClick}
								>
									Next
								</Button>
								<Button
									variant="outlined"
									size="large"
									color="primary"
									onClick={this.showStackHelp}
								>
									Where is my ID
								</Button>
							</form>
						) : (
							<form className={classes.form}>
								Help finding stackOverflowId?
								<Button
									variant="outlined"
									size="large"
									color="primary"
									onClick={this.hideStackHelp}
								>
									Back
								</Button>
							</form>
						)}
					</div>
				)}
			</div>
		)
	}
}

StepThree.propTypes = {
	classes: PropTypes.object.isRequired,
	selectedPlatform: PropTypes.string,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepThree)
