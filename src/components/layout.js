import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import DashDrawer from './dashboard/dashDrawer'
import DashHeader from './dashboard/dashHeader'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as DrawerIcon } from './assets/drawerIcon.svg'
import Hidden from '@material-ui/core/Hidden'
import theme from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		display: 'flex',
		height: '100vh',
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			flexShrink: 0,
			width: 355,
		},
		[theme.breakpoints.down('sm')]: {
			width: 0,
		},
	},
	drawerPaper: {
		backgroundColor: '#171A1D',
		color: '#fff',
		[theme.breakpoints.up('md')]: {
			flexShrink: 0,
			width: 355,
		},
		[theme.breakpoints.down('sm')]: {
			flexShrink: 0,
			width: 240,
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		backgroundColor: '#FAFAFA',
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
	headerSearchForm: {
		flexGrow: 2,
	},
	mobileMenuButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 9999,
	},
})

class Layout extends React.Component {
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
		const { classes, width, children } = this.props
		const matches = width == 'xs' || width == 'sm'
		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.root}>
					<CssBaseline />
					<nav className={classes.drawer}>
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							onClose={this.handleDrawerToggle}
							open={matches ? this.state.mobileOpen : true}
							variant={matches ? 'temporary' : 'permanent'}
							anchor={matches ? 'right' : 'left'}
						>
							<DashDrawer />
						</Drawer>
					</nav>
					<main className={classes.content}>
						<Hidden mdUp>
							<IconButton
								aria-label="Add"
								className={classes.mobileMenuButton}
								onClick={this.handleDrawerToggle}
							>
								<DrawerIcon color="gray" />
							</IconButton>
						</Hidden>
						<DashHeader />
						{children}
					</main>
				</div>
			</MuiThemeProvider>
		)
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
	classes: PropTypes.object.isRequired,
}
export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Layout)
