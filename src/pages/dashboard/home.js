import React from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
// import { navigate } from "gatsby"
import ProfilePage from '../../components/dashboard/profilePage'
import {
	// isLoggedIn,
	// getTasks,
	// getWallet
} from '../../lib/api'
// import { fetchProfile } from '../../state/actions/profile'
// import { fetchWallets } from '../../state/actions/wallets'
// import { fetchTasks } from '../../state/actions/tasks'

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

	// async componentDidMount() {
	// 	try {
	// 		if (!(await isLoggedIn())) {
	// 			navigate('/')
	// 			return
	// 		}

	// 		await this.fetchUserData();

	// 	} catch (err) {
	// 		console.error(err)
	// 	}
	// }

	// fetchUserData = async () => {
	// 	const { dispatch } = this.props;
	// 	const dataToFetch = [
	// 		fetchProfile,
	// 		fetchWallets,
	// 		fetchTasks,
	// 	]

	// 	dataToFetch.forEach((action) => dispatch(action()))
	// }

	parseWallets = (wallets) => {
		try {
			if (!Array.isArray(wallets) || wallets.length === 0) {
				return null
			}

			/**
			 * once more wallet types are added, build out this function to parse the different types of wallets
			 */
			
		} catch (error) {
			console.error('Error parsing wallets: ', error)
		}

	}

	render() {
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
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
