import React from 'react'
import { connect } from 'react-redux'
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

	determineContent = () => {
		const { wallets } = this.props;
		return !wallets.eth ? <Connect /> : <ProfilePage />
	}

	render() {
		const content = this.determineContent();

		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				{ content }
			</Layout>
		)
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	wallets: PropTypes.object,
}

const mapStateToProps = (state) => ({
	wallets: state.wallets,
})

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Dashboard))
