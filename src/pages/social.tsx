import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const SocialPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h2>Discord</h2>
        <p>Review the following before joining our Server:</p>
        <ul>
          <li>
            <p>
              <strong>Piracy is prohibited.</strong> Linking to or discussing pirated ROMs is forbidden. <strong>Do not</strong> ask for
              ROMs etc.
            </p>
          </li>
          <li>
            <p>
              <strong>Having trouble installing Net64?</strong> Checkout <Link to="wiki/troubleshooting">troubleshooting</Link>.
            </p>
          </li>
          <li>
            <p>
              <strong>Want a quick answer?</strong> Have a look at our <Link to="/faq">FAQ</Link>.
            </p>
          </li>
          <li>
            <p>
              <strong>Can I play this on Android?</strong> No.
            </p>
          </li>
        </ul>
        <p>If you have read everything you can join our Discord here:</p>
        <a href="https://discord.gg/net64">
          <img alt="Join our Discord" src="https://discordapp.com/api/guilds/354358899328942081/widget.png?style=banner2" />
        </a>
      </Container>
    </Page>
  </IndexLayout>
)

export default SocialPage
