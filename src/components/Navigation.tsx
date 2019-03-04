import * as React from 'react'
import styled from '@emotion/styled'

import NavigationLink, { PageLink } from './NavigationLink'
import { heights, zIndices, colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${getEmSize(heights.navigation)}rem;
  line-height: ${getEmSize(heights.navigation)}rem;
  width: 100%;
  z-index: ${zIndices.navigation};
  display: block;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.gray.copy};
  background-color: ${colors.white};
  align-items: center;
  font-size: ${getEmSize(18)}em;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px ${colors.gray.copy};
  & > div {
    max-width: 960px;
    margin: auto;
  }
`

interface NavigationProps {
  links: PageLink[]
}

const Navigation: React.SFC<NavigationProps> = ({ links }): JSX.Element => (
  <StyledNavigation>
    <div>
      {links.map(pageLink => (
        <NavigationLink link={pageLink} key={pageLink.url} />
      ))}
    </div>
  </StyledNavigation>
)

export default Navigation
