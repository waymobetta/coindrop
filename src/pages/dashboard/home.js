import React from 'react'
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
	isLoggedIn
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
			name: '',
			email: ''
		}
	}

	async componentDidMount() {
		try {
			if (! (await isLoggedIn())) {
				navigate('/')
				return
			}
			const {name, email} = await getProfile()
			this.setState({name, email})
		} catch(err) {
			console.error(err)
		}
	}

	render() {
		const {name, email} = this.state

		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<ProfilePage name={name} email={email} />
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
