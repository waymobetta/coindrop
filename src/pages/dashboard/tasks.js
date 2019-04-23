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

	render() {
		const { classes, tasks: { tasks } } = this.props
		
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
						<DashTask key={task.id} task={task} />
					))}
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
