import * as React from 'react'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { getEmSize } from '../styles/mixins'
import { colors } from '../styles/variables'

const StyledButton = styled.div`
  font-size: ${getEmSize(20)}em;
  display: inline-flex;
  cursor: pointer;
  margin: ${({ margin }: Partial<ButtonProps>) => (margin ? margin : '0 0 0.6rem 0')};
  padding: ${({ padding }: Partial<ButtonProps>) => (padding ? padding : undefined)};
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
  padding: ${({ paddingtext }: Partial<ButtonProps>) => (paddingtext ? paddingtext : `0 ${getEmSize(4)}rem`)};
`

interface ButtonProps {
  to?: string
  img?: string
  margin?: string
  padding?: string
  paddingtext?: string
}

interface StaticQueryProps {
  allFile: {
    edges: {
      node: {
        absolutePath: string
        relativePath: string
        childImageSharp?: {
          fluid: FluidObject
        }
      }
    }[]
  }
}

const getContent = (children: React.ReactNode, img?: FluidObject | string, paddingtext?: string): JSX.Element => (
  <>
    {img && <ImgWrapper>{typeof img == 'string' ? <img src={img} alt={`button-${img.substr(5)}`} /> : <Img fluid={img} />}</ImgWrapper>}
    <Label paddingtext={paddingtext}>{children}</Label>
  </>
)
const Button: React.FunctionComponent<ButtonProps> = ({ to, img, margin, padding, paddingtext, children }) => (
  <StaticQuery
    query={graphql`
      query ButtonQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              absolutePath
              relativePath
              childImageSharp {
                fluid(maxHeight: 36) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const buttonImg = data.allFile.edges.find((edge) => edge.node.relativePath === img)
      const image: FluidObject | string | undefined = buttonImg
        ? buttonImg.node.childImageSharp
          ? buttonImg.node.childImageSharp.fluid
          : require(`../images/${buttonImg.node.relativePath}`).default // eslint-disable-line @typescript-eslint/no-var-requires
        : undefined
      return (
        <StyledButton margin={margin} padding={padding}>
          {to ? (
            to.includes('//') ? (
              <a href={to} target="_blank" rel="noopener noreferrer">
                {getContent(children, image, paddingtext)}
              </a>
            ) : (
              <Link to={to}>{getContent(children, image, paddingtext)}</Link>
            )
          ) : (
            getContent(children, image, paddingtext)
          )}
        </StyledButton>
      )
    }}
  />
)

export default Button
