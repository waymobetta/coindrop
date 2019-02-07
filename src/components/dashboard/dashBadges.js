/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import theme from '../theme'

const styles = () => ({
	badgeBoxPaper: {
		position: 'relative',
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 200,
		padding: 15,
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
			<Grid item xs={12} sm={4}>
				<Hidden smDown>
					<Typography
						className={classes.boxTitle}
						component="subtitle1"
					>
						Badges
					</Typography>
				</Hidden>

				<Paper className={classes.badgeBoxPaper}>
					<Typography ariant="subtitle2" align="right" gutterBottom>
						No badges yet
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
