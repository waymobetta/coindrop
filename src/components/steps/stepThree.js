/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
	fabNext: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -27,
		bottom: 80,
		position: 'absolute',
		[theme.breakpoints.down('xs')]: {
			bottom: 0,
			right: 0,
		},
	},
	fabBackTopLeft: {
		top: -20,
		left: -20,
		position: 'absolute',
		background: 'transparent',
		boxShadow: 'none',
		color: '#fff',
	},
})

class StepThree extends React.Component {

	onClick = () => {
		this.props.onClick()
	}

	render() {
		const { classes } = this.props
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Awesome! You're almost done. Now let's go to the Tasks section where you can learn how to verify your wallet address.
				</Typography>
				<Fab
					color="primary"
					aria-label="Add"
					className={classes.fabNext}
					onClick={this.onClick}
				>
					<ArrowForward />
				</Fab>
			</React.Fragment>
		)
	}
}

StepThree.propTypes = {
	classes: PropTypes.object.isRequired,
	onClick: PropTypes.func,
}

export default withStyles(styles)(StepThree)
