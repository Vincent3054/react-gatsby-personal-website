import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NewPage = () => (
  <Layout>
    <h1>Hi from the NEW page</h1>
    <p>Welcome to the new page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewPage