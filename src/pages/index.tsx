import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Button from '../components/Button'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to Net64.</p>
        <p>
          <Button to="/net64plus/">Download the client</Button>
        </p>
        <p>
          <Button to="/hosting/">Server Hosting</Button>
        </p>
        <p>
          <Button to="/faq/">Read the FAQ</Button>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
