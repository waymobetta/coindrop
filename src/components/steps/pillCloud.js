import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
	pillWrapper: {
		width: '100%',
		height: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	pill: {
		width: '900px',
		height: '250px',
		display: 'block',
		position: 'absolute',
		borderRadius: '140px',
		transform: 'rotate(45deg)',
		background: 'linear-gradient(#FFFFFF 0%, #B53FFF 100%)',
	},
	pillDark: {
		width: '900px',
		height: '250px',
		display: 'block',
		position: 'absolute',
		borderRadius: '140px',
		transform: 'rotate(45deg)',
		background: 'linear-gradient(#E390FF 0%, #B53FFF 100%)',
	},
	pill1: {
		zoom: 0.3,
		transform: 'translate3d(20vw, 10vh, 200px) rotate(45deg)',
	},
	pill2: {
		zoom: 0.5,
		transform: 'translate3d(30vw, 100vh, 200px) rotate(45deg)',
	},
	pill3: {
		zoom: 0.7,
		transform: 'translate3d(20vw, 10vh, 200px) rotate(45deg)',
	},
	pill4: {
		zoom: 1,
		transform: 'translate3d(60vw, 50vh, 200px) rotate(45deg)',
	},
})

function PillCloud(props) {
	const { classes } = props
	return (
		<div className={classes.pillWrapper}>
			<span className={classNames(classes.pill, classes.pill1)} />
			<span className={classNames(classes.pill, classes.pill2)} />
			<span className={classNames(classes.pill, classes.pill3)} />
			<span className={classNames(classes.pill, classes.pill4)} />
		</div>
	)
}

PillCloud.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(PillCloud)
