import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import DashAccountItem from '../../components/dashboard/dashAccountItem'
import theme from '../../components/theme'
import { ReactComponent as Reddit } from '../../components/assets/reddit.svg'
import classNames from 'classnames'
import { navigate } from 'gatsby'

const styles = () => ({
	accountBoxPaper: {
		position: 'relative',
		borderRadius: 33,
		flexGrow: 1,
		...theme.boxShadow,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.down('sm')]: {
			minHeight: 300,
		},
	},
	fabEdit: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -30,
		top: 50,
		position: 'absolute',
	},
	currentValue: {
		flexGrow: 1,
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
	},
	accountType: {
		flexGrow: 2,
		maxWidth: '300px',
		fontSize: '14px',
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
	redditIcon: {
		backgroundColor: '#8C8C8C',
		borderRadius: '40px',
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
		float: 'right',
		fill: '#CA34FF',
		width: 36,
		height: 36,
	},
	unverifiedAddress: {
		color: 'red',
	},
	verifiedAddress: {
		color: 'green',
	}
})

class Wallet extends Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	walletAddress: '',
		// }
	}

	// generateWallets = () => {
	// 	const { wallets } = this.props;
	//  const wallet = wallets.map((wallet) => (
	// <DashAccountItem .... etc></DashAccountItem>
	// ))
	// 	/**
	// 	 * once we add more functionality and allow more types of wallets, will need to add a mapping function for the different wallets.
	// 	 */
	// }

	navigateToVerificationTask = () => {
		try {
			const { tasks: { tasks } } = this.props;
			const task = tasks.find((task) => task.author === 'MyCrypto')
			const taskId = task.id
	
			navigate(`dashboard/taskDetail?id=${taskId}`)
		} catch (error) {
			console.error('error navigating to task: ', error)
		}
	}



	render() {
		const { classes, wallets } = this.props

		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<Hidden mdUp>
					<Typography
						variant="h2"
						component="h2"
						className={classes.boxTitle}
					>
						Wallets
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={10}>
					<Hidden smDown>
						<Typography
							variant="h6"
							component="h6"
							className={classes.boxTitle}
						>
							Wallets
						</Typography>
					</Hidden>
					<Paper className={classes.accountBoxPaper}>
						<DashAccountItem
							variant="outlined"
							size="large"
							color="primary"
							set={wallets.verified}
							onClick={this.navigateToVerificationTask}
							render={
								<Reddit
									className={classNames(
										classes.leftIcon,
										classes.redditIcon
									)}
									color="#FFF"
								/>
							}
						>
							<span className={classes.accountType}>Ethereum</span>
							<span className={classNames(wallets.verified ? classes.verifiedAddress : classes.unverifiedAddress, classes.currentValue)}>
								{wallets ? wallets.eth : 'n/a'}
							</span>
						</DashAccountItem>
					</Paper>
				</Grid>
			</Layout>
		)
	}
}

Wallet.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	location: PropTypes.object,
	wallets: PropTypes.object,
}


const mapStateToProps = (state) => ({
	wallets: state.wallets,
	tasks: state.tasks,
})

export default connect(mapStateToProps)(compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Wallet))
