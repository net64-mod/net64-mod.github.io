import * as React from 'react'
import rehypeReact from 'rehype-react'

import Button from '../components/Button'
import DownloadButton from '../components/DownloadButton'
import ServerList from '../components/ServerList'

export const renderAst = rehypeReact({
  createElement: React.createElement,
  // TODO those typings seem to be wrong
  components: { button: Button, 'download-button': DownloadButton as any, 'server-list': ServerList as any }
}).Compiler
