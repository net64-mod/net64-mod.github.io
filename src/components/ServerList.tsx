import * as React from 'react'
import styled from '@emotion/styled'

import ServerPanel from './ServerPanel'
import { Server } from '../models/Server'
import { getNet64Servers } from '../utils/request'
import { ProgressSpinner } from './ProgressSpinner'

interface ServerListState {
  servers: Server[]
  warning: string
  loading: boolean
}

const ServerListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px;
  flex: 1 0 auto;
`

const ServerListFetchStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & div {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin: 10px 0;
  }
`

export default class ServerList extends React.PureComponent<null, ServerListState> {
  private mounted = false

  public constructor(props: null) {
    super(props)
    this.state = {
      servers: [],
      warning: '',
      loading: false
    }
    this.updateServers = this.updateServers.bind(this)
    this.renderServers = this.renderServers.bind(this)
  }

  public componentDidMount(): void {
    this.mounted = true
    this.updateServers()
  }

  public componentWillUnmount(): void {
    this.mounted = false
  }

  public componentDidUpdate(): void {
    this.setState({
      loading: false
    })
  }

  private async updateServers(): Promise<void> {
    if (!this.mounted) return
    try {
      const servers = await getNet64Servers()
      if (!this.mounted) return
      if (!servers) return
      this.setState({
        servers
      })
    } catch (err) {
    } finally {
      if (this.mounted) {
        setTimeout(this.updateServers, 10000)
        this.setState({
          loading: false
        })
      }
    }
  }

  private renderServers(servers: Server[]): JSX.Element[] {
    return servers.map((server) => <ServerPanel key={server.id} server={server} />)
  }

  public render(): JSX.Element {
    const { servers, loading, warning } = this.state
    const initialLoading = servers.length === 0 && !warning
    return (
      <ServerListStyled>
        {loading && <ProgressSpinner />}
        {initialLoading && (
          <ServerListFetchStyled>
            <ProgressSpinner inline />
          </ServerListFetchStyled>
        )}
        {this.renderServers(servers)}
      </ServerListStyled>
    )
  }
}
