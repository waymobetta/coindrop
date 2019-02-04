import React from 'react'
import PropTypes from 'prop-types'
import AppBarHeader from './appBarHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import theme from './theme'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'
import Footer from '../components/footer'

const styles = () => ({
	root: {
		display: 'flex',
	},
})

class Landing extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { children } = this.props
		return (
			<div>
				<React.Fragment>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						<AppBarHeader />
						<div className="root--bg1" />
						<div className="root--bg2" />
						{children}
						<Footer />
					</MuiThemeProvider>
				</React.Fragment>
			</div>
		)
	}
}

Landing.propTypes = {
	children: PropTypes.node.isRequired,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Landing)
