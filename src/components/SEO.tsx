import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import { Frontmatter } from '../models/Frontmatter'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        fields: {
          slug: string
        }
        frontmatter: Frontmatter
      }
    }[]
  }
}

interface SEOProps {
  slug?: string
  frontmatter?: Frontmatter
}

const SEO: React.FunctionComponent<SEOProps> = ({ slug, frontmatter }) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allMarkdownRemark {
          edges {
            node {
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
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const edge = data.allMarkdownRemark.edges.find((edge) => edge.node.fields.slug === slug)
      if (edge) {
        frontmatter = frontmatter || edge.node.frontmatter
      }
      const title = `${data.site.siteMetadata.title}${frontmatter ? ` - ${frontmatter.title}` : ''}`
      const description = `${frontmatter ? `${frontmatter.description}\n` : ''}${data.site.siteMetadata.description}`
      const keywords = [...data.site.siteMetadata.keywords, ...((frontmatter ? frontmatter.keywords : []) || [])].join(', ')
      return (
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            {
              name: 'keywords',
              content: keywords
            }
          ]}
        />
      )
    }}
  />
)

export default SEO
