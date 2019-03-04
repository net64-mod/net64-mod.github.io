import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { renderAst } from '../utils/rehype'
import NewsEntry from './NewsEntry'

const StyledNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 3rem;
`

interface StaticQueryProps {
  allFile: {
    edges: {
      node: {
        childMarkdownRemark: {
          htmlAst: string
          frontmatter: {
            author: string
            title: string
          }
        }
        birthTime: string
        modifiedTime: string
      }
    }[]
  }
}

const News: React.SFC<{}> = (): JSX.Element => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        allFile(filter: { sourceInstanceName: { eq: "news" } }, sort: { fields: [birthTime], order: DESC }) {
          edges {
            node {
              childMarkdownRemark {
                htmlAst
                frontmatter {
                  author
                  title
                }
              }
              birthTime
              modifiedTime
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledNews>
        {data.allFile.edges.map(edge => (
          <NewsEntry
            author={edge.node.childMarkdownRemark.frontmatter.author}
            title={edge.node.childMarkdownRemark.frontmatter.title}
            birthTime={edge.node.birthTime}
            modifiedTime={edge.node.modifiedTime}
            key={`${edge.node.birthTime}.${edge.node.childMarkdownRemark.frontmatter.title}`}
          >
            {renderAst(edge.node.childMarkdownRemark.htmlAst)}
          </NewsEntry>
        ))}
      </StyledNews>
    )}
  />
)

export default News
