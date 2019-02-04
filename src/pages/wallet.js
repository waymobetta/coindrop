import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ReactComponent as LogoFull } from '../components/assets/coindrop_logo_full.svg'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import InboxIcon from '@material-ui/icons/Inbox'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Search from '@material-ui/icons/Search'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InputBase from '@material-ui/core/InputBase'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Avatar from '@material-ui/core/Avatar'
import profilePicture from '../images/avatar-profile.png'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
const drawerWidth = 355

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#171A1D',
		color: '#fff',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	leftListButton: {
		color: '#ffffff',
	},
	leftListButtonText: {
		color: '#fffff1',
	},
	ProfileHeader: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		justifyContent: 'space-between',
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
	},
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

class Wallet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mobileOpen: false,
		}
	}

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen })
	}

	render() {
		const { classes } = this.props

		const ProfileHeader = (
			<Paper className={classes.ProfileHeader} elevation={1}>
				<FormControl className={classes.margin}>
					<InputBase
						id="input-with-icon-adornment"
						startAdornment={
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						}
					/>
				</FormControl>
				<NotificationsNone />
				<Typography variant="h5" component="h3">
					hunter@email.com
				</Typography>
				<Avatar
					alt="Remy Sharp"
					src={profilePicture}
					className={classes.bigAvatar}
				/>
			</Paper>
		)

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<LogoFull className="header__logo" />
				<Divider />
				<List>
					{[
						{ name: 'Profile', url: '/' },
						{ name: 'My Wallet', url: '/dashboard/wallet' },
						{ name: 'Tasks', url: '/' },
						{ name: 'Accounts', url: '/' },
						{ name: 'Policy', url: '/' },
					].map((page, index) => (
						<ListItem
							button
							key={index}
							classes={{
								button: classes.leftListButton,
							}}
						>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<Link
								to={page.url}
								activeClassName="active"
								className="nav-link"
							>
								<ListItemText
									primary={page.name}
									classes={{
										primary: classes.leftListButtonText,
									}}
								/>
							</Link>
						</ListItem>
					))}
				</List>
			</div>
		)
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<div className={classes.root}>
					<nav className={classes.drawer}>
						{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
						<Hidden smUp implementation="css">
							<Drawer
								variant="temporary"
								open={this.state.mobileOpen}
								onClose={this.handleDrawerToggle}
								classes={{
									paper: classes.drawerPaper,
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<Hidden xsDown implementation="css">
							<Drawer
								classes={{
									paper: classes.drawerPaper,
								}}
								variant="permanent"
								open
							>
								{drawer}
							</Drawer>
						</Hidden>
					</nav>
					<main className={classes.content}>
						{ProfileHeader}

						<Grid
							container
							spacing={40}
							className={classes.root}
							justify="flex-start"
						>
							<Grid item xs={12} sm={6}>
								<Typography variant="h5" component="h3">
									Profile
								</Typography>
								<Paper className={classes.profileBoxPaper}>
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
									<Fab
										color="secondary"
										aria-label="Edit"
										className={classes.fab}
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
								</Paper>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Typography variant="h5" component="h3">
									Balance
								</Typography>
								<Paper className={classes.paper}>eeee</Paper>
							</Grid>
						</Grid>
					</main>
				</div>
			</Layout>
		)
	}
}

Wallet.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Wallet)
