import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Avatar from '@material-ui/core/Avatar'
import profilePicture from '../../images/avatar-profile.png'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import ButtonDark from '../ButtonDark'
import classNames from 'classnames'

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
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
	},
	profileBoxPaper: {
		position: 'relative',
		padding: '20px 20px',
		borderRadius: 30,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			alignItems: 'flex-start',
		},
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
		},
		...theme.boxShadow,
	},
	boxTitle: {
		...theme.boxTitle,
	},
	profileList: {
		padding: 0,
	},
	form: {
		margin: '10px 30px',
	},
	centerAvatar: {
		justifyContent: 'center',
	},
})

class DashProfileBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editProfile: false,
		}
	}

	handleEditProfile = () => {
		this.setState({ editProfile: !this.state.editProfile })
	}

	handleSaveProfile = () => {
		this.setState({ editProfile: false })
	}
	render() {
		const { classes } = this.props
		const { editProfile } = this.state
		return (
			<Grid item xs={12} sm={6}>
				<Typography className={classes.boxTitle} component="subtitle1">
					Profile
				</Typography>
				<Paper className={classes.profileBoxPaper}>
					<Hidden smUp>
						<Avatar
							alt="Remy Sharp"
							src={profilePicture}
							className={classes.bigAvatar}
						/>
						<p>Hunter Gebron</p>
						<p>hunter27@gmail.com</p>
					</Hidden>
					<Hidden smDown>
						<List className={classes.profileList}>
							<ListItem
								className={classNames(
									editProfile ? classes.centerAvatar : ''
								)}
							>
								<Avatar
									alt="Remy Sharp"
									src={profilePicture}
									className={classes.bigAvatar}
								/>
								{!editProfile ? (
									<ListItemText
										primary="Hunter"
										secondary="hunter27@gmail.com"
										primaryTypographyProps={{
											variant: 'h6',
										}}
										secondaryTypographyProps={{
											variant: 'subtitle1',
										}}
									/>
								) : (
									<React.Fragment>
										<EditIcon />
										<EditIcon />
									</React.Fragment>
								)}
							</ListItem>
						</List>
					</Hidden>
					{!editProfile ? (
						<>
							<Fab
								aria-label="Edit"
								className={classes.editProfileFab}
								onClick={this.handleEditProfile}
							>
								<EditIcon nativeColor="white" />
							</Fab>
							<Typography
								ariant="subtitle2"
								align="right"
								gutterBottom
							>
								Member since 2019
							</Typography>
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
											placeholder="Email Address"
											id="email"
											name="email"
											autoFocus
											classes={{
												underline: classes.cssUnderline,
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
												underline: classes.cssUnderline,
											}}
										/>
									</FormControl>
									<FormControl
										margin="normal"
										required
										fullWidth
										error
									>
										<Input
											placeholder="Repeat Password"
											name="repeatPassword"
											type="repeatPassword"
											id="repeatPassword"
											classes={{
												underline: classes.cssUnderline,
											}}
										/>
									</FormControl>
								</form>
								<Button
									size="small"
									color="primary"
									variant="text"
									align="right"
									onClick={this.handleSaveProfile}
								>
									Change Password
								</Button>
								<ButtonDark
									type="submit"
									fullWidth
									onClick={this.handleSaveProfile}
								>
									Save
								</ButtonDark>
							</Grid>
						</>
					)}
				</Paper>
			</Grid>
		)
	}
}

DashProfileBox.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(DashProfileBox)
