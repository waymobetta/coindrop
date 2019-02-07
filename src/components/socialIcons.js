import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as CommentBubles } from './assets/comment_bubbles.svg'
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
	const { classes, className } = props
	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			xs={12}
			className={classNames(classes.socialIcons, className)}
			{...props}
		>
			<IconButton className={classes.button} aria-label="Delete">
				<CommentBubles color="white" />
			</IconButton>
			<IconButton className={classes.button} aria-label="Delete">
				<CommentBubles color="white" />
			</IconButton>
			<IconButton className={classes.button} aria-label="Delete">
				<CommentBubles color="white" />
			</IconButton>
		</Grid>
	)
}

SocialIcons.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.object,
}

export default withStyles(styles)(SocialIcons)
