import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'

const styles = () => ({
	root: {
		display: 'flex',
	},
})

const LayoutConnect = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQueryConnect {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={() => (
			<>
				<CssBaseline />
				<div className="root--bg2" />
				{children}
			</>
		)}
	/>
)

LayoutConnect.propTypes = {
	children: PropTypes.node.isRequired,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(LayoutConnect)
