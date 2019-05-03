import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = () => ({
	connectWelcome: {},
})

class StepOne extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		this.props.onClick()
	}

	render() {
		const { classes } = this.props
		return (
			<React.Fragment>
				<Typography
					variant="h2"
					gutterBottom
					classes={{ root: classes.connectWelcome }}
				>
					Welcome to Coindrop!
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Let&#39;s get you set up so that you can start earning your badges.
				</Typography>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.onClick}
				>
					Start
				</Button>
			</React.Fragment>
		)
	}
}

StepOne.propTypes = {
	classes: PropTypes.object.isRequired,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepOne)
