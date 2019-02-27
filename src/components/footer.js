import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import theme from './theme'
import SocialIcons from './socialIcons'
const styles = {
	footer: {
		backgroundColor: '#272B2F',
		height: 220,
		[theme.breakpoints.down('xs')]: {
			height: 270,
		},
	},
	grow: {
		flexGrow: 1,
	},
	row: {
		flexGrow: 1,
		maxWidth: 1100,
		margin: 0,
		padding: 0,
		color: '#fff',
	},
	footerHeader: {
		color: 'white',
		margin: 'auto 0px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			marginTop: '30px',
			marginBottom: 10,
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			textAlign: 'left',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '0px',
		},
	},
	footerLink: {
		color: '#A5A5A5',
		textTransform: 'capitalize',
	},
	footerLinks: {
		textAlign: 'center',
		margin: 'auto',
	},
	socialIconsHome: {
		margin: '0px 20px 0px 20px',
		border: '0px',
	},
}

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			signUpOpen: false,
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

	handleSignUpOpen = () => {
		this.setState({ signUpOpen: true })
	}

	handleSignUpClose = () => {
		this.setState({ signUpOpen: false })
	}

	render() {
		const { classes } = this.props
		return (
			<Grid container className={classes.footer} justify="center">
				<Grid
					container
					item
					xs={12}
					className={classes.row}
					wrap="wrap-reverse"
					justify="space-between"
				>
					<Grid
						item
						xs={12}
						sm={6}
						container
						direction="row"
						justify="space-between"
					>
						<Typography
							component="h6"
							variant="h6"
							gutterBottom
							className={classes.footerHeader}
						>
							Coindrop 2019
						</Typography>

						<div
							item="true"
							xs={12}
							sm={6}
							className={classes.footerLinks}
						>
							<Button
								size="small"
								variant="text"
								className={classes.footerLink}
							>
								About Us
							</Button>
							<Button
								size="small"
								variant="text"
								className={classes.footerLink}
							>
								Terms and policy
							</Button>
						</div>
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={4}
						direction="row"
						justify="space-around"
					>
						<Typography
							component="h6"
							variant="h6"
							gutterBottom
							className={classes.footerHeader}
						>
							Join us!
						</Typography>

						<SocialIcons
							className={classes.socialIconsHome}
							xs={7}
						/>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
