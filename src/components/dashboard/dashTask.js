/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { Link } from 'gatsby'

const styles = theme => ({
	tasksBoxPaper: {
		position: 'relative',
		height: 270,
		borderRadius: 22,
		fontFamily: "'Assistant', sans-serif",
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: theme.spacing.unit * 3,
		...theme.boxShadow,
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	taskRound: {
		width: 36,
		height: 36,
		display: 'block',
		borderRadius: 30,
		marginRight: 10,
	},
	taskInfo: {
		display: 'flex',
		flexDirection: 'column',
	},
	date: {
		marginLeft: 'auto',
		fontSize: 14,
		color: '#BBBFC4',
		fontWeight: '600',
		alignSelf: 'flex-start',
	},
	taskTop: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	taskName: {
		fontSize: '16px',
		color: '#434343',
		fontWeight: '700',
	},
	taskDesc: {
		fontSize: '14px',
		color: '#8B8F93',
	},
	taskMiddle: {
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid #EDEDED',
		fontWeight: '600',
		color: '#BBBFC4',
	},
	badges: {
		lineHeight: '40px',
	},
	taskBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
	},
	fabNext: {
		background: 'linear-gradient(-135deg, #E390FF 0%, #B53FFF 100%)',
		backgroundColor: '#D77BFF',
		marginRight: '-50px',
		boxShadow: '-4px 5px 26px 0 #CFB0FF',
		[theme.breakpoints.down('xs')]: {
			bottom: 0,
			right: 0,
		},
	},
	taskSummary: {
		color: '#434343',
		fontSize: '20px',
		fontWeight: '600',
		width: '80%',
	},
})

class DashTask extends Component {
	// eslint-disable-next-line no-console

	render() {
		const { classes, task } = this.props

		// Task Properties
		// author: "MyCrypto"
		// badge:
		//// description: "Awarded to those who've downloaded and signed a message using the MyCrypto wallet"
		//// id: "fb3ed1d2-f59c-4dad-a9b3-5135769da144"
		//// logoURL: "https://user-images.githubusercontent.com/17755587/55265986-e9297d00-5237-11e9-8a1f-4e938c075e86.png"
		//// name: "Crypto-conscious"
		//// __proto__: Object
		// completed: true
		// description: "Download the MyCrypto wallet and sign a message proving ownership of your Ethereum address!"
		// id: "dd35027c-1695-414d-8d0e-7588f907c590"
		// logoURL: "https://user-images.githubusercontent.com/17755587/55265986-e9297d00-5237-11e9-8a1f-4e938c075e86.png"
		// resourceId: "d0c22746-5272-4eaf-847f-ac1d76841c44"
		// resourceURL: "https://download.mycrypto.com/"
		// title: "Crypto-conscious"
		// token: ""
		// tokenAllocation: 0
		// type: "Action"

		// need DATE


		return (
			<Grid item xs={12} sm={5}>
				<Paper className={classes.tasksBoxPaper}>
					<div className={classes.taskTop}>
						<div className={classes.taskRound}>
							<img
								src={task.logo}
								height='35px'
								width='35px'
							/>
						</div>
						<div className={classes.taskInfo}>
							<span className={classes.taskName}>{task.author}</span>
							<span className={classes.taskDesc}>{task.title}</span>
						</div>
						<span className={classes.date}>{task.assignedDate}</span>
					</div>
					<div className={classes.taskMiddle}>
						<span className={classes.badges}>{task.tokenAllocation} {task.token}</span>
						<span className={classes.badges}>{task.badge.name}</span>
					</div>
					<div className={classes.taskBottom}>
						<span className={classes.taskSummary}>
							{task.description}
						</span>
						<span>
							<Link className={classes.itemLink} to={`/dashboard/taskDetail?id=${task.id}`} state={{task}}>
								<Fab
									color="primary"
									aria-label="Add"
									className={classes.fabNext}
									onClick={this.onClick}
								>
									<ArrowForward />
								</Fab>
							</Link>
						</span>
					</div>
				</Paper>
			</Grid>
		)
	}
}

DashTask.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	task: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(DashTask)
