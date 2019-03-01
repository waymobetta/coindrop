import React from 'react'
import PropTypes from 'prop-types'
//import Landing from '../components/landing'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import theme from '../components/theme'
import ForgotPassword from '../components/forgotPassword'

// TODO!

const styles = () => ({
	walletBoxPaper: {
		position: 'relative',
		height: 180,
		borderRadius: 33,
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		...theme.boxShadow,
	},
	editWalletFab: {
		margin: theme.spacing.unit,
		position: 'absolute',
		right: '-32px',
		top: '20px',
		[theme.breakpoints.down('sm')]: {
			right: '0px',
			top: '40px',
		},
	},
	boxTitle: {
		...theme.boxTitle,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			fontSize: '26px',
			color: '#363C44',
			marginBottom: 30,
		},
	},
	alignRight: {
		alignSelf: 'flex-end',
		marginBottom: 30,
		[theme.breakpoints.down('sm')]: {
			alignSelf: 'center',
		},
	},
	createWalletText: {
		margin: '15px',
	},
	ethAddress: {
		[theme.breakpoints.down('sm')]: {
			overflowWrap: 'break-word',
			width: 260,
			textAlign: 'center',
			margin: 'auto',
		},
	},
})

class Component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<ForgotPassword />
		)
	}
}

Component.propTypes = {
	classes: PropTypes.object,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: false }),
	withWidth()
)(Component)
