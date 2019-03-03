import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import DownloadButton from '../components/DownloadButton'
import IndexLayout from '../layouts'

const DownloadPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Download Net64</h1>
        <h3>Net64 Client</h3>
        <p>
          The Net64 client is everything you need to play your Super Mario 64 copy with friends. It comes with a bundled emulator and lets
          you join other server as well as creating your own.
        </p>
        <DownloadButton />
        <p>
          <br />
          You can find older releases on <a href="https://github.com/Tarnadas/net64plus/releases">GitHub</a>
        </p>
        <h3>Dedicated Server</h3>
        <p>
          If you'd like to host a server without running an instance of Super Mario 64 you can download the server executable from{' '}
          <a href="https://github.com/Tarnadas/net64plus-server">here</a>.
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default DownloadPage
