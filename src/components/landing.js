import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import Header from './header'
import './layout.css'

const Landing = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQueryLanding {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Container>
					<div className="root--bg1"></div>
					<div className="root--bg2"></div>
					{children}
				</Container>
			</>
		)}
	/>
)

Landing.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Landing
