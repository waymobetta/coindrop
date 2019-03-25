/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
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
		backgroundColor: '#ccc',
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
		const { classes } = this.props
		return (
			<Grid item xs={12} sm={5}>
				<Paper className={classes.tasksBoxPaper}>
					<div className={classes.taskTop}>
						<span className={classes.taskRound} />
						<div className={classes.taskInfo}>
							<span className={classes.taskName}>adChain</span>
							<span className={classes.taskDesc}>Video Quiz</span>
						</div>
						<span className={classes.date}>Today</span>
					</div>
					<div className={classes.taskMiddle}>
						<span className={classes.badges}>$6 (1000 ADT)</span>
						<span className={classes.badges}>Educational Badge</span>
					</div>
					<div className={classes.taskBottom}>
						<span className={classes.taskSummary}>
							Watch a short video about adChain and take a quiz!
						</span>
						<span>
							<Link className={classes.itemLink} to="/dashboard/taskDetail">
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
}

export default withStyles(styles, { withTheme: true })(DashTask)
