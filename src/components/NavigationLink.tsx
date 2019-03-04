import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

export interface PageLink {
  label: string
  url: string
}

const StyledNavigationLink = styled.div`
  display: inline-block;
  a {
    outline: 0;
    padding: ${getEmSize(25)}em;
    text-decoration: none !important;
    color: ${colors.brand};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &:hover {
    background-image: linear-gradient(to top, #e8e8e8, #fcfcfc);
  }
`

interface NavigationLinkProps {
  link: PageLink
}

const NavigationLink: React.SFC<NavigationLinkProps> = ({ link }): JSX.Element => (
  <StyledNavigationLink>
    <Link to={link.url}>{link.label}</Link>
  </StyledNavigationLink>
)

export default NavigationLink
