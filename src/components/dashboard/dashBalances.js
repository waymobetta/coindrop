import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
	balanceBoxPaper: {
		position: 'relative',
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 200,
		padding: 15,
	},
	boxTitle: {
		...theme.boxTitle,
	},
	currency: {
		fontSize: 20,
		fontWeight: 700,
	},
	balanceUSD: {
		fontSize: 40,
		fontWeight: 700,
	},
	balanceETH: {
		fontSize: 16,
		fontWeight: 500,
		color: '#888',
		borderTop: '1px solid #cacaca',
		width: '100%',
		textAlign: 'center',
		paddingTop: 20,
	},
})

class DashBalances extends Component {
	render() {
		const { classes } = this.props
		return (
			<Grid item xs={12} sm={4}>
				<Hidden smDown>
					<Typography
						className={classes.boxTitle}
						component="subtitle1"
					>
						Coindrop Balance
					</Typography>
				</Hidden>
				<Paper className={classes.balanceBoxPaper}>
					<span className={classes.currency}>USD</span>
					<span className={classes.balanceUSD}>$5.00</span>
					<span className={classes.balanceETH}>
						ETC <b>0.005</b>
					</span>
				</Paper>
			</Grid>
		)
	}
}

DashBalances.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default withStyles(styles, { withTheme: true })(DashBalances)
