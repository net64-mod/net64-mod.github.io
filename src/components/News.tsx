import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { renderAst } from '../utils/rehype'
import NewsEntry from './NewsEntry'
import { FrontmatterBlog } from '../models/Frontmatter'

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
          frontmatter: FrontmatterBlog
          fields: {
            slug: string
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
                fields {
                  slug
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
          .map((edge) => {
            const md = edge.node.childMarkdownRemark
            const link = `/blog${edge.node.childMarkdownRemark.fields.slug}`
            return (
              <NewsEntry
                author={md.frontmatter.author}
                title={md.frontmatter.title}
                date={md.frontmatter.date as Date}
                link={link}
                key={`${md.frontmatter.date}.${md.frontmatter.title}`}
              >
                {renderAst(md.htmlAst)}
              </NewsEntry>
            )
          })}
      </StyledNews>
    )}
  />
)

export default News
