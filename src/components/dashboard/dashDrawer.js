import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'
import { ReactComponent as LogoFull } from '../../components/assets/coindrop_logo_dark_white.svg'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { ReactComponent as Logout } from '../assets/logout.svg'
import { ReactComponent as BoltIcon } from '../assets/boltIcon.svg'
import { ReactComponent as CubeIcon } from '../assets/cubeIcon.svg'
import { ReactComponent as StarIcon } from '../assets/starIcon.svg'
//import { ReactComponent as FileIcon } from '../assets/fileIcon.svg'
import { ReactComponent as UserIcon } from '../assets/userIcon.svg'
import Hidden from '@material-ui/core/Hidden'
import Badge from '@material-ui/core/Badge'
import SocialIcons from '../socialIcons'

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
	adminDrawerMenu: {
		backgroundColor: '#171A1D',
		width: 310,
		borderTopLeftRadius: theme.modalBorderRadius,
	},
	list: {
		marginTop: '20px',
		paddingLeft: '0',
		paddingTop: '0',
		paddingBottom: '0',
		marginBottom: '0',
		listStyle: 'none',
		position: 'unset',
		marginRight: 20,
	},
	item: {
		paddingTop: 5,
		paddingBottom: 5,
	},
	itemLink: {
		width: 'auto',
		transition: 'all 300ms linear',
		margin: '10px 15px 0',
		position: 'relative',
		display: 'block',
		padding: '0px',
		backgroundColor: 'transparent',
		color: '#9E9E9E',
		borderRadius: 30,
		textDecoration: 'none',
		'&:hover,&:focus,&:visited,&': {
			color: '#9E9E9E',
		},
		'&.active': {
			color: '#FFFFFF',
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		},
		fontSize: 16,
		fontWeight: 600,
	},
	itemIcon: {
		width: '24px',
		height: '24px',
		fontSize: '24px',
		lineHeight: '24px',
		float: 'left',
		marginRight: '15px',
		textAlign: 'center',
		verticalAlign: 'middle',
		color: 'rgba(255, 255, 255, 0.8)',
		fill: '#fff',
	},
	itemText: {
		margin: '0',
		lineHeight: '30px',
		paddingLeft: 0,
	},
	itemTextPrimary: {
		color: 'inherit',
		fontWeight: '700',
	},
	badge: {
		top: '50%',
		right: -3,
		// The border color match the background color.
		border: `2px solid ${
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[900]
			}`,
	},
	logout: {
		marginRight: 40,
	},
	dashDrawerIcon: {
		height: 24,
		width: 24,
		color: '#CA34FF',
	},
})

class DashDrawer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
	}

	determineTaskCount = () => {
		try {
			const { globalData: { tasks } } = this.props;

			return tasks ? tasks.length : 0
		} catch (error) {
			console.error('Error determining task count: ', error)
		}

	}

	render() {
		const { classes, globalData } = this.props
		const taskCount = this.determineTaskCount();

		return (
			<div className={classes.drawerWrapper}>
				<Hidden xsDown>
					<LogoFull className={classes.drawerLogo} />
					<Divider />
				</Hidden>

				<List className={classes.list}>
					{[
						{
							name: 'Profile',
							url: '/dashboard/home/',
							icon: (
								<UserIcon className={classes.dashDrawerIcon} />
							),
						},
						{
							name: 'My Wallet',
							url: '/dashboard/wallet/',
							icon: (
								<StarIcon className={classes.dashDrawerIcon} />
							),
						},
						{
							name: 'Tasks',
							url: '/dashboard/tasks/',
							icon: (
								<BoltIcon className={classes.dashDrawerIcon} />
							),
						},
						{
							name: 'Accounts',
							url: '/dashboard/accounts/',
							icon: (
								<CubeIcon className={classes.dashDrawerIcon} />
							),
						},
						/*
						{
							name: 'Policy',
							url: '/dashboard/policy/',
							icon: (
								<FileIcon className={classes.dashDrawerIcon} />
							),
						},
						*/
					].map((page, index) => (
						<Link
							className={classes.itemLink}
							activeClassName="active"
							key={index}
							to={page.url}
							state={globalData}
						>
							<ListItem
								key={index}
								classes={{ root: classes.item }}
							>
								<ListItemIcon
									classes={{ root: classes.itemIcon }}
								>
									{page.icon}
								</ListItemIcon>

								<ListItemText
									primary={page.name}
									classes={{
										root: classes.itemText,
										primary: classes.itemTextPrimary,
									}}
								/>
								{page.name === 'Tasks' && (
									<Badge
										badgeContent={taskCount}
										color="primary"
										classes={{ badge: classes.badge }}
									>{` `}</Badge>
								)}
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<SocialIcons />
				<List className={classes.logout}>
					<Link
						className={classes.itemLink}
						activeClassName="active"
						to="/logout"
					>
						<ListItem classes={{ root: classes.item }}>
							<ListItemIcon classes={{ root: classes.itemIcon }}>
								<Logout color="white" />
							</ListItemIcon>

							<ListItemText
								primary="Logout"
								classes={{
									root: classes.itemText,
									primary: classes.itemTextPrimary,
								}}
							/>
						</ListItem>
					</Link>
				</List>
			</div>
		)
	}
}

DashDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	globalData: PropTypes.object,
}

export default withStyles(styles)(DashDrawer)
