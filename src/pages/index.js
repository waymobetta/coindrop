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
import Avatar from '@material-ui/core/Avatar'
import ButtonLight from '../components/ButtonLight'
import classNames from 'classnames'
import { ReactComponent as CommentBubles } from '../components/assets/comment_bubbles.svg'

const styles = theme => ({
	root: {
		// backgroundImage: `url(${heroImage})`,
		// backgroundRepeat: 'no-repeat',
		// backgroundPosition: 'top right',
	},
	row: {
		flexGrow: 1,
		maxWidth: 1100,
		margin: 'auto',
		padding: 10,
	},
	fullRow: {
		padding: 10,
	},
	hero1: {
		minHeight: 660,
	},
	subTitle1: {
		marginBottom: 40,
	},
	hero2: {
		minHeight: 400,
		marginBottom: 300,
	},
	hero3: {
		minHeight: 440,
		background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
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
	hero3Box: {
		backgroundColor: 'pink',
		height: 360,
		borderRadius: 48,
		background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
		boxShadow: '-4px 5px 26px 0 rgba(19,19,19,0.2)',
		overflow: 'hidden',
		position: 'relative',
		marginTop: -100,
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
			height: '640px',
			width: '950px',
			right: -170,
			top: 52,
			transform: 'rotate(-45deg)',
		},
	},
	collectBonus: {
		zIndex: 9,
	},
})

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
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
								variant="h4"
								gutterBottom
							>
								Free your reputation
							</Typography>
							<Typography
								variant="subtitle1"
								gutterBottom
								className={classes.subTitle1}
							>
								Free your reputation on Reddit and Stack
								Overflow by connecting it to your Ethereum
								wallet address. Projects can then engage you on
								a 1-to-1 basis.
							</Typography>
							<ButtonLight size="large">Get Started</ButtonLight>
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
					>
						<Grid item xs={12} sm={6}>
							<Paper elevation={1} color="default">
								<List className={classes.root}>
									<ListItem>
										<Avatar
											classes={{
												root:
													classes.listIconTransparent,
											}}
										>
											<CommentBubles />
										</Avatar>
										<ListItemText primary="Gain recognition and tokens by micro-consulting for projects at your leisure." />
									</ListItem>
									<ListItem>
										<Avatar
											classes={{
												root:
													classes.listIconTransparent,
											}}
										>
											<CommentBubles />
										</Avatar>
										<ListItemText primary="Unlock badges for individual achievements." />
									</ListItem>
									<ListItem>
										<Avatar
											classes={{
												root:
													classes.listIconTransparent,
											}}
										>
											<CommentBubles />
										</Avatar>
										<ListItemText primary="Complete tasks and surveys to receive crypto micropayments." />
									</ListItem>
								</List>
								<Button size="medium">Get Started</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography
								component="h1"
								variant="h4"
								gutterBottom
							>
								Engage with projects
							</Typography>
						</Grid>
					</Grid>
				</div>
				<Grid
					container
					spacing={24}
					className={classNames(classes.fullRow, classes.hero3)}
					justify="center"
					wrap="wrap-reverse"
				>
					<Grid
						container
						spacing={24}
						className={classNames(classes.row, classes.hero3Box)}
						justify="space-between"
						alignItems="center"
					>
						<Grid item xs={12} sm={6}>
							<Typography component="h3" variant="h3">
								Sign up and receive a $5 Ether bonus
							</Typography>
							<Typography variant="subtitle1" gutterBottom>
								This is a limited time offer!
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} container justify="center">
							<ButtonLight
								size="large"
								className={classes.collectBonus}
							>
								Collect Bonus
							</ButtonLight>
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
