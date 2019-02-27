import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { getEmSize } from '../styles/mixins'

export interface PageLink {
  label: string
  url: string
}

const StyledNavigationLink = styled.div`
  margin: 0 ${getEmSize(12)}rem;
  a {
    color: white;
  }
`

interface NavigationLinkProps {
  link: PageLink
}

const NavigationLink: React.SFC<NavigationLinkProps> = ({ link }) => (
  <StyledNavigationLink>
    <Link to={link.url}>{link.label}</Link>
  </StyledNavigationLink>
)

export default NavigationLink
