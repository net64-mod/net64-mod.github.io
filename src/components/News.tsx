import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { renderAst } from '../utils/rehype'
import NewsEntry from './NewsEntry'

const StyledNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 3rem;
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
            date: string | Date
          }
        }
      }
    }[]
  }
}

const News: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allFile(filter: { sourceInstanceName: { eq: "news" } }, sort: { fields: [birthTime], order: DESC }) {
          edges {
            node {
              childMarkdownRemark {
                htmlAst
                frontmatter {
                  author
                  title
                  date
                }
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledNews>
        {data.allFile.edges
          .map((edge) => {
            const date = edge.node.childMarkdownRemark.frontmatter.date
            edge.node.childMarkdownRemark.frontmatter.date = new Date(date)
            return edge
          })
          .sort(
            (edge1, edge2) =>
              (edge2.node.childMarkdownRemark.frontmatter.date as Date).valueOf() -
              (edge1.node.childMarkdownRemark.frontmatter.date as Date).valueOf()
          )
          .map((edge) => (
            <NewsEntry
              author={edge.node.childMarkdownRemark.frontmatter.author}
              title={edge.node.childMarkdownRemark.frontmatter.title}
              date={edge.node.childMarkdownRemark.frontmatter.date as Date}
              key={`${edge.node.childMarkdownRemark.frontmatter.date}.${edge.node.childMarkdownRemark.frontmatter.title}`}
            >
              {renderAst(edge.node.childMarkdownRemark.htmlAst)}
            </NewsEntry>
          ))}
      </StyledNews>
    )}
  />
)

export default News
