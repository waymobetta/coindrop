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
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60,
	},
	fab: {
		margin: theme.spacing.unit,
		position: 'absolute',
		right: '-32px',
		top: '20px',
	},
	profileBoxPaper: {
		position: 'relative',
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
				<Typography variant="h5" component="h3">
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
						<List className={classes.root}>
							<ListItem>
								<Avatar
									alt="Remy Sharp"
									src={profilePicture}
									className={classes.bigAvatar}
								/>
								<ListItemText
									primary="Photos"
									secondary="Jan 9, 2014"
								/>
							</ListItem>
						</List>
					</Hidden>
					{!editProfile ? (
						<>
							<Fab
								color="secondary"
								aria-label="Edit"
								className={classes.fab}
								onClick={this.handleEditProfile}
							>
								<EditIcon />
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
							<form className={classes.form}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">
										Name
									</InputLabel>
									<Input
										id="name"
										name="name"
										autoComplete="name"
										autoFocus
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">
										Email
									</InputLabel>
									<Input
										id="email"
										name="email"
										autoComplete="email"
										autoFocus
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="password">
										Password
									</InputLabel>
									<Input
										name="password"
										type="password"
										id="password"
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="repeatPassword">
										Repeat Password
									</InputLabel>
									<Input
										name="repeatPassword"
										type="repeatPassword"
										id="repeatPassword"
									/>
								</FormControl>
							</form>
							<Button
								size="large"
								color="primary"
								onClick={this.handleSaveProfile}
							>
								Change Password
							</Button>
							<Button
								variant="outlined"
								size="large"
								color="primary"
								onClick={this.handleSaveProfile}
							>
								Save
							</Button>
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
