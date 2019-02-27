import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import theme from './theme'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'
import ConnectBarHeader from '../components/ConnectBarHeader'
import PillCloud from '../components/steps/pillCloud'

const styles = () => ({
	root: {
		display: 'flex',
	},
	connectBg: {
		top: 0,
		right: 0,
		width: '100%',
		height: '400px',
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
		margin: 'auto',
		background:
			'linear-gradient(-127deg, #8337FF 0%, #bf41ff 86%, #bf41ff 100%)',
		boxShadow: '0 10px 20px 0 rgba(184,91,255,0.46)',
		borderBottomRightRadius: 250,
		borderBottomLeftRadius: 250,
		[theme.breakpoints.down('xs')]: {
			borderBottomRightRadius: 50,
			borderBottomLeftRadius: 50,
		},
	},
	connectFull: {
		top: 0,
		right: 0,
		width: '100%',
		height: '100%',
		display: 'block',
		position: 'absolute',
		zIndex: '-1',
		margin: 'auto',
		backgroundColor: '#FFF',
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
			activeStep,
		} = this.props
		return (
			<div>
				<React.Fragment>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						{finalStep && verified && canClaimEther ? (
							<React.Fragment>
								<ConnectBarHeader />
								<div className={classes.connectBg} />
								<PillCloud />
							</React.Fragment>
						) : (
							<React.Fragment>
								{activeStep !== 0 && <ConnectBarHeader />}

								<div className={classes.connectBg} />
							</React.Fragment>
						)}

						{children}
						{activeStep === 0 && (
							<div className={classes.connectFull}>
								<PillCloud />
							</div>
						)}
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
	activeStep: PropTypes.number,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(LayoutConnect)
