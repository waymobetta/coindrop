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
		[theme.breakpoints.up('xs')]: {
			backgroundSize: '180%',
			backgroundPosition: '90% top',
			width: '100%',
			height: 760,
		},
		[theme.breakpoints.up('sm')]: {
			backgroundSize: '160%',
			backgroundPosition: '70% top',
			width: '100%',
			height: 760,
		},
		[theme.breakpoints.up('md')]: {
			backgroundSize: '120%',
			backgroundPosition: 'top right',
			width: '100%',
			height: 760,
		},
		[theme.breakpoints.up('lg')]: {
			backgroundSize: '100%',
			backgroundPosition: 'top right',
			width: '100%',
			height: 760,
		},
		[theme.breakpoints.up('xl')]: {
			backgroundSize: '120%',
			backgroundPosition: '-240px -180px',
			width: '100%',
			height: 760,
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
