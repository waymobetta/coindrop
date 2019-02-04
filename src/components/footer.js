/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as CommentBubles } from '../components/assets/comment_bubbles.svg'
import theme from './theme'
const styles = {
	footer: {
		backgroundColor: '#272B2F',
		height: 200,
	},
	grow: {
		flexGrow: 1,
	},
	row: {
		flexGrow: 1,
		maxWidth: 1100,
		margin: 'auto',
		padding: 10,
		color: '#fff',
	},
	footerHeader: {
		color: 'white',
	},
}

function ListItemLink(props) {
	return <ListItem button disableGutters component="a" {...props} />
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
			<Grid
				container
				spacing={24}
				className={classes.footer}
				justify="center"
			>
				<Grid
					container
					item
					xs={12}
					className={classes.row}
					wrap="wrap-reverse"
				>
					<Grid
						item
						xs={12}
						sm={6}
						container
						direction="row"
						justify="space-around"
					>
						<Grid item xs={12} sm={6}>
							<Typography
								inline
								component="h6"
								variant="h6"
								gutterBottom
								className={classes.footerHeader}
							>
								Coindrop 2019
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								size="small"
								variant="text"
								className={classes.margin}
							>
								About Us
							</Button>
							<Button
								size="small"
								variant="text"
								className={classes.margin}
							>
								Terms and policy
							</Button>
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={6}
						direction="row"
						justify="space-around"
					>
						<Grid item xs={12} sm={6}>
							<Typography
								component="h6"
								variant="h6"
								gutterBottom
								className={classes.footerHeader}
							>
								Join us!
							</Typography>
						</Grid>

						<Grid
							item
							container
							justify="center"
							alignItems="center"
							xs={6}
						>
							<IconButton
								className={classes.button}
								aria-label="Delete"
							>
								<CommentBubles />
							</IconButton>
							<IconButton
								className={classes.button}
								aria-label="Delete"
							>
								<CommentBubles />
							</IconButton>
							<IconButton
								className={classes.button}
								aria-label="Delete"
							>
								<CommentBubles />
							</IconButton>
						</Grid>
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
