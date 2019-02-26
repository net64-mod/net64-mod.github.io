import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to Net64.</p>
        <p>
          <Link to="/net64plus/">Download the client</Link>
        </p>
        <p>
          <Link to="/hosting/">Server Hosting</Link>
        </p>
        <p>
          <Link to="/faq/">Read the FAQ</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
