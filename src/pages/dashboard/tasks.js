import React, { Component } from 'react'
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
import DashTask from '../../components/dashboard/dashTask'

const styles = () => ({
	boxTitle: {
		...theme.boxTitle,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			fontSize: '26px',
			color: '#363C44',
			marginBottom: 30,
		},
	},
})

class Tasks extends Component {

	generateTasks = () => {
		const { tasks: { tasks } } = this.props;

		return tasks && tasks.map((task, i) => (
			<DashTask key={i} task={task} />
		))
	}

	render() {
		const { classes } = this.props
		const taskList = this.generateTasks()

		return (
			<Layout>
				<SEO title="Home" keywords={['learn.exchange', 'application', 'react']} />
				<Hidden mdUp>
					<Typography variant="h2" component="h2" className={classes.boxTitle}>
						Tasks
					</Typography>
				</Hidden>
				<Hidden mdUp>
					<Typography
						variant="h2"
						component="h2"
						className={classes.boxTitle}
					>
						Tasks
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={10}>
					<Hidden smDown>
						<Typography
							variant="h6"
							component="h6"
							className={classes.boxTitle}
						>
							Tasks
						</Typography>
					</Hidden>
				</Grid>
				<Grid
					container
					spacing={40}
					className={classes.root}
					justify="flex-start"
				>
					{taskList}
				</Grid>
			</Layout>
		)
	}
}

Tasks.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	tasks: PropTypes.object,
}

const mapStateToProps = (state) => ({
	tasks: state.tasks,
})

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Tasks))
