import * as React from 'react'

import Container from './Container'
import Card, { CardContainer } from './Card'
import Button from './Button'

const Credits: React.FunctionComponent = () => (
  <Container>
    <h2>Credits</h2>
    <CardContainer>
      <Card title="Mario Reder" icon="marioreder.jpg">
        Net64+ client and server,
        <br />
        website
        <br />
        <Button to="https://github.com/Tarnadas" img="github.png" margin="0 0.4em 0.4em 0">
          Github
        </Button>
        <Button to="https://twitter.com/marior_dev" img="twitter.svg">
          Twitter
        </Button>
      </Card>
      <Card title="Kaze Emanuar" icon="kazeemanuar.png">
        Assembly code
        <br />
        <Button to="https://www.twitch.tv/kazesm64" img="twitch.svg" margin="0 0.4em 0.4em 0">
          Twitch
        </Button>
        <Button to="https://www.youtube.com/user/KazeBG0" img="youtube.svg" margin="0 0.4em 0.4em 0">
          YouTube
        </Button>
        <Button to="https://twitter.com/kazeemanuar" img="twitter.svg">
          Twitter
        </Button>
      </Card>
      <Card title="MelonSpeedruns" icon="melonspeedruns.jpg">
        Idea, initial release
        <br />
        <Button to="https://twitter.com/MelonSpeedruns" img="twitter.svg" margin="0 0.4em 0.4em 0">
          Twitter
        </Button>
        <Button to="https://www.youtube.com/melonspeedruns" img="youtube.svg">
          YouTube
        </Button>
      </Card>
    </CardContainer>
  </Container>
)

export default Credits
