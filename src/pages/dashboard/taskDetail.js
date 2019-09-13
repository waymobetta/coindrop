import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import theme from '../../components/theme'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import MyCryptoTask from '../../components/tasks/myCrypto'

const typeformEmbed = require('@typeform/embed')

const styles = () => ({
	taskDetailsBoxPaper: {
		position: 'relative',
		borderRadius: 22,
		flexGrow: 1,
		...theme.boxShadow,
		padding: '30px 36px 48px 36px',
		[theme.breakpoints.down('sm')]: {
			minHeight: 300,
		},
	},
	boxTitle: {
		...theme.boxTitle,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			fontSize: '26px',
			color: '#363C44',
			marginBottom: 30,
		},
	},
	taskRound: {
		width: 52,
		height: 52,
		display: 'block',
		borderRadius: 30,
		marginRight: 10,
	},
	taskDetailTop: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: "'Assistant', sans-serif",
		paddingBottom: 30,
		borderBottom: '1px solid #EDEDED',
	},
	taskHeader: {
		marginRight: 'auto',
	},
	taskName: {
		fontWeight: '600',
		marginRight: 10,
		borderRight: '1px solid #ccc',
		paddingRight: 10,
		fontSize: '18px',
	},
	taskDesc: {
		color: '#999',
		fontSize: '16px',
	},
	possible: {
		color: '#BBBFC4',
		fontSize: '16px',
		paddingRight: '5px',
	},
	payout: {
		fontSize: '16px',
	},
	taskPayout: {
		fontWeight: '600',
	},
	taskDetailMain: {
		display: 'flex',
		fontFamily: "'Assistant', sans-serif",
	},
	header: {
		fontSize: '24px',
		fontWeight: '600',
		margin: '0px 0px 15px 0px',
	},
	details: {
		fontSize: '16px',
		lineHeight: '23px',
		color: '#434343',
		marginBottom: '30px',
	},
	secondary: {
		padding: '16px 24px',
		minWidth: '130px',
	},
	taskPreview: {
		marginTop: 45,
	},
	taskMain: {
		marginTop: 45,
		paddingLeft: 30,
	},
	videoBox: {
		backgroundColor: '#000',
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
})

class TaskDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			task: {}
		}
	}

	componentDidMount() {
		this.setTask();
	}

	quizModal = () => {
		const reference = typeformEmbed.makePopup(
			'https://coindrop.typeform.com/to/mDDkkK',
			{
				mode: 'popup',
				onSubmit: () => {
					console.log('typeform submitted')
				}
			})

		reference.open()
	}

	getTask = (id) => {
		try {
			const { tasks: { tasks } } = this.props;
			const task = tasks.find((task) => task.id === id)

			return task
		} catch (error) {
			console.error('Error getting task: ', error)
		}
	}

	setTask = () => {
		try {
			const { location: { state } } = this.props;
			const urlParams = new URLSearchParams(window.location.search);
			const taskId = urlParams.get('id');
			let task;

			if (!state || !state.task) {
				task = this.getTask(taskId);
			} else {
				task = state.task
			}

			this.setState({ task })
		} catch (error) {
			console.error('Error setting task: ', error)
		}
	}

	render() {
		const { classes, wallets, user, dispatch } = this.props
		const { task } = this.state

		return (
			<Layout>
				<SEO title="Home" keywords={['learn.exchange', 'application', 'react']} />
				<Hidden mdUp>
					<Typography variant="h2" component="h2" className={classes.boxTitle}>
						Tasks
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={12}>
					<Paper className={classes.taskDetailsBoxPaper}>
						<div className={classes.taskDetail}>
							<div className={classes.taskDetailTop}>
								<div className={classes.taskRound}>
									<img
										src={task.logo}
										height='50px'
										width='50px'
									/>
								</div>
								<div className={classes.taskHeader}>
									<span className={classes.taskName}>{task.author}</span>
									<span className={classes.taskDesc}>{task.title}</span>
								</div>
								<div className={classes.taskPayout}>
									<span className={classes.possible}>Possible Payout:</span>
									<span className={classes.payout}>{task.tokenAllocation} {task.token}</span>
								</div>
							</div>
							<Grid container className={classes.taskDetailMain}>
								{
									task.author === 'MyCrypto'
										? <MyCryptoTask task={task} wallets={wallets} dispatch={dispatch} user={user} />
										: (
											<React.Fragment>
												<Grid
													item
													xs={12}
													sm={12}
													md={12}
													lg={7}
													className={classes.taskPreview}
												>
													<div className={classes.videoBox}>
														<iframe
															width="100%"
															height="315"
															src={task.videoSrc}
															frameBorder="0"
															allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
															allowFullScreen
														/>
													</div>
												</Grid>
												<Grid
													item
													xs={12}
													sm={12}
													md={12}
													lg={5}
													className={classes.taskMain}
												>
													<h4 className={classes.header}>
														{task.description}
													</h4>
													<p className={classes.details}>
											<br />
														<br />
													{task.instructions}
											</p>
													<Button
														variant="contained"
														color="secondary"
														className={classes.secondary}
														onClick={this.quizModal}
													>
														Take Quiz
													</Button>
												</Grid>
											</React.Fragment>
										)
								}
							</Grid>
						</div>
					</Paper>
				</Grid>
			</Layout>
		)
	}
}

TaskDetail.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	tasks: PropTypes.object,
	wallets: PropTypes.object,
	dispatch: PropTypes.func,
	user: PropTypes.object,
}

const mapStateToProps = (state) => ({
	tasks: state.tasks,
	wallets: state.wallets,
	user: state.user,
})

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(TaskDetail))
