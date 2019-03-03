import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions, colors } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  background-color: ${colors.gray.calm};

  & h1,
  h2 {
    color: ${colors.brand};
  }

  & h3,
  h4 {
    color: ${colors.gray.dark};
  }
`

interface PageProps {
  className?: string
}

const Page: React.SFC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
