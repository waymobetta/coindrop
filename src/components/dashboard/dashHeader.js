import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import InputBase from '@material-ui/core/InputBase'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import gravatar from 'gravatar'
import { ReactComponent as Magnifier } from '../assets/magnifier.svg'

const styles = theme => ({
	ProfileHeader: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		justifyContent: 'space-around',
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 26,
		marginBottom: 45,
		...theme.boxShadow,
	},
	headerSearchForm: {
		flexGrow: 1,
	},
	bigAvatar: {
		margin: '0px 0px 0px 20px',
	},
	notificationIcon: {
		color: '#ccc',
		marginRight: 10,
	},
	email: {
		color: '#A9A9A9',
		fontSize: 16,
		fontWeight: 500,
	},
	icon24: {
		width: 24,
		height: 24,
	},
})

class DashHeader extends Component {
	render() {
		const { classes, profile: { email } } = this.props
		const gravatarUrl = gravatar.url(email, {s: 100})

		return (
			<Hidden xsDown>
				<Paper className={classes.ProfileHeader} elevation={1}>
					<FormControl className={classes.headerSearchForm}>
						<InputBase
							id="input-with-icon-adornment"
							startAdornment={
								<InputAdornment position="start">
									<Magnifier
										color="#B5B5B6"
										className={classes.icon24}
									/>
								</InputAdornment>
							}
						/>
					</FormControl>
					<NotificationsNone className={classes.notificationIcon} />
					<Typography
						variant="h5"
						component="h3"
						className={classes.email}
					>
						{email}
					</Typography>
					<Avatar
						alt=""
						src={gravatarUrl}
						className={classes.bigAvatar}
						onClick={this.handleDrawerToggle}
					/>
				</Paper>
			</Hidden>
		)
	}
}

DashHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	profile: PropTypes.object,
}

function mapStateToProps(state) {
	return {
		profile: state.profile,
	};
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DashHeader))

