import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as Twitter } from './assets/twitter.svg'
import { ReactComponent as Reddit } from './assets/reddit.svg'
import { ReactComponent as Medium } from './assets/medium.svg'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'

const styles = () => ({
	socialIcons: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 160,
		borderTop: '1px solid #46494B',
		borderBottom: '1px solid #46494B',
		margin: '60px 20px 20px 20px',
		padding: '10px 0px',
	},
})

function SocialIcons(props) {
	const { classes, className, ...rest } = props
	return (
		<Grid
			item
			container
			justify="center"
			alignItems="center"
			xs={12}
			className={classNames(classes.socialIcons, className)}
			{...rest}
		>
			<IconButton className={classes.button} aria-label="Delete" href="https://medium.com/@learn.exchange" target="_blank">
				<Medium color="#A4A6A7" />
			</IconButton>
			<IconButton className={classes.button} aria-label="Delete" href="https://www.reddit.com/r/learn.exchange/" target="_blank">
				<Reddit color="#A4A6A7" />
			</IconButton>
			<IconButton className={classes.button} aria-label="Delete" href="https://twitter.com/learn.exchange" target="_blank">
				<Twitter color="#A4A6A7" />
			</IconButton>
		</Grid>
	)
}

SocialIcons.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
}

export default withStyles(styles)(SocialIcons)
