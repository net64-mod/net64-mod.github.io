'use strict'

const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath, sourceInstanceName } = getNode(node.parent)

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })

      createNodeField({
        node,
        name: 'instanceName',
        value: sourceInstanceName || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
              instanceName
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout, instanceName } = node.fields

    if (instanceName !== 'content') return

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        slug
      }
    })
  })
}
