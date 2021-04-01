import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledFooter = styled.div`
  font-family: Helvetica, sans-serif;
  border-style: solid;
  border-color: ${colors.gray.copy};
  border-width: 0;
  border-top-width: 1px;
  box-shadow: inset 0 ${getEmSize(5)}em ${getEmSize(15)}em ${colors.gray.copy};
  padding-top: ${getEmSize(10)}em;
  text-align: center;
  color: ${colors.gray.dark};
`

const Footer: React.FunctionComponent = () => (
  <StyledFooter>
    <p>
      © 2019-2021 Net64 Team - <a href="https://github.com/net64-mod/net64-mod.github.io">Website source code</a>
    </p>
  </StyledFooter>
)

export default Footer
