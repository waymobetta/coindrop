import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { navigate } from "gatsby"
import ProfilePage from '../../components/dashboard/profilePage'
import {
	getProfile,
	isLoggedIn,
	getTasks,
	getWallet
} from '../../lib/api'

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
	constructor(props) {
		super(props)

		this.state = {
			globalData: {}
		}
	}

	async componentDidMount() {
		try {
			if (!(await isLoggedIn())) {
				navigate('/')
				return
			}

			await this.setGlobalData();

		} catch (err) {
			console.error(err)
		}
	}

	setGlobalData = async () => {
		const globalData = {}
		const { name, email } = await getProfile()
		const { wallets } = await getWallet()
		let tasks = await getTasks()		

		if (!Array.isArray(tasks)) {
			tasks = []
		}

		globalData.name = name
		globalData.email = email
		globalData.tasks = tasks
		globalData.wallet = wallets[0] ? wallets[0].address : 'n/a'
		
		this.setState({	globalData })

		// this.setState(prevState => ({
		// 	globalData: {
		// 		...prevState.globalData,
		// 		name,
		// 		email,
		// 		tasks,
		// 		wallets
		// 	}
		// }))

	}

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
		const { globalData } = this.state

		return (
			<Layout globalData={globalData} >
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<ProfilePage globalData={globalData} />
			</Layout>
		)
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

// export default compose(
// 	withStyles(styles, { withTheme: true }),
// 	withWidth()
// )(Dashboard)


function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Dashboard));
