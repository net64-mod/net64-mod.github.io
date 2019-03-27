import * as React from 'react'
import { useMedia } from 'react-use'
import styled from '@emotion/styled'

import { heights, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: ${({ isWide }: StyledLayoutMainProps) => (isWide ? `${getEmSize(heights.navigation)}rem` : '0')};
`
interface StyledLayoutMainProps {
  isWide: boolean
}

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }): JSX.Element => {
  const isWide = useMedia(`(min-width: ${breakpoints.md}px)`)

  return (
    <StyledLayoutMain className={className} isWide={isWide}>
      {children}
    </StyledLayoutMain>
  )
}

export default LayoutMain
