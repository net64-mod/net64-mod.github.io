import * as React from 'react'
import styled from '@emotion/styled'
import marked from 'marked'
import { emojify } from 'node-emoji'
import { sanitize } from 'dompurify'

import { Server } from '../models/Server'
import { GameMode } from '../models/GameMode'
import { Player } from '../models/Player'
import { colors } from '../styles/variables'

interface ServerPanelProps {
  server: Server
}

interface ServerPanelState {
  display: boolean
}

const ServerPanelStyled = styled.div`
  font-size: 18px;
  font-family: arial;
  font-weight: bold;
  margin: 10px 0;
`

const HeaderStyled = styled.div`
  width: 100%;
  padding: 6px 12px;
  background-color: ${colors.brand.secondary};
  border-radius: 6px;
  border: 4px solid ${colors.brand.tertiary};
  box-shadow: 0 0 0 4px ${colors.black};
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;

  .img {
    height: 18px;
    width: 27px;

    > img {
      height: 100%;
    }
  }
`

const DetailsWrapperStyled = styled.div`
  flex-direction: column;
  margin: 4px 10px 0 10px;
  width: calc(100% - 20px);
  background-color: ${colors.brand.secondary};
  border-radius: 0 0 10px 10px;
  transition: 0.5s ease max-height;
  overflow: hidden;
  max-height: ${({ display }: Partial<ServerPanelState>) => (display ? '500px' : '0px')};
`

const DetailsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`

const DescriptionStyled = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`

const PlayerListStyled = styled.div`
  display: flex;
  flex: 1 1 100px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 6px;
  min-width: 300px;
  max-height: 340px;
  overflow: hidden;
`

const PlayerStyled = styled.div`
  display: flex;
  flex: 1 1 0;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  min-width: 50%;
  overflow: hidden;

  .img {
    width: 24px;
    height: 24px;

    & img {
      height: 100%;
    }
  }

  .name {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default class ServerPanel extends React.PureComponent<ServerPanelProps, ServerPanelState> {
  public constructor(props: ServerPanelProps) {
    super(props)
    this.state = {
      display: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.renderPlayers = this.renderPlayers.bind(this)
  }

  private getDescription = (): string => {
    if (!this.props.server.description) return ''
    let description = emojify(marked(this.props.server.description))
    const document: Document = new DOMParser().parseFromString(description, 'text/html')
    description = sanitize(document.body.outerHTML)
    return description
  }

  private handleToggle(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    this.setState(prevState => ({
      display: !prevState.display
    }))
    event.preventDefault()
    event.stopPropagation()
  }

  private getGameMode(server: Server): string {
    switch (server.gameMode) {
      case GameMode.DEFAULT:
        return 'Regular'
      case GameMode.INTERACTIONLESS:
        return 'Interactionless'
      case GameMode.THIRD_PERSON_SHOOTER:
        return '3rd Person Shooter'
      case GameMode.PROP_HUNT:
        return 'Prop Hunt'
      case GameMode.TAG:
        return 'Tag'
      case GameMode.BOSS_RUSH:
        return 'Boss Rush'
      case GameMode.WARIO_WARE:
        return 'Wario Ware'
    }
    return ''
  }

  private getGameModeImgSrc(server: Server): string | undefined {
    switch (server.gameMode) {
      case GameMode.DEFAULT:
        return require('../images/regular.svg')
      case GameMode.INTERACTIONLESS:
        return require('../images/interactionless.svg')
      case GameMode.THIRD_PERSON_SHOOTER:
        return require('../images/shooter.svg')
      case GameMode.PROP_HUNT:
        return require('../images/prop_hunt.svg')
      case GameMode.TAG:
        return require('../images/tag.svg')
      case GameMode.BOSS_RUSH:
        return require('../images/boss_rush.png')
      case GameMode.WARIO_WARE:
        return require('../images/wario_ware.png')
    }
  }

  private getCharacterImage(index: number): string | undefined {
    switch (index) {
      case 0:
        return require('../images/mario.png')
      case 1:
        return require('../images/luigi.png')
      case 2:
        return require('../images/yoshi.png')
      case 3:
        return require('../images/wario.png')
      case 4:
        return require('../images/peach.png')
      case 5:
        return require('../images/toad.png')
      case 6:
        return require('../images/waluigi.png')
      case 7:
        return require('../images/rosalina.png')
      case 8:
        return require('../images/sonic.png')
      case 9:
        return require('../images/knuckles.png')
      case 10:
        return require('../images/goomba.png')
      case 11:
        return require('../images/kirby.png')
    }
  }

  private renderPlayers(players: Player[]): JSX.Element[] {
    return players
      .filter(player => player)
      .map((player, index) => (
        <PlayerStyled key={index}>
          <div className="img">
            <img src={this.getCharacterImage(player.characterId || 0)} />
          </div>
          <div className="name">{player.username}</div>
        </PlayerStyled>
      ))
  }

  public render(): JSX.Element {
    const { server } = this.props
    const { display } = this.state
    const players = server.players || []
    const gameMode: string | undefined = this.getGameModeImgSrc(server)
    const styles: Record<string, React.CSSProperties> = {
      name: {
        flex: '1 1 auto',
        wordWrap: 'break-word',
        maxWidth: 'calc(100% - 110px)'
      },
      players: {
        whiteSpace: 'nowrap',
        flex: '0 0 70px',
        textAlign: 'right'
      },
      left: {
        display: 'flex',
        wordWrap: 'break-word',
        maxWidth: '100%'
      },
      el: {
        margin: '6px'
      }
    }
    return (
      <ServerPanelStyled>
        <HeaderStyled onClick={this.handleToggle}>
          <div className="img">
            <img src={`${server.isDedicated ? require('../images/server.svg') : require('../images/pc.svg')}`} />
          </div>
          <div style={{ flex: '0 0 40px' }}>{server.countryCode || ''}</div>
          {gameMode && (
            <div className="img">
              <img src={gameMode} />
            </div>
          )}
          <div style={styles.name}>{server.name || `${server.ip}:${server.port}`}</div>
          <div style={styles.players}>{players.filter(player => player).length} / 24</div>
        </HeaderStyled>
        <DetailsWrapperStyled display={display}>
          <DetailsStyled>
            <div style={styles.left}>
              <DescriptionStyled>
                <div style={styles.el}>
                  {server.domain || server.ip}:{server.port}
                </div>
                {gameMode && <div style={styles.el}>Game Mode: {this.getGameMode(server)}</div>}
                <div className="markdown" style={{ margin: '6px' }} dangerouslySetInnerHTML={{ __html: this.getDescription() }} />
              </DescriptionStyled>
            </div>
            <PlayerListStyled>{this.renderPlayers(players)}</PlayerListStyled>
          </DetailsStyled>
        </DetailsWrapperStyled>
      </ServerPanelStyled>
    )
  }
}
