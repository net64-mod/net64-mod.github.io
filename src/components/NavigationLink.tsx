import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors, heights } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const navigationPadding = 5

export interface PageLink {
  label: string
  url: string
}

const StyledNavigationLink = styled.div`
  display: inline-flex;
  align-items: stretch;
  flex-direction: column;

  a {
    outline: 0;
    padding: ${getEmSize(navigationPadding)}rem ${getEmSize(25)}rem;
    line-height: ${getEmSize(heights.navigation - 2 * navigationPadding)}rem;
    text-decoration: none !important;
    color: ${colors.brand.normal};
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

const NavigationLink: React.FunctionComponent<NavigationLinkProps> = ({ link }) => (
  <StyledNavigationLink>
    <Link to={link.url}>{link.label}</Link>
  </StyledNavigationLink>
)

export default NavigationLink
