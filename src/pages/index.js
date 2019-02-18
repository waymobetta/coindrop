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
		},
	},
	hero2: {
		minHeight: 400,
		marginBottom: 300,
		[theme.breakpoints.up('md')]: {
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: 100,
		},
	},
	hero3: {
		minHeight: 440,
		background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
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
		borderRadius: 34,
		padding: 20,
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

		borderRadius: 48,
		background: 'linear-gradient(103deg, #BF41FF 20%, #572FFF 100%)',
		boxShadow: '-4px 5px 26px 0 rgba(19,19,19,0.2)',
		overflow: 'hidden',
		position: 'relative',
		padding: 30,
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
			height: 320,
			top: -210,
		},
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
			transform: 'rotate(-20deg)',
		},
		[theme.breakpoints.up('sm')]: {
			height: '460px',
			width: '540px',
			right: -170,
			top: 52,
			transform: 'rotate(-45deg)',
		},
		[theme.breakpoints.up('md')]: {
			height: '500px',
			width: '670px',
			right: -170,
			top: 52,
			transform: 'rotate(-45deg)',
		},
	},
	hero3Title: {
		color: '#FFF',

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
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
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
								Free your reputation
							</Typography>
							<Typography
								variant="body1"
								color="textPrimary"
								gutterBottom
								className={classes.reputationSubTitle}
							>
								Free your reputation on Reddit and Stack
								Overflow by connecting it to your Ethereum
								wallet address. Projects can then engage you on
								a 1-to-1 basis.
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
						<Grid item xs={12} sm={8} md={6}>
							<Paper
								elevation={1}
								color="default"
								className={classes.reputationBox}
							>
								<List>
									<ListItem>
										<span>
											<IconRecognition
												className={
													classes.iconRecognition
												}
											/>
										</span>

										<ListItemText primary="Gain recognition and tokens by micro-consulting for projects at your leisure." />
									</ListItem>
									<ListItem>
										<span>
											<TasksIcon
												className={classes.iconTasks}
											/>
										</span>

										<ListItemText primary="Unlock badges for individual achievements." />
									</ListItem>
									<ListItem>
										<span>
											<UnlockIcon
												className={classes.iconUnlock}
											/>
										</span>

										<ListItemText primary="Complete tasks and surveys to receive crypto micropayments." />
									</ListItem>
								</List>
								<Button
									variant="text"
									color="secondary"
									size="medium"
								>
									Get Started
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={4} md={6}>
							<Typography
								component="h1"
								variant="h1"
								color="textPrimary"
								className={classes.hero2Title}
								gutterBottom
							>
								Engage with projects
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
						<Grid item xs={12} sm={6}>
							<Typography
								component="h1"
								variant="h1"
								color="textPrimary"
								className={classes.hero3Title}
							>
								Sign up and receive a $5 Ether bonus
							</Typography>
							<Typography
								color="textPrimary"
								gutterBottom
								className={classes.hero3Subtitle}
							>
								This is a limited time offer!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} container justify="center">
							<Button
								variant="contained"
								color="primary"
								className={classes.collectBonus}
							>
								Collect Bonus
							</Button>
						</Grid>
						<div className={classes.hero3Cut} />
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
