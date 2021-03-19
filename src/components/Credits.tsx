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
        Assembly code, 3D models
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
      <Card title="Marshivolt" icon="marshivolt.jpg">
        3D models
        <br />
        <Button to="https://twitter.com/Marshivolt" img="twitter.svg" margin="0 0.4em 0.4em 0">
          Twitter
        </Button>
        <Button to="https://www.youtube.com/channel/UCi8_NJFUne1kchf58qHfA-Q" img="youtube.svg">
          YouTube
        </Button>
      </Card>
      <Card title="Others" icon="team.svg">
        <b>Henrik</b>, old Linux client + work on v3
        <br />
        <b>Guad</b>, work on v1
        <br />
        <b>Cjes</b>, 3D model
        <br />
        <b>TheAnkleDestroyer</b>, 3D models
      </Card>
    </CardContainer>
  </Container>
)

export default Credits
