import * as React from 'react'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'

import { getEmSize } from '../styles/mixins'
import { colors } from '../styles/variables'

const StyledButton = styled.div`
  font-size: ${getEmSize(20)}em;
  display: inline-flex;
  cursor: pointer;
  margin-bottom: 0.6rem;
  border-radius: 1000px;
  border-color: ${colors.gray.copy};
  background-color: ${colors.white};
  box-shadow: 0 ${getEmSize(5)}em ${getEmSize(15)}em ${getEmSize(3)}em ${colors.gray.copy};

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

  a {
    display: flex;
    padding: ${getEmSize(6)}em;
    color: ${colors.brand.normal};
    font-weight: 600;
    text-decoration: none !important;
    outline: 0;
  }
`

const ImgWrapper = styled.div`
  width: ${getEmSize(36)}rem;
  height: ${getEmSize(36)}rem;

  img {
    width: auto;
    height: 100%;
  }
`

const Label = styled.div`
  height: ${getEmSize(36)}rem;
  line-height: ${getEmSize(36)}rem;
  padding: 0 ${getEmSize(4)}rem;
`

interface ButtonProps {
  to?: string
  img?: string
}

interface StaticQueryProps {
  allFile: {
    edges: {
      node: {
        absolutePath: string
        relativePath: string
      }
    }[]
  }
}

const getContent = (children: React.ReactNode, img?: string): JSX.Element => (
  <>
    {img && (
      <ImgWrapper>
        <img src={img} />
      </ImgWrapper>
    )}
    <Label>{children}</Label>
  </>
)
const Button: React.SFC<ButtonProps> = ({ to, img, children }): JSX.Element => (
  <StaticQuery
    query={graphql`
      query ButtonQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              absolutePath
              relativePath
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const buttonImg = data.allFile.edges.find(edge => edge.node.relativePath === img)
      const image = buttonImg ? require(`../images/${buttonImg.node.relativePath}`) : undefined
      return (
        <StyledButton>
          {to ? (
            to.includes('//') ? (
              <a href={to} target="_blank" rel="noopener noreferrer">
                {getContent(children, image)}
              </a>
            ) : (
              <Link to={to}>{getContent(children, image)}</Link>
            )
          ) : (
            getContent(children, image)
          )}
        </StyledButton>
      )
    }}
  />
)

export default Button
