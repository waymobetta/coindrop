import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import etherealla from './assets/etherealla@2x.png'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
	modalBannerPaper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		outline: 'none',
		borderRadius: theme.modalBorderRadius,
	},
	main: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 600,
		},
		flexGrow: 1,
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'transparent',
		width: '100%',
		minHeight: 380,
		padding: '50px 10px 40px 10px',
	},
	modalCloseButton: {
		top: -20,
		right: -20,
		position: 'absolute',
	},
	etherellaImage: {
		float: 'right',
	},
	gridContainer: {
		flexGrow: 1,
	},
})

function getModalStyle() {
	const top = 50
	const left = 50

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	}
}

class CollectEtherBanner extends React.Component {
	constructor(props) {
		super(props)
		this.closeButton = this.closeButton.bind(this)
	}
	closeButton() {
		this.props.handleBannerClose()
	}
	render() {
		const { classes } = this.props

		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				disableBackdropClick={true}
				open={this.props.open}
				onClose={this.props.handleBannerClose}
			>
				<div
					style={getModalStyle()}
					className={classes.modalBannerPaper}
				>
					<main className={classes.main}>
						<CssBaseline />
						<Paper className={classes.paper} elevation={0}>
							<Grid
								container
								direction="row"
								justify="center"
								alignItems="stretch"
								className={classes.gridContainer}
							>
								<Grid item xs={5}>
									<img
										width="228"
										height="212"
										src={etherealla}
										className={classNames(
											classes.etherellaImage
										)}
									/>
								</Grid>
								<Grid
									item
									container
									xs={7}
									justify="space-around"
									alignContent="flex-start"
									direction="column"
								>
									<Typography
										component="h2"
										variant="h2"
										color="textPrimary"
										gutterBottom
									>
										Collect $5 in Ether!
									</Typography>
									<Typography
										variant="h4"
										color="textPrimary"
										gutterBottom
									>
										Sign up and receive this special bonus
										treat
									</Typography>
									<Typography
										variant="subtitle1"
										color="textPrimary"
										gutterBottom
									>
										This is a limited time offer
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										onClick={this.closeButton}
									>
										Get It
									</Button>
								</Grid>
							</Grid>
						</Paper>
					</main>
					<IconButton
						className={classes.modalCloseButton}
						aria-label="Close Modal"
						onClick={this.closeButton}
					>
						<Close nativeColor="white" />
					</IconButton>
				</div>
			</Modal>
		)
	}
}

CollectEtherBanner.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool,
	handleBannerClose: PropTypes.func,
}

export default withStyles(styles)(CollectEtherBanner)
