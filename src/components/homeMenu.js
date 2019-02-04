/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
	overrides: {
		// Name of the component ⚛️ / style sheet
		MuiButton: {
			// Name of the rule
			text: {
				// Some CSS
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				borderRadius: 3,
				border: 0,
				color: 'white',
				height: 48,
				padding: '0 30px',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
			},
		},
	},
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#444444' }, // This is just green.A700 as hex.
	},
	typography: { useNextVariants: true },
})

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	customPaper: {
		backgroundColor: '#fff',
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

	handleOpenSignUp() {
		this.props.onSignUpOpen()
	}

	render() {
		const { classes } = this.props
		const sideList = (
			<div className={classes.list}>
				<Button onClick={this.toggleDrawer('right', true)}>
					Close
				</Button>

				<Button onClick={this.handleOpenSignUp}>Sign Up</Button>
			</div>
		)

		return (
			<>
				<Hidden smUp>
					<Button
						onClick={this.toggleDrawer('right', true)}
						color="secondary"
					>
						Open Right
					</Button>

					<MuiThemeProvider theme={theme}>
						<SwipeableDrawer
							anchor="right"
							PaperProps={{ rounded: 'false' }}
							classes={{
								paper: classes.customPaper,
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
					</MuiThemeProvider>
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
