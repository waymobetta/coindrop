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
			<div className={classes.root}>
				<Typography variant="h3" gutterBottom>
					Welcome to Coindrop!
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					Connect your accounts to Coindrop and receive your first
					Ether payment
				</Typography>
				<Button
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onClick}
				>
					Get Paid
				</Button>
			</div>
		)
	}
}

StepOne.propTypes = {
	classes: PropTypes.object.isRequired,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepOne)
