import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from 'reactstrap';
import Header from './header'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Header siteTitle={data.site.siteMetadata.title} showLogo={false} hasShadow={false} />
				<Container>
					{children}
					<div className="root--bg1 halfOpacity"></div>
				</Container>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
