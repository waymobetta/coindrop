import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const styles = () => ({
	profileBoxPaper: {
		position: 'relative',
	},
})

class DashBadges extends Component {
	render() {
		const { classes } = this.props
		return (
			<Grid item xs={12} sm={6}>
				<Hidden smDown>
					<Typography variant="h5" component="h3">
						Badges
					</Typography>
				</Hidden>

				<Paper className={classes.profileBoxPaper}>
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
