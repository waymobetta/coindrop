import React from 'react'
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
import Fab from '@material-ui/core/Fab'
import { ReactComponent as Edit } from '../../components/assets/edit.svg'
import theme from '../../components/theme'
import Button from '@material-ui/core/Button'

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

class Wallet extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { classes } = this.props
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
						My Wallet
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={6}>
					<Hidden smDown>
						<Typography
							variant="h6"
							component="h6"
							className={classes.boxTitle}
						>
							Ethereum Address
						</Typography>
					</Hidden>
					<Paper className={classes.walletBoxPaper}>
						<Typography
							ariant="subtitle2"
							gutterBottom
							className={classes.ethAddress}
						>
							0xDfeDf14d5a2359549AbccC227B446f8DAe8bD2B0
						</Typography>
						<Hidden smUp>
							<Button
								size="small"
								color="secondary"
								variant="text"
								align="right"
								className={classes.alignRight}
							>
								Change Password
							</Button>
						</Hidden>

						<Hidden xsDown>
							<Fab
								color="primary"
								aria-label="Edit"
								className={classes.editWalletFab}
							>
								<Edit color="white" width="24" height="24" />
							</Fab>
						</Hidden>
					</Paper>
					<Typography
						ariant="subtitle1"
						align="center"
						className={classes.createWalletText}
					>
						You dont have one? Create a wallet
					</Typography>
				</Grid>
			</Layout>
		)
	}
}

Wallet.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Wallet)
