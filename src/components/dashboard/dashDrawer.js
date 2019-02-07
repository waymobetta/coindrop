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
import { ReactComponent as CommentBubles } from '../assets/comment_bubbles.svg'

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
		height: '30px',
		fontSize: '24px',
		lineHeight: '30px',
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
		fontSize: '14px',
		color: 'inherit',
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
						<Link
							className={classes.itemLink}
							activeClassName="active"
							key={index}
							to={page.url}
						>
							<ListItem
								key={index}
								classes={{ root: classes.item }}
							>
								<ListItemIcon
									className={{ root: classes.itemIcon }}
								>
									<CommentBubles color="white" />
								</ListItemIcon>

								<ListItemText
									primary={page.name}
									classes={{
										primary: classes.itemText,
									}}
								/>
								{page.name === 'Tasks' && (
									<Badge
										badgeContent={2}
										color="primary"
										classes={{ badge: classes.badge }}
									/>
								)}
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<SocialIcons />
				<List className={classes.logout}>
					<Link className={classes.itemLink} activeClassName="active">
						<ListItem classes={{ root: classes.item }}>
							<ListItemIcon
								className={{ root: classes.itemIcon }}
							>
								<CommentBubles color="white" />
							</ListItemIcon>

							<ListItemText
								primary="Logout"
								classes={{
									primary: classes.itemText,
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
}

export default withStyles(styles)(DashDrawer)
