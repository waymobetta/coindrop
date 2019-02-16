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
import classNames from 'classnames'

const styles = () => ({
	root: {
		display: 'flex',
	},
	heroBg: {
		[theme.breakpoints.down('xs')]: {
			backgroundSize: '100% auto',
			backgroundPosition: '60px 0px',
			width: '100%',
			height: 440,
			top: -20,
		},
		[theme.breakpoints.up('sm')]: {
			backgroundSize: '100% auto',
			backgroundPosition: '320px -130px',
			width: '100%',
			height: 620,
			top: -20,
		},
		[theme.breakpoints.up('md')]: {
			backgroundSize: '68% auto',
			backgroundPosition: '540px -60px',
			width: '100%',
			height: 720,
			top: -20,
		},
		[theme.breakpoints.up('lg')]: {
			backgroundSize: '100%',
			backgroundPosition: '110px -150px',
			width: 910,
			height: 760,
			top: -20,
		},
	},
})

class Landing extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { children, classes } = this.props
		return (
			<div>
				<React.Fragment>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						<AppBarHeader />
						<div
							className={classNames(classes.heroBg, 'root--bg1')}
						/>
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
	classes: PropTypes.object,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Landing)
