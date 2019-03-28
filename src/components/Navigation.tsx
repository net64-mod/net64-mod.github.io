import * as React from 'react'
import { useMedia } from 'react-use'
import styled from '@emotion/styled'

import NavigationLink, { PageLink } from './NavigationLink'
import { heights, zIndices, colors, breakpoints, widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledNavigationWrapper = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ isWide }: Partial<StyledNavigationProps>) => (isWide ? `${getEmSize(heights.navigation)}rem` : 'auto')};
  max-height: ${({ isWide, visible }: Partial<StyledNavigationProps>) =>
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
  position: relative;
  z-index: 101;
  max-width: ${getEmSize(widths.lg)}rem;
  margin: auto;

  ${({ isWide }: Partial<StyledNavigationProps>) =>
    !isWide
      ? `
    flex-direction: column;
  `
      : ''}
`

const StyledNavigationBackground = styled.div`
  position: fixed;
  z-index: ${({ visible }: Partial<StyledNavigationProps>) => (visible ? '100' : '-1')};
  background-color: ${({ visible }: Partial<StyledNavigationProps>) => (visible ? 'rgba(0, 0, 0, 0.5)' : '')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s linear background-color;
`

const MenuButton = styled.div`
  position: fixed;
  z-index: 1000;
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
  const query = `(min-width: ${breakpoints.md}px)`
  const initIsWide = window.matchMedia(query).matches
  const isWide = useMedia(query, initIsWide)
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      {!isWide && (
        <>
          <MenuButton onClick={() => setVisible(!visible)}>
            <img src={require('../images/menu.svg')} />
          </MenuButton>
          <StyledNavigationBackground visible={visible} onClick={() => setVisible(false)} />
        </>
      )}
      <StyledNavigationWrapper isWide={isWide} visible={visible}>
        <StyledNavigation isWide={isWide} visible={visible}>
          {links.map(pageLink => (
            <NavigationLink link={pageLink} key={pageLink.url} />
          ))}
        </StyledNavigation>
      </StyledNavigationWrapper>
    </>
  )
}

export default Navigation
