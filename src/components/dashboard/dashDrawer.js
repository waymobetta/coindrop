import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'
import { ReactComponent as LogoFull } from '../../components/assets/coindrop_logo_full.svg'
import InboxIcon from '@material-ui/icons/Inbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
	paper2: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		padding: '20px',
		borderRadius: '67px',
		height: 400,
	},
	leftListButton: {
		color: '#ffffff',
	},
	leftListButtonText: {
		color: '#fffff1',
	},
	toolbar: theme.mixins.toolbar,
	drawerLogo: {
		margin: '15px auto',
		minHeight: 50,
		width: 220,
		fill: '#fff',
		display: 'block',
	},
	list: {
		width: 200,
		display: 'block',
		marginTop: 100,
	},
	drawerWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			alignItems: 'flex-end',
		},
		[theme.breakpoints.down('sm')]: {
			alignItems: 'flex-start',
		},
	},
	socialIcons: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 160,
		margin: 15,
	},
})

class DashDrawer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.drawerWrapper}>
				<LogoFull className={classes.drawerLogo} />
				<Divider />
				<List className={classes.list}>
					{[
						{ name: 'Profile', url: '/dashboard/dashboard' },
						{ name: 'My Wallet', url: '/dashboard/wallet' },
						{ name: 'Tasks', url: '/dashboard/tasks' },
						{ name: 'Accounts', url: '/dashboard/accounts' },
						{ name: 'Policy', url: '/dashboard/policy' },
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
				<Divider />
				<div className={classes.socialIcons}>
					<Fab
						size="small"
						color="secondary"
						aria-label="Add"
						className={classes.margin}
					>
						<AddIcon />
					</Fab>
					<Fab
						size="small"
						color="secondary"
						aria-label="Add"
						className={classes.margin}
					>
						<AddIcon />
					</Fab>
					<Fab
						size="small"
						color="secondary"
						aria-label="Add"
						className={classes.margin}
					>
						<AddIcon />
					</Fab>
				</div>
				<List className={classes.list}>
					<ListItem
						button
						classes={{
							button: classes.leftListButton,
						}}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<Link
							to="/"
							activeClassName="active"
							className="nav-link"
						>
							<ListItemText
								primary="Logout"
								classes={{
									primary: classes.leftListButtonText,
								}}
							/>
						</Link>
					</ListItem>
				</List>
			</div>
		)
	}
}

DashDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DashDrawer)
