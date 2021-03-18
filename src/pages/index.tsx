import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import Credits from '../components/Credits'
import Button from '../components/Button'
import News from '../components/News'
import SEO from '../components/SEO'
import IndexLayout from '../layouts'

const IndexPage: React.FunctionComponent = () => (
  <IndexLayout>
    <Page>
      <Container>
        <SEO />
        <h1>Net64</h1>
        <p>
          Net64 is a modification for everyones favourite 3D Mario: Super Mario 64. Cooperate with your friends to collect all 120 stars and
          show Bowser who's boss - or just beat each other up. The modification consists of a separate application that establishes a
          connection between Super Mario 64 and the internet.
        </p>
        <Button to="/download" img="net64.svg" margin="1.2rem 0.6rem">
          Download Net64Plus »
        </Button>
      </Container>
      <Credits />
      <Container>
        <h2>Blog</h2>
        <News />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
