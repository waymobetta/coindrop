import React from 'react'
import { Link } from 'gatsby'

import Landing from '../components/landing'
import SEO from '../components/seo'

const About = () => (
  <Landing>
    <SEO title="About" />
    <h1>About</h1>
    <p>Welcome to page 2</p>
    <Link to="/">home</Link>
  </Landing>
)

export default About