import * as React from 'react'
// @ts-ignore
import rehypeReact from 'rehype-react'

import Button from '../components/Button'

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { button: Button }
}).Compiler
