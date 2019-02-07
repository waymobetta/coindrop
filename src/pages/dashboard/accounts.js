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
import DashAccountItem from '../../components/dashboard/dashAccountItem'

const styles = theme => ({
	accountBoxPaper: {
		position: 'relative',
		height: 180,
		borderRadius: 33,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
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
	},
	accountType: {
		flexGrow: 2,
		maxWidth: '300px',
	},
})

class Accounts extends React.Component {
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
							Accounts
						</Typography>
					</Hidden>
					<Paper className={classes.accountBoxPaper}>
						<DashAccountItem
							variant="outlined"
							size="large"
							color="primary"
							set
						>
							<span className={classes.accountType}>Reddit</span>

							<span className={classes.currentValue}>
								r/hunter2727
							</span>
						</DashAccountItem>
						<DashAccountItem
							variant="outlined"
							size="large"
							color="primary"
						>
							<span className={classes.accountType}>
								Stack Overflow
							</span>
							<span className={classes.currentValue}>
								UserID:
							</span>
						</DashAccountItem>
					</Paper>
				</Grid>
			</Layout>
		)
	}
}

Accounts.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Accounts)
