import * as React from 'react'
import { graphql } from 'gatsby'
// @ts-ignore
import rehypeReact from 'rehype-react'

import Page from '../components/Page'
import Container from '../components/Container'
import Button from '../components/Button'
import IndexLayout from '../layouts'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { button: Button }
}).Compiler

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
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
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div>{renderAst(data.markdownRemark.htmlAst)}</div>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
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
      }
    }
  }
`
