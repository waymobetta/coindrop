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
import EditIcon from '@material-ui/icons/Edit'
import theme from '../../components/theme'

const styles = () => ({
	walletBoxPaper: {
		position: 'relative',
		height: 180,
		borderRadius: 33,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		...theme.boxShadow,
	},
	fabEdit: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -30,
		top: 50,
		position: 'absolute',
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
				<Grid item xs={12} sm={10}>
					<Hidden smDown>
						<Typography variant="h5" component="h3">
							Ethereum Address
						</Typography>
					</Hidden>
					<Paper className={classes.walletBoxPaper}>
						<Typography ariant="subtitle2" gutterBottom>
							0xDfeDf14d5a2359549AbccC227B446f8DAe8bD2B0
						</Typography>
						<Fab
							color="secondary"
							aria-label="Edit"
							className={classes.fabEdit}
						>
							<EditIcon />
						</Fab>
					</Paper>

					<p>You dont have one? Create a wallet</p>
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
