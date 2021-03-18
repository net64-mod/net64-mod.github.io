import * as React from 'react'
import * as rehypeReact from 'rehype-react'

import Button from '../components/Button'
import Card from '../components/Card'
import DownloadButton from '../components/DownloadButton'
import Margin from '../components/Margin'
import ServerList from '../components/ServerList'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { button: Button, card: Card, 'download-button': DownloadButton, margin: Margin, 'server-list': ServerList }
}).Compiler
