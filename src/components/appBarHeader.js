import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import HomeMenu from './homeMenu'
import SignUp from './SignUp'
import ButtonHeader from './ButtonHeader'
import { ReactComponent as LogoFull } from '../components/assets/coindrop_logo_full.svg'
import theme from './theme'
const styles = {
	root: {
		flexGrow: 1,
		maxWidth: 1110,
		margin: 'auto',
		padding: '10px 0px',
	},
	appBar: {
		backgroundColor: 'transparent',
	},
	grow: {
		flexGrow: 1,
	},
	appBarToolbar: {
		[theme.breakpoints.down('md')]: {
			padding: '0px 20px',
		},
	},
	noBg: {
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	basicText: {
		textTransform: 'capitalize',
		fontSize: '16px',
		'&:hover': {
			backgroundColor: 'transparent',
			color: '#888',
		},
	},
}

class AppBarHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			signUpOpen: false,
			signUpMode: true,
		}
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		// this.handleSignUpOpen = this.handleSignUpOpen.bind(this)
		this.handleSignUpClose = this.handleSignUpClose.bind(this)
	}

	handleOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	handleSignUpOpen = type => {
		if (type === 'signUp') {
			this.setState({ signUpOpen: true, signUpMode: true })
		} else {
			this.setState({ signUpOpen: true, signUpMode: false })
		}
	}

	handleSignUpClose = () => {
		this.setState({ signUpOpen: false })
	}

	switchToSignIn = () => {
		this.setState({ signUpMode: false })
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar
					position="static"
					classes={{ root: classes.appBar }}
					elevation={0}
				>
					<Toolbar disableGutters className={classes.appBarToolbar}>
						<Grid
							container
							alignContent="space-between"
							justify="space-between"
							spacing={16}
						>
							<Grid item>
								<LogoFull className="header__logo" />
								<Typography
									variant="h6"
									color="inherit"
									className={classes.grow}
								/>
							</Grid>
							<Hidden only="xs">
								<Grid item>
									<Button
										component={Link}
										to="/login/"
										className={classes.basicText}
										activeClassName="active"
									>
										Learn More
									</Button>
								</Grid>
								<Grid item>
									<ButtonHeader
										className={classes.noBg}
										onClick={() => this.handleSignUpOpen('signIn', this)}
									>
										Login
									</ButtonHeader>
									<ButtonHeader
										onClick={() => this.handleSignUpOpen('signUp')}
									>
										Sign Up
									</ButtonHeader>
								</Grid>
							</Hidden>

							<HomeMenu onSignUpOpen={this.handleSignUpOpen} />
						</Grid>
					</Toolbar>
				</AppBar>
				<SignUp
					open={this.state.signUpOpen}
					onClose={this.handleSignUpClose}
					signUpMode={this.state.signUpMode}
					switchToSignIn={this.switchToSignIn}
				/>
			</div>
		)
	}
}

AppBarHeader.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppBarHeader)
