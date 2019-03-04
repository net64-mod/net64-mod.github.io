import * as React from 'react'
import axios from 'axios'

import Button from './Button'

interface Asset {
  browser_download_url: string
  name: string
}

interface Release {
  draft: boolean
  prerelease: boolean
  assets: Asset[]
  tag_name: string
  body: string
}

interface DownloadButtonState {
  to: string
}

export default class DownloadButton extends React.PureComponent<{}, DownloadButtonState> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      to: 'https://github.com/tarnadas/net64plus/releases'
    }
  }

  public async componentDidMount(): Promise<void> {
    const releases = await this.getGithubReleases()
    for (const release of releases) {
      if (!this.isReleaseValid(release)) continue
      for (const asset of release.assets) {
        if (asset.name == null || !asset.name.includes('64plus')) continue
        const downloadUrl = asset.browser_download_url
        if (!downloadUrl) continue
        this.setState({
          to: downloadUrl
        })
        return
      }
    }
  }

  public render(): JSX.Element {
    const { to } = this.state
    return (
      <Button to={to} img="net64.svg">
        Download Net64Plus
      </Button>
    )
  }

  private isReleaseValid(release: Release): boolean {
    if (release.draft == null || release.draft) return false
    if (release.prerelease == null || release.prerelease) return false
    if (release.assets == null || release.assets.length === 0) return false
    if (!release.tag_name) return false
    return true
  }

  private async getGithubReleases(): Promise<Release[]> {
    return (await axios.request<Release[]>({
      method: 'get',
      url: 'https://api.github.com/repos/tarnadas/net64plus/releases',
      timeout: 10000
    })).data
  }
}
