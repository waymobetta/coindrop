import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
})

class StepTwo extends React.Component {
	constructor(props) {
		super(props)
		this.onSelectOption = this.onSelectOption.bind(this)
	}

	onSelectOption(selection) {
		this.props.onSelectClick(selection)
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<Typography variant="h3" gutterBottom>
					Choose one to star
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					You can connect more accounts later
				</Typography>
				<Button
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onSelectOption.bind(this, 'reddit')}
				>
					Reddit
				</Button>
				<Button
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onSelectOption.bind(this, 'stackoverflow')}
				>
					StackOverflow
				</Button>
			</div>
		)
	}
}

StepTwo.propTypes = {
	classes: PropTypes.object.isRequired,
	onSelectClick: PropTypes.func,
}

export default withStyles(styles)(StepTwo)
