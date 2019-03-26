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
import bgXl from '../images/surf_bg_wide.png'
import bg16 from '../images/surf_bg_16.png'
import bg from '../images/surf_bg_1920.png'

const styles = () => ({
	root: {
		display: 'flex',
	},
	homeWrapper: {
		position: 'relative',
		overflow: 'hidden',
	},
	heroBg: {
		width: '100%',
		height: 760,
		[theme.breakpoints.up('xs')]: {
			backgroundSize: 'auto 50%',
			backgroundPosition: '90% top',
			backgroundImage: `url('${bg}')`,
		},
		[theme.breakpoints.up('sm')]: {
			backgroundSize: 'auto 59vw',
			backgroundPosition: 'right top',
			backgroundImage: `url('${bg}')`,
		},
		[theme.breakpoints.up('md')]: {
			backgroundSize: 'auto 56vw',
			backgroundPosition: 'top right',
			backgroundImage: `url('${bg}')`,
		},
		[theme.breakpoints.up('lg')]: {
			backgroundSize: 'auto 54vw',
			backgroundPosition: 'top right',
			height: 780,
			backgroundImage: `url('${bg}')`,
		},
		[theme.breakpoints.up(1440)]: {
			backgroundSize: 'auto 48vw',
			backgroundPosition: 'top right',
			height: 780,
			backgroundImage: `url('${bg}')`,
		},
		[theme.breakpoints.up(1600)]: {
			backgroundSize: 'auto 100%',
			backgroundPosition: 'right -60px',
			height: 850,
			backgroundImage: `url('${bg16}')`,
		},
		[theme.breakpoints.up('xl')]: {
			backgroundSize: 'auto 100%',
			backgroundPosition: 'right -30px',
			height: 900,
			backgroundImage: `url('${bgXl}')`,
		},
	},
	pill: {
		width: '1160px',
		height: '400px',
		display: 'block',
		position: 'absolute',
		borderRadius: '300px',
		transform: 'rotate(-42deg)',
		backgroundColor: '#EAE6F5',
		zIndex: '-2',
		opacity: '0.27',
	},
	pill1: {
		transform: 'translate3d(-761px, 680px, 0px) rotate(-35deg)',
		[theme.breakpoints.down('xs')]: {
			zoom: 0.6,
			transform: 'translate3d(-580px, 260px, 0px) rotate(-35deg)',
		},
	},
	pill2: {
		transform: 'translate3d(581px, 400px, 0px) rotate(-35deg)',
		[theme.breakpoints.down('xs')]: {
			zoom: 0.6,
			transform: 'linear-gradient(90deg, #9633f3 40%, #B53FFF 100%)',
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
			<div className={classes.homeWrapper}>
				<React.Fragment>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						<AppBarHeader />
						<div className={classNames(classes.heroBg, 'root--bg1')} />
						<span className={classNames(classes.pill, classes.pill1)} />
						<span className={classNames(classes.pill, classes.pill2)} />
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
