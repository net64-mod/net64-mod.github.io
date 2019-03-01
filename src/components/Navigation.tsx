import * as React from 'react'
import styled from '@emotion/styled'

import NavigationLink, { PageLink } from './NavigationLink'
import { heights, zIndices, colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${getEmSize(heights.navigation)}rem;
  line-height: ${getEmSize(heights.navigation)}rem;
  display: flex;
  z-index: ${zIndices.navigation};
  background-color: ${colors.brand};
  display: flex;
  align-items: center;
`

interface NavigationProps {
  links: PageLink[]
}

const Navigation: React.SFC<NavigationProps> = ({ links }) => (
  <StyledNavigation>
    {links.map(pageLink => (
      <NavigationLink link={pageLink} key={pageLink.url} />
    ))}
  </StyledNavigation>
)

export default Navigation
