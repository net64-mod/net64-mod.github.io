import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { renderAst } from '../utils/rehype'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      htmlAst: string
      excerpt: string
      frontmatter: {
        title: string
        description?: string
        keywords?: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const title = `${data.site.siteMetadata.title} - ${data.markdownRemark.frontmatter.title}`
  return (
    <IndexLayout>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${data.markdownRemark.frontmatter.description}\n${data.site.siteMetadata.description || ''}` },
          {
            name: 'keywords',
            content: [...data.site.siteMetadata.keywords, ...(data.markdownRemark.frontmatter.keywords || [])].join(', ')
          }
        ]}
      />
      <Page>
        <Container>
          <h1>{title}</h1>
          <div>{renderAst(data.markdownRemark.htmlAst)}</div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
