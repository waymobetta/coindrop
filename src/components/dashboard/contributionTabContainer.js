/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
	tabContainer: {
		position: 'relative',
		padding: '10px 0px',
		fontSize: 14,
	},
	boxTitle: {
		...theme.boxTitle,
	},
})

class ContributionTabContainer extends Component {
	render() {
		const { classes, children } = this.props
		return <div className={classes.tabContainer}>{children}</div>
	}
}

ContributionTabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default withStyles(styles, { withTheme: true })(ContributionTabContainer)
