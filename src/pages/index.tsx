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
          <Button label="Download the client" to="/net64plus/" />
        </p>
        <p>
          <Button label="Server Hosting" to="/hosting/" />
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
