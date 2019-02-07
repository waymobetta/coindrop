import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
	tasksBoxPaper: {
		position: 'relative',
		height: 180,
		borderRadius: 33,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		marginTop: 30,
	},
})

class Tasks extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { classes } = this.props
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<Grid item xs={12} sm={10}>
					<Paper className={classes.tasksBoxPaper}>
						<Typography variant="h5" component="h3">
							Welcome to Coindrop!
						</Typography>
						<Typography ariant="subtitle2" gutterBottom>
							You don´t have any tasks yet.
						</Typography>
					</Paper>
				</Grid>
			</Layout>
		)
	}
}

Tasks.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Tasks)
