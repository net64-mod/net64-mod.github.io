import * as React from 'react'
import * as rehypeReact from 'rehype-react'

import Button from '../components/Button'
import DownloadButton from '../components/DownloadButton'
import ServerList from '../components/ServerList'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { button: Button, 'download-button': DownloadButton, 'server-list': ServerList }
}).Compiler
