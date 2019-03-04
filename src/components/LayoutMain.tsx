import * as React from 'react'
import styled from '@emotion/styled'

import { heights } from '../styles/variables'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: ${heights.navigation}px;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }): JSX.Element => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
