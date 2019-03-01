import * as React from 'react'
import styled from '@emotion/styled'

import { getEmSize } from '../styles/mixins'
import { Link, StaticQuery, graphql } from 'gatsby'

const StyledButton = styled.div`
  display: inline-flex;
  padding: ${getEmSize(6)}em;
  cursor: pointer;
  border-radius: ${getEmSize(6)}em;
  background-color: rgb(255, 229, 0);
  box-shadow: rgba(0, 0, 0, 0.5) 1px 4px 13px 0px;

  &:hover {
    background-color: rgb(50, 50, 69);

    a {
      color: white;
    }
  }

  a {
    display: flex;
    color: black;
    font-weight: 600;
    text-decoration: none;
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
  to: string
  img?: string
}

type StaticQueryProps = {
  allFile: {
    edges: {
      node: {
        absolutePath: string
        relativePath: string
      }
    }[]
  }
}

const getContent = (children: React.ReactNode, img?: string) => (
  <>
    {img && (
      <ImgWrapper>
        <img src={img} />
      </ImgWrapper>
    )}
    <Label>{children}</Label>
  </>
)
const Button: React.SFC<ButtonProps> = ({ to, img, children }) => (
  <StaticQuery
    query={graphql`
      query ButtonQuery {
        allFile(
          filter: { sourceInstanceName: { eq: "images" }, relativePath: { eq: "net64.svg" } }
          sort: { fields: [birthTime], order: DESC }
        ) {
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
      const image = img ? require(`../images/${data.allFile.edges[0].node.relativePath}`) : undefined
      return (
        <StyledButton>
          {to.includes('//') ? (
            <a href={to} target="_blank" rel="noopener norefferer">
              {getContent(children, image)}
            </a>
          ) : (
            <Link to={to}>{getContent(children, image)}</Link>
          )}
        </StyledButton>
      )
    }}
  />
)

export default Button
