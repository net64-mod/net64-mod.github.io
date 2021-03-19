import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import SEO from '../components/SEO'
import IndexLayout from '../layouts'
import { renderAst } from '../utils/rehype'
import { FrontmatterBlog } from '../models/Frontmatter'
import NewsEntry from '../components/NewsEntry'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      htmlAst: string
      fields: {
        slug: string
      }
      frontmatter: FrontmatterBlog
    }
  }
}

const BlogTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <SEO slug={data.markdownRemark.fields.slug} />
    <Page>
      <Container>
        <NewsEntry
          author={data.markdownRemark.frontmatter.author}
          title={`${data.site.siteMetadata.title} - ${data.markdownRemark.frontmatter.title}`}
          date={new Date(data.markdownRemark.frontmatter.date)}
          key={`${data.markdownRemark.frontmatter.date}.${data.markdownRemark.frontmatter.title}`}
        >
          {renderAst(data.markdownRemark.htmlAst)}
        </NewsEntry>
      </Container>
    </Page>
  </IndexLayout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        author
        title
        date
        description
        keywords
      }
    }
  }
`
