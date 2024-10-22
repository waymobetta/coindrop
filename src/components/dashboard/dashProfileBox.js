import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import classNames from 'classnames'
import gravatar from 'gravatar'
import moment from 'moment'
import { ReactComponent as Edit } from '../assets/edit.svg'
import { ReactComponent as Camera } from '../assets/camera.svg'
import { ReactComponent as Upload } from '../assets/upload.svg'

const styles = theme => ({
	bigAvatar: {
		margin: 10,
		width: 100,
		height: 100,
	},
	editProfileFab: {
		margin: theme.spacing.unit,
		position: 'absolute',
		right: '-32px',
		top: '20px',
		[theme.breakpoints.down('sm')]: {
			right: '0px',
			top: '40px',
		},
	},
	profileBoxPaper: {
		position: 'relative',
		padding: '20px 50px',
		borderRadius: 30,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			alignItems: 'flex-start',
		},
		[theme.breakpoints.down('xs')]: {
			alignItems: 'center',
			background: 'transparent',
			boxShadow: 'none',
			padding: '20px 40px',
		},
		[theme.breakpoints.up('sm')]: {
			...theme.boxShadow,
		},
	},
	profileBoxPaperEdit: {
		[theme.breakpoints.down('sm')]: {
			background: '#fff',
			...theme.boxShadow,
		},
		[theme.breakpoints.up('md')]: {
			alignItems: 'center',
		},
	},
	boxTitle: {
		...theme.boxTitle,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			fontSize: '26px',
			color: '#363C44',
			marginBottom: 30,
		},
	},
	profileList: {
		padding: 0,
		width: '100%',
	},
	form: {
		margin: '0px',
		width: '100%',
	},
	centerAvatar: {
		justifyContent: 'center',
	},
	alignRight: {
		alignSelf: 'flex-end',
		marginBottom: 30,
	},
	memberSince: {
		alignSelf: 'flex-end',
		display: 'flex',
		alignItems: 'center',
	},
	pictureControls: {
		background: '#fff',
		...theme.boxShadow,
		width: 40,
		height: 80,
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		position: 'absolute',
		right: 20,
	},
})

class DashProfileBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editProfile: false,
			memberSinceYear: moment().year()
		}
	}

	handleEditProfile = () => {
		this.setState({ editProfile: !this.state.editProfile })
	}

	handleSaveProfile = () => {
		this.setState({ editProfile: false })
	}
	render() {
		const { classes, profile: { name, email } } = this.props
		const { editProfile, memberSinceYear } = this.state
		const gravatarUrl = gravatar.url(email, { s: 150 })

		return (
			<React.Fragment>
				<Hidden smUp>
					<Typography
						variant="h2"
						component="h2"
						className={classes.boxTitle}
					>
						Profile
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={12} md={10} lg={5}>
					<Hidden xsDown>
						<Typography
							className={classes.boxTitle}
							variant="subtitle1"
						>
							Profile
						</Typography>
					</Hidden>
					<Paper
						className={classNames(
							classes.profileBoxPaper,
							editProfile ? classes.profileBoxPaperEdit : ''
						)}
					>
						<Hidden smUp>
							<Avatar
								alt=""
								src={gravatarUrl}
								className={classes.bigAvatar}
							/>
							<p>{name}</p>
							<p>{email}</p>
							{editProfile && (
								<div className={classes.pictureControls}>
									<Camera
										color="#CA34FF"
										width="24"
										height="24"
									/>
									<Upload
										color="#CA34FF"
										width="24"
										height="24"
									/>
								</div>
							)}
						</Hidden>
						<Hidden xsDown>
							<List className={classes.profileList}>
								<ListItem
									className={classNames(
										editProfile ? classes.centerAvatar : ''
									)}
								>
									<Avatar
										alt=""
										src={gravatarUrl}
										className={classes.bigAvatar}
									/>
									{!editProfile ? (
										<ListItemText
											primary={name}
											secondary={email}
											primaryTypographyProps={{
												variant: 'h6',
											}}
											secondaryTypographyProps={{
												variant: 'subtitle1',
											}}
										/>
									) : (
											<div
												className={classes.pictureControls}
											>
												<Camera
													color="#CA34FF"
													width="24"
													height="24"
												/>
												<Upload
													color="#CA34FF"
													width="24"
													height="24"
												/>
											</div>
										)}
								</ListItem>
							</List>
						</Hidden>
						{!editProfile ? (
							<>
								<Fab
									color="primary"
									aria-label="Edit"
									className={classes.editProfileFab}
									onClick={this.handleEditProfile}
								>
									<Edit
										color="white"
										width="24"
										height="24"
									/>
								</Fab>
								<Hidden smDown>
									<Typography
										gutterBottom
										className={classes.memberSince}
									>
										<Edit
											color="grey"
											width="24"
											height="24"
										/>
										Member since {memberSinceYear}
									</Typography>
								</Hidden>
							</>
						) : (
								<>
									<Grid
										container
										alignContent="space-between"
										justify="space-between"
										direction="column"
										alignItems="center"
										spacing={0}
									>
										<form className={classes.form}>
											<FormControl
												margin="normal"
												required
												fullWidth
											>
												<Input
													placeholder="Full Name"
													id="fullName"
													name="fullName"
													autoFocus
													classes={{
														underline:
															classes.cssUnderline,
													}}
												/>
											</FormControl>
											<FormControl
												margin="normal"
												required
												fullWidth
											>
												<Input
													placeholder="Email Address"
													id="email"
													name="email"
													autoFocus
													classes={{
														underline:
															classes.cssUnderline,
													}}
												/>
											</FormControl>
											<FormControl
												margin="normal"
												required
												fullWidth
											>
												<Input
													name="password"
													type="password"
													id="password"
													placeholder="Password"
													classes={{
														underline:
															classes.cssUnderline,
													}}
												/>
											</FormControl>
										</form>
										<Button
											size="small"
											color="secondary"
											variant="text"
											align="right"
											className={classes.alignRight}
											onClick={this.handleSaveProfile}
										>
											Change Password
									</Button>
										<Button
											type="submit"
											variant="contained"
											color="secondary"
											onClick={this.handleSaveProfile}
										>
											Save
									</Button>
									</Grid>
								</>
							)}
					</Paper>
				</Grid>
			</React.Fragment>
		)
	}
}

DashProfileBox.propTypes = {
	classes: PropTypes.object.isRequired,
	profile: PropTypes.object,
}

const mapStateToProps = (state) => ({
	profile: state.profile
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DashProfileBox))
