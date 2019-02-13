import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import theme from './theme'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'
import ConnectBarHeader from '../components/ConnectBarHeader'

const styles = () => ({
	root: {
		display: 'flex',
	},

	connectBg: {
		top: 0,
		right: 0,
		width: '100%',
		height: 440,
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
		margin: 'auto',
		background: 'linear-gradient(#572fff 0%, #bf41ff 100%)',
		borderBottomRightRadius: 250,
		borderBottomLeftRadius: 250,
	},
})

class LayoutConnect extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {
			children,
			classes,
			canClaimEther,
			finalStep,
			verified,
		} = this.props
		return (
			<div>
				<React.Fragment>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						{finalStep && verified && canClaimEther ? (
							<div />
						) : (
							<React.Fragment>
								<ConnectBarHeader />
								<div className={classes.connectBg} />
							</React.Fragment>
						)}

						{children}
					</MuiThemeProvider>
				</React.Fragment>
			</div>
		)
	}
}

LayoutConnect.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.object,
	canClaimEther: PropTypes.bool,
	finalStep: PropTypes.bool,
	verified: PropTypes.bool,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(LayoutConnect)
