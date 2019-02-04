import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

const styles = theme => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		backgroundColor: '#FAFAFA',
	},
})

class Tasks extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				Tasks
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
