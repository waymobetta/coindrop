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
	mobileTabsRoot: {
		backgroundColor: 'transparent',
	},
	mobileTabsLabel: {
		color: '#E66DFE',
		fontSize: 14,
		textTransform: 'Capitalize',
	},
	indicator: {
		backgroundColor: '#E66DFE',
	},
})

class ProfilePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0,
		}
	}

	handleChange(event, value) {
		this.setState({ value })
	}

	render() {
		const { classes, name, email } = this.props
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
						<DashProfileBox name={name} email={email} />
						<DashBalances />
						<DashBadges />
						<DashContributions />
					</Grid>
				</Hidden>
				<Hidden smUp>
					<DashProfileBox />

					<Tabs
						centered
						value={value}
						onChange={(event, value) => this.handleChange(event, value)}
						classes={{
							root: classes.mobileTabsRoot,
							indicator: classes.indicator,
						}}
					>
						<Tab
							label="Balances"
							classes={{ root: classes.mobileTabsLabel }}
						/>
						<Tab
							label="Contributions"
							classes={{ root: classes.mobileTabsLabel }}
						/>
						<Tab
							label="Badges"
							classes={{ root: classes.mobileTabsLabel }}
						/>
					</Tabs>
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
	email: PropTypes.string,
	name: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(ProfilePage)
