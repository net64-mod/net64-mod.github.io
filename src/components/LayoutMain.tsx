import * as React from 'react'
import styled from '@emotion/styled'

import { heights, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 0;

  @media (min-width: ${breakpoints.md}px) {
    margin-top: ${getEmSize(heights.navigation)}rem;
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }): JSX.Element => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
