import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountButton from '../AccountButton'
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
		//const { classes } = this.props
		return (
			<React.Fragment>
				<Typography variant="h3" gutterBottom>
					Choose one to start
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					You can connect more accounts later
				</Typography>
				<AccountButton
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onSelectOption.bind(this, 'reddit')}
				>
					Reddit
				</AccountButton>
				<AccountButton
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onSelectOption.bind(this, 'stackoverflow')}
				>
					StackOverflow
				</AccountButton>
			</React.Fragment>
		)
	}
}

StepTwo.propTypes = {
	classes: PropTypes.object.isRequired,
	onSelectClick: PropTypes.func,
}

export default withStyles(styles)(StepTwo)
