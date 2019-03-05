import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import SEO from '../components/SEO'
import IndexLayout from '../layouts'
import { renderAst } from '../utils/rehype'
import { Frontmatter } from '../models/Frontmatter'

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
      frontmatter: Frontmatter
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }): JSX.Element => {
  const title = `${data.site.siteMetadata.title} - ${data.markdownRemark.frontmatter.title}`
  return (
    <IndexLayout>
      <SEO slug={data.markdownRemark.fields.slug} />
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
