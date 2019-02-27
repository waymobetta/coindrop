/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import theme from '../theme'

const styles = theme => ({
	badgeBoxPaper: {
		position: 'relative',
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 200,
		padding: 15,
		...theme.boxShadow,
	},
	boxTitle: {
		...theme.boxTitle,
	},
})

class DashBadges extends Component {
	// eslint-disable-next-line no-console

	render() {
		const { classes } = this.props
		return (
			<Grid item xs={12} sm={6} md={6} lg={4}>
				<Hidden xsDown>
					<Typography
						className={classes.boxTitle}
						variant="subtitle1"
					>
						Badges
					</Typography>
				</Hidden>

				<Paper className={classes.badgeBoxPaper}>
					<Typography ariant="body1" align="right" gutterBottom>
						You don´t have badges yet.
					</Typography>
				</Paper>
			</Grid>
		)
	}
}

DashBadges.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default withStyles(styles, { withTheme: true })(DashBadges)
