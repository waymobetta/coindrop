import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import ProfilePage from '../../components/dashboard/profilePage'
import Connect from '../connect';

const styles = theme => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		backgroundColor: '#FAFAFA',
	},
	boxTitle: {
		fontSize: 16,
		color: '#92979D',
		paddingBottom: 5,
	},
})

class Dashboard extends React.Component {

	render() {
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<Connect />
				<ProfilePage />
			</Layout>
		)
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Dashboard)
