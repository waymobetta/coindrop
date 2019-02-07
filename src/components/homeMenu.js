/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as CommentBubles } from './assets/comment_bubbles.svg'
import Hidden from '@material-ui/core/Hidden'
import ButtonLight from '../components/ButtonLight'
import ButtonOutlineDark from '../components/ButtonOutlineDark'
import SocialIcons from './socialIcons'
import Grid from '@material-ui/core/Grid'
import theme from './theme'

const styles = {
	list: {
		padding: 30,
	},
	fullList: {
		width: 'auto',
	},
	homeDrawerMenu: {
		backgroundColor: '#171A1D',
		width: 310,
		borderTopLeftRadius: theme.modalBorderRadius,
	},
	toggleButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		fill: '#fff',
	},
	socialIconsHome: {
		marginTop: 200,
		width: 210,
	},
	buttons: {
		marginTop: 30,
		height: 130,
	},
}

class HomeMenu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			right: false,
		}
		this.toggleDrawer = this.toggleDrawer.bind(this)
		this.handleOpenSignUp = this.handleOpenSignUp.bind(this)
	}

	toggleDrawer = (side, expanded) => () => {
		this.setState({
			[side]: expanded,
		})
	}

	handleOpenSignUp(type) {
		this.props.onSignUpOpen(type)
	}

	render() {
		const { classes } = this.props
		const sideList = (
			<div className={classes.list}>
				<IconButton
					className={classes.toggleButton}
					aria-label="Delete"
					onClick={this.toggleDrawer('right', true)}
				>
					<CommentBubles />
				</IconButton>

				<Grid
					item
					container
					justify="space-between"
					direction="column"
					alignItems="center"
					xs={12}
					className={classes.buttons}
				>
					<ButtonLight
						size="large"
						onClick={() => this.handleOpenSignUp('signUp', this)}
						className={classes.drawerButton}
					>
						Sign Up
					</ButtonLight>
					<ButtonOutlineDark
						size="large"
						onClick={() => this.handleOpenSignUp('signIn', this)}
					>
						Sign In
					</ButtonOutlineDark>
				</Grid>

				<SocialIcons className={classes.socialIconsHome} />
			</div>
		)
		return (
			<>
				<Hidden smUp>
					<IconButton
						className={classes.toggleButton}
						aria-label="Delete"
						onClick={this.toggleDrawer('right', true)}
					>
						<CommentBubles />
					</IconButton>

					<SwipeableDrawer
						anchor="right"
						PaperProps={{ rounded: 'false' }}
						classes={{
							paper: classes.homeDrawerMenu,
						}}
						open={this.state.right}
						onClose={this.toggleDrawer('right', false)}
						onOpen={this.toggleDrawer('right', true)}
					>
						<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('right', false)}
							onKeyDown={this.toggleDrawer('right', false)}
						>
							{sideList}
						</div>
					</SwipeableDrawer>
				</Hidden>
			</>
		)
	}
}

HomeMenu.propTypes = {
	classes: PropTypes.object.isRequired,
	onSignUpOpen: PropTypes.func,
}

export default withStyles(styles)(HomeMenu)
