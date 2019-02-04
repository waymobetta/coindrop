import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Grid from '@material-ui/core/Grid'
import DashContributions from './dashContributions'
import DashProfileBox from './dashProfileBox'
import DashBadges from './dashBadges'
import DashBalances from './dashBalances'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		backgroundColor: '#FAFAFA',
	},
})

class ProfilePage extends React.Component {
	state = {
		value: 0,
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}
	render() {
		const { classes } = this.props
		const { value } = this.state
		return (
			<>
				<Hidden xsDown>
					<Grid
						container
						spacing={40}
						className={classes.root}
						justify="flex-start"
					>
						<DashProfileBox />
						<DashBadges />
					</Grid>
					<Grid
						container
						spacing={40}
						className={classes.root}
						justify="flex-start"
					>
						<DashBalances />
						<DashContributions />
					</Grid>
				</Hidden>
				<Hidden smUp>
					<DashProfileBox />
					<AppBar position="static">
						<Tabs
							centered
							value={value}
							onChange={this.handleChange}
						>
							<Tab label="Balances" />
							<Tab label="Contributions" />
							<Tab label="Badges" />
						</Tabs>
					</AppBar>
					{value === 0 && <DashBalances />}
					{value === 1 && <DashContributions />}
					{value === 2 && <DashBadges />}
				</Hidden>
			</>
		)
	}
}

ProfilePage.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(ProfilePage)
