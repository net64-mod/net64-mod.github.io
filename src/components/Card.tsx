import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'

import { colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  > * {
    margin: 0 ${getEmSize(24)}em ${getEmSize(36)}em ${getEmSize(24)}em;
  }
`

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${getEmSize(6)}em;
  border-radius: ${getEmSize(8)}em;
  border-color: ${colors.gray.copy};
  background-color: ${colors.white};
  box-shadow: 0 ${getEmSize(5)}em ${getEmSize(15)}em ${getEmSize(3)}em ${colors.gray.copy};
  width: ${getEmSize(420)}em;
  max-width: ${getEmSize(420)}em;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${getEmSize(12)}em;

  h3 {
    margin: 0 0 ${getEmSize(12)}em 0;
  }
`

const ImgWrapper = styled.div`
  width: ${getEmSize(120)}rem;
  height: ${getEmSize(120)}rem;

  div {
    border-radius: 25%;
    overflow: hidden;
    width: ${getEmSize(120)}rem;
  }

  img {
    width: auto;
    height: 100%;
  }
`

interface CardProps {
  title: string
  icon: string
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

const Card: React.FunctionComponent<CardProps> = ({ title, icon, children }) => (
  <StaticQuery
    query={graphql`
      query CardQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              absolutePath
              relativePath
              childImageSharp {
                fluid(maxHeight: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const cardImg = data.allFile.edges.find((edge) => edge.node.relativePath === icon)
      const image: FluidObject | string | undefined = cardImg
        ? cardImg.node.childImageSharp
          ? cardImg.node.childImageSharp.fluid
          : require(`../images/${cardImg.node.relativePath}`).default // eslint-disable-line @typescript-eslint/no-var-requires
        : undefined
      return (
        <StyledCard>
          {image && (
            <ImgWrapper>
              {typeof image == 'string' ? <img src={image} alt={`card-icon-${title.replace(/ /g, '-')}`} /> : <Img fluid={image} />}
            </ImgWrapper>
          )}
          <CardContent>
            <h3>{title}</h3>
            <div>{children}</div>
          </CardContent>
        </StyledCard>
      )
    }}
  />
)

export default Card
