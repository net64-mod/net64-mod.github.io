import * as React from 'react'
import { useMedia } from 'react-use'
import styled from '@emotion/styled'

import NavigationLink, { PageLink } from './NavigationLink'
import { heights, zIndices, colors, breakpoints, widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledNavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ isWide }: StyledNavigationProps) => (isWide ? `${getEmSize(heights.navigation)}rem` : 'auto')};
  max-height: ${({ isWide, visible }: StyledNavigationProps) =>
    isWide ? `${getEmSize(heights.navigation)}rem` : visible ? `${getEmSize(500)}rem` : '0'};
  line-height: ${getEmSize(heights.navigation)}rem;
  width: 100%;
  z-index: ${zIndices.navigation};
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.gray.copy};
  background-color: ${colors.white};
  align-items: center;
  font-size: ${getEmSize(18)}em;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px ${colors.gray.copy};
  transition: 1s ease max-height;
`

const StyledNavigation = styled.div`
  display: flex;
  max-width: ${getEmSize(widths.lg)}rem;
  margin: auto;

  ${({ isWide }: StyledNavigationProps) =>
    !isWide
      ? `
    flex-direction: column;
  `
      : ''}
`

const MenuButton = styled.div`
  position: fixed;
  right: 0;
  width: ${getEmSize(heights.navigation)}rem;
  height: ${getEmSize(heights.navigation)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 1000px;
  padding: 0.6rem;
  border-color: ${colors.gray.copy};
  background-color: ${colors.white};
  box-shadow: 0 0 ${getEmSize(8)}em ${getEmSize(3)}em ${colors.gray.copy};

  &:hover {
    background-color: ${colors.lilac};
    box-shadow: 0 ${getEmSize(10)}em ${getEmSize(10)}em ${getEmSize(5)}em ${colors.gray.copy};
    a {
      color: white;
    }
  }

  &:active {
    box-shadow: none;
    background-color: ${colors.lilac};
    a {
      color: white;
    }
  }
`
interface StyledNavigationProps {
  isWide: boolean
  visible: boolean
}

interface NavigationProps {
  links: PageLink[]
}

const Navigation: React.SFC<NavigationProps> = ({ links }): JSX.Element => {
  const isWide = useMedia(`(min-width: ${breakpoints.md}px)`)
  const [visible, setVisible] = React.useState(false)

  return (
    <StyledNavigationWrapper isWide={isWide} visible={visible}>
      {!isWide && (
        <MenuButton onClick={() => setVisible(!visible)}>
          <img src={require('../images/menu.svg')} />
        </MenuButton>
      )}
      <StyledNavigation isWide={isWide} visible={visible}>
        {links.map(pageLink => (
          <NavigationLink link={pageLink} key={pageLink.url} />
        ))}
      </StyledNavigation>
    </StyledNavigationWrapper>
  )
}

export default Navigation
