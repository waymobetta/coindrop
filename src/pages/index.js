import React from 'react'
//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Landing from '../components/landing'
import SEO from '../components/seo'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import classNames from 'classnames'
import { ReactComponent as IconRecognition } from '../components/assets/IconRecognition.svg'
import { ReactComponent as UnlockIcon } from '../components/assets/UnlockIcon.svg'
import { ReactComponent as TasksIcon } from '../components/assets/TasksIcon.svg'
import CollectEtherBanner from '../components/collectEtherBanner'

const styles = theme => ({
	root: {
		maxWidth: 1100,
		margin: 'auto',
		flexGrow: 1,
	},
	row: {
		flexGrow: 1,
		padding: 20,
	},
	fullRow: {
		//padding: 10,
	},
	hero1: {
		minHeight: 660,
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			marginTop: 30,
		},
	},
	hero2: {
		minHeight: 400,
		marginBottom: 300,
		marginTop: 200,
		[theme.breakpoints.up('md')]: {
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: 100,
			marginTop: 0,
		},
	},
	hero3: {
		minHeight: 440,
		marginTop: 100,
		background: 'linear-gradient(45deg, #BF41FF 30%, #9039FF 90%)',
		[theme.breakpoints.down('xs')]: {
			minHeight: 270,
		},
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	grow: {
		flexGrow: 1,
	},
	fullWidth: {
		background:
			'linear-gradient(301.29deg, #BF41FF 100%, #BB40FF 72.94%, #572FFF 0%)',
		height: 300,
	},
	listIconTransparent: {
		backgroundColor: 'transparent',
	},
	iconPink: {
		fill: '#CA34FF',
		color: '#CA34FF',
	},

	collectBonus: {
		zIndex: 9,
	},
	iconRecognition: {
		width: 60,
		height: 60,
		color: '#CA34FF',
	},
	iconTasks: {
		width: 60,
		height: 60,
		color: '#CA34FF',
	},
	iconUnlock: {
		width: 60,
		height: 60,
		color: '#CA34FF',
	},
	reputationBox: {
		borderRadius: 45,
		padding: 30,
		textAlign: 'right',
		boxShadow:
			'0 12px 22px 0 rgba(99,108,123,0.1), 0 -12px 22px 0 rgba(99,108,123,0.05)',
	},
	reputationSubTitle: {
		marginBottom: 40,
	},
	hero1Title: {
		fontSize: 45,
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			fontSize: 30,
		},
	},
	hero2Title: {
		fontSize: 40,
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			fontSize: 30,
		},
	},
	hero3Box: {
		backgroundColor: 'pink',
		borderRadius: 67,
		background: 'linear-gradient(103deg, #BF41FF 20%, #572FFF 100%)',
		boxShadow: '-4px 5px 26px 0 rgba(19,19,19,0.2)',

		position: 'relative',
		padding: '30px 30px 20px 50px',
		[theme.breakpoints.down('xs')]: {
			height: 270,
			top: -90,
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: 580,
			height: 270,
			top: -90,
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: 980,
			height: 360,
			top: -210,
		},
	},
	hero3CutWrapper: {
		overflow: 'hidden',
		height: 360,
		width: '100%',
		display: 'block',
		position: 'absolute',
		left: 0,
		top: 0,
		borderRadius: 64,
		[theme.breakpoints.down('sm')]: {
			height: '270px',
		},
	},
	hero3CutWrapperInn: {
		overflow: 'hidden',
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'block',
	},
	hero3Cut: {
		backgroundColor: '#47317A',

		display: 'block',
		position: 'absolute',
		zIndex: 0,

		[theme.breakpoints.up('xs')]: {
			height: '300px',
			width: '600px',
			right: -170,
			top: 200,
			transform: 'rotate(-37deg)',
		},
		[theme.breakpoints.up('sm')]: {
			height: '460px',
			width: '540px',
			right: -170,
			top: 65,
			transform: 'rotate(-37deg)',
		},
		[theme.breakpoints.up('md')]: {
			height: '380px',
			width: '780px',
			right: -110,
			top: 112,
			transform: 'rotate(-37deg)',
		},
	},
	hero3Title: {
		color: '#FFF',
		zIndex: 99,
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			fontSize: 22,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 30,
			marginBottom: 20,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 40,
			lineHeight: '60px',
		},
	},
	hero3Subtitle: {
		color: '#FFF',
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			marginTop: 20,
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 20,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 24,
		},
	},
	underline: {
		textDecoration: 'underline',
		textUnderlinePosition: 'under',
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
		fontSize: '15px',
	},
	pill: {
		width: '900px',
		height: '300px',
		display: 'block',
		position: 'absolute',
		borderRadius: '300px',
		transform: 'rotate(-42deg)',
		background: 'linear-gradient(-90deg, #A13CFF 40%, #B53FFF 100%)',
		zIndex: 0,
	},
	pill1: {
		transform: 'translate3d(-580px, 260px, 0px) rotate(-35deg)',
		opacity: '0.6',
		[theme.breakpoints.down('xs')]: {
			zoom: 0.6,
			transform: 'translate3d(-580px, 260px, 0px) rotate(-35deg)',
		},
	},
	pill2: {
		width: '570px',
		height: '200px',
		background: 'linear-gradient(90deg, #9633f3 40%, #B53FFF 100%)',
		transform: 'translate3d(340px, -105px, 0px) rotate(-37deg)',
		opacity: '0.6',
		[theme.breakpoints.down('xs')]: {
			zoom: 0.6,
			transform: 'linear-gradient(90deg, #9633f3 40%, #B53FFF 100%)',
		},
	},
	hero3GridLeft: {
		zIndex: 9,
	},
})

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.toggleBanner = this.toggleBanner.bind(this)
		this.handleBannerClose = this.handleBannerClose.bind(this)
	}
	toggleBanner() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}
	handleBannerClose = () => {
		this.setState({ isOpen: false })
	}
	componentDidMount() {}
	render() {
		const { classes } = this.props
		return (
			<Landing>
				<SEO title="Home" keywords={['coinDrop', 'application', 'react']} />
				<div className={classes.root}>
					<CollectEtherBanner
						open={this.state.isOpen}
						handleBannerClose={this.handleBannerClose}
					/>
					<Grid
						container
						spacing={24}
						className={classNames(classes.row, classes.hero1)}
						justify="center"
						wrap="wrap-reverse"
						alignItems="center"
					>
						<Grid item xs={12} sm={5}>
							<Typography
								component="h1"
								variant="h1"
								color="textPrimary"
								className={classes.hero1Title}
								gutterBottom
							>
								Learn Crypto With Huobi!
							</Typography>
							<Typography
								variant="body1"
								color="textPrimary"
								gutterBottom
								className={classes.reputationSubTitle}
							>
								Projects currently listed on Huobi Exchange can now provide opportunities for you to learn more about them as well as earning some valuable and unique crypto rewards in the process!
							</Typography>
							<Button
								variant="contained"
								color="primary"
								onClick={this.toggleBanner}
							>
								Get Started
							</Button>
						</Grid>
						<Grid item xs={12} sm={7} />
					</Grid>

					<Grid
						container
						spacing={24}
						className={classNames(classes.row, classes.hero2)}
						justify="center"
						wrap="wrap-reverse"
						alignItems="center"
						item
						md={11}
						sm={12}
					>
						<Grid item xs={12} sm={8} md={7}>
							<Paper
								elevation={1}
								color="default"
								className={classes.reputationBox}
							>
								<List>
									<ListItem>
										<span>
											<IconRecognition className={classes.iconRecognition} />
										</span>
										<ListItemText primary="Gain recognition and tokens by learning about projects at your leisure." />
									</ListItem>
									<ListItem>
										<span>
											<UnlockIcon className={classes.iconUnlock} />
										</span>
										<ListItemText primary="Unlock badges for individual achievements." />
									</ListItem>
									<ListItem>
										<span>
											<TasksIcon className={classes.iconTasks} />
										</span>
										<ListItemText primary="Complete tasks and surveys to receive crypto rewards." />
									</ListItem>
								</List>
								<Button variant="text" color="secondary" size="medium">
									Get Started
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={4} md={5}>
							<Typography
								component="h1"
								variant="h1"
								color="textPrimary"
								className={classes.hero2Title}
								gutterBottom
							>
								Learn about crypto-currency and crypto-assets!
							</Typography>
						</Grid>
					</Grid>
				</div>
				<Grid
					container
					className={classNames(classes.fullRow, classes.hero3)}
					justify="center"
					wrap="wrap-reverse"
				>
					<Grid
						item
						container
						spacing={24}
						className={classNames(classes.row, classes.hero3Box)}
						justify="space-between"
						alignItems="center"
						xs={10}
					>
						<span className={classes.hero3CutWrapper}>
							<span className={classes.hero3CutWrapperInn}>
								<div className={classes.hero3Cut} />
								<span className={classNames(classes.pill, classes.pill1)} />
								<span className={classNames(classes.pill, classes.pill2)} />
							</span>
						</span>
						<Grid item xs={12} sm={5} className={classes.hero3GridLeft}>
							<Typography
								component="h1"
								variant="h1"
								color="textPrimary"
								className={classes.hero3Title}
							>
								Sign up and receive a $5 Ether{' '}
								<span className={classes.underline}>bonus</span>
							</Typography>
							<Typography
								color="textPrimary"
								gutterBottom
								className={classes.hero3Subtitle}
							>
								This is a limited time offer!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} md={4} container justify="center">
							<Button
								variant="contained"
								color="primary"
								className={classes.collectBonus}
							>
								Collect Bonus
							</Button>
						</Grid>
						<span className={classes.tosMayApply}>
							*Terms and Conditions apply.
						</span>
					</Grid>
				</Grid>
			</Landing>
		)
	}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index)
