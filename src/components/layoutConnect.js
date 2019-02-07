import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import compose from 'recompose/compose'
import withWidth from '@material-ui/core/withWidth'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
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
			<React.Fragment>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<div className="root--bg2" />
					{children}
				</MuiThemeProvider>
			</React.Fragment>
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
