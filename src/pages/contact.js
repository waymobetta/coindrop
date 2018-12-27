import React from 'react'
import { Link } from 'gatsby'

import Landing from '../components/landing'
import SEO from '../components/seo'

const Contact = () => (
  <Landing>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Welcome to page 2</p>
    <Link to="/">home</Link>
  </Landing>
)

export default Contact