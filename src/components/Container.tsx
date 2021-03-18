import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin: ${getEmSize(48)}em auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;

  &:first-child {
    margin-top: 0;
  }
`

interface ContainerProps {
  className?: string
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
