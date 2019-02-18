/* eslint-disable */
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
import { ReactComponent as LogoDarkWhite } from '../components/assets/coindrop_logo_white.svg'
import { ReactComponent as Envelope } from '../components/assets/envelope.svg'
const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: 'auto',
		padding: 10,
	},
	appBar: {
		backgroundColor: 'transparent',
	},
	grow: {
		flexGrow: 1,
	},
	contactIcon: {
		width: 24,
		height: 24,
		[theme.breakpoints.up('sm')]: {
			marginRight: 10,
		},
	},
})

class ConnectBarHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			signUpOpen: false,
			signUpMode: true,
		}
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSignUpOpen = this.handleSignUpOpen.bind(this)
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
					<Toolbar>
						<Grid
							container
							alignContent="space-between"
							justify="space-between"
							spacing={16}
						>
							<Grid item>
								<LogoDarkWhite className="header__logo__connect" />
								<Typography
									variant="h6"
									color="inherit"
									className={classes.grow}
								/>
							</Grid>

							<Grid item>
								<ButtonHeader
									onClick={() =>
										this.handleSignUpOpen('signUp', this)
									}
								>
									<Envelope
										color="white"
										className={classes.contactIcon}
									/>
									<Hidden only="xs">Contact Us</Hidden>
								</ButtonHeader>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

ConnectBarHeader.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ConnectBarHeader)
