import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountButton from '../AccountButton'
import Typography from '@material-ui/core/Typography'
import { ReactComponent as Reddit } from '../assets/reddit.svg'
import { ReactComponent as StackOverflow } from '../assets/stackOverflow.svg'
import classNames from 'classnames'

const styles = () => ({
	connectSubTitle: {
		fontSize: 22,
	},
	leftIcon: {
		width: 36,
		height: 36,
		float: 'left',
		marginRight: 15,
	},
	redditIcon: {
		backgroundColor: '#8C8C8C',
		borderRadius: '40px',
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
			<React.Fragment>
				<Typography
					variant="h3"
					gutterBottom
					className={classes.connectSubTitle}
				>
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
					render={
						<Reddit
							className={classNames(
								classes.leftIcon,
								classes.redditIcon
							)}
							color="#FFF"
						/>
					}
				>
					Reddit
				</AccountButton>
				<AccountButton
					variant="outlined"
					size="large"
					color="primary"
					onClick={this.onSelectOption.bind(this, 'stackoverflow')}
					render={
						<StackOverflow
							className={classes.leftIcon}
							color="#8C8C8C"
						/>
					}
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
