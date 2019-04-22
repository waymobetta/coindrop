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
import DashTask from '../../components/dashboard/dashTask'
import //getTasks,
//getTask
'../../lib/api'

// const tasks = [
// 	{
// 		id: '0001',
// 		name: 'AdChain',
// 		subTitle: 'Sub Title',
// 		date: 'Today',
// 		amount: '$6 (1000 ADT)',
// 		badge: 'Educational Badge',
// 		summary: 'Watch a short video about adChain and take a quiz!',
// 	},
// 	{
// 		id: '0002',
// 		name: 'AdChain',
// 		subTitle: 'Sub Title',
// 		date: 'Today',
// 		amount: '$6 (1000 ADT)',
// 		badge: 'Educational Badge',
// 		summary: 'Watch a short video about adChain and take a quiz!',
// 	},
// 	{
// 		id: '0003',
// 		name: 'AdChain',
// 		subTitle: 'Sub Title',
// 		date: 'Today',
// 		amount: '$6 (1000 ADT)',
// 		badge: 'Educational Badge',
// 		summary: 'Watch a short video about adChain and take a quiz!',
// 	},
// 	{
// 		id: '0004',
// 		name: 'AdChain',
// 		subTitle: 'Sub Title',
// 		date: 'Today',
// 		amount: '$6 (1000 ADT)',
// 		badge: 'Educational Badge',
// 		summary: 'Watch a short video about adChain and take a quiz!',
// 	},
// ]

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

class Tasks extends React.Component {

	// async componentWillMount() {
	// 	try {
	// 		//const tasks = await getTasks()
	// 		//console.log(tasks)
	// 		//const taskId = '6bc25651-c46d-448b-a88e-ff2e2ed3b54c'
	// 		//const task = await getTask(taskId)
	// 		//console.log(task)
	// 	} catch (err) {
	// 		console.error(err)
	// 	}
	// }

	render() {
		const { classes, tasks } = this.props
		
		return (
			<Layout>
				<SEO title="Home" keywords={['coinDrop', 'application', 'react']} />
				<Hidden mdUp>
					<Typography variant="h2" component="h2" className={classes.boxTitle}>
						Tasks
					</Typography>
				</Hidden>
				<Grid
					container
					spacing={40}
					className={classes.root}
					justify="flex-start"
				>
					{tasks.map(task => (
						<DashTask key={task.id} data={task} />
					))}
				</Grid>
			</Layout>
		)
	}
}

Tasks.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Tasks))
