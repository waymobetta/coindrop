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
		minWidth: 340,
	},
	main: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
		[theme.breakpoints.up('md')]: {
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
		padding: '60px 10px 60px 10px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	modalCloseButton: {
		top: -20,
		right: -20,
		position: 'absolute',
	},
	etherellaImage: {
		//float: 'right',
	},
	gridContainer: {
		flexGrow: 1,
	},
	gridContainerRight: {
		maxHeight: 260,
	},
	backdropBg: {
		background:
			'linear-gradient(113deg, #572fffde 10%, #572fffc2 46%, #bf41ffd9 100%)',
	},
	h2: {
		fontSize: '30px',
		color: '#3D3D3D',
	},
	h4: {
		maxWidth: '230px',
		fontWeight: 'normal',
		lineHeight: '24px',
		letterSpacing: '0.25px',
		marginBottom: 50,
		[theme.breakpoints.down('sm')]: {
			maxWidth: '80%',
			textAlign: 'center',
			margin: '0px auto 30px auto',
		},
	},
	textPrimary: {
		color: '#BBBDBF',
		fontWeight: '600',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	secondary: {
		width: 176,
		textTransform: 'none',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	tosMayApply: {
		display: 'block',
		position: 'absolute',
		right: '0px',
		left: '0px',
		margin: '0 auto',
		width: '100%',
		textAlign: 'center',
		bottom: '-30px',
		color: '#fff',
		fontSize: '14px',
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
				BackdropProps={{ classes: { root: classes.backdropBg } }}
				open={this.props.open}
				onClose={this.props.handleBannerClose}
			>
				<div style={getModalStyle()} className={classes.modalBannerPaper}>
					<main className={classes.main}>
						<CssBaseline />
						<Paper className={classes.paper} elevation={0}>
							<Grid
								container
								direction="row"
								justify="center"
								alignItems="stretch"
								className={classes.gridContainer}
								wrap="wrap"
							>
								<Grid
									item
									container
									sm={12}
									md={5}
									justify="center"
									alignContent="center"
								>
									<img
										width="228"
										height="212"
										src={etherealla}
										className={classNames(classes.etherellaImage)}
									/>
								</Grid>
								<Grid
									item
									container
									sm={12}
									md={7}
									justify="space-around"
									alignContent="flex-start"
									direction="column"
									className={classes.gridContainerRight}
								>
									<Typography
										component="h2"
										variant="h2"
										color="textPrimary"
										className={classes.h2}
										gutterBottom
									>
										Collect $5 in Ether!
									</Typography>
									<Typography
										variant="h4"
										color="textPrimary"
										className={classes.h4}
										gutterBottom
									>
										Sign up and receive this special bonus treat
									</Typography>
									<Typography
										variant="subtitle1"
										color="textPrimary"
										className={classes.textPrimary}
										gutterBottom
									>
										This is a limited time offer
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										className={classes.secondary}
										onClick={this.closeButton}
									>
										Get it
									</Button>
								</Grid>
							</Grid>
						</Paper>
						<span className={classes.tosMayApply}>
							*Terms and Conditions apply.
						</span>
					</main>
					<IconButton
						className={classes.modalCloseButton}
						aria-label="Close Modal"
						color="secondary"
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
