'use strict'
/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: 'Net64',
    description: 'Official website for Net64, a Super Mario 64 mod for playing online.',
    keywords: ['net64', 'super', 'mario', '64', 'online', 'rom', 'hack', 'multiplayer'],
    siteUrl: 'https://net64-mod.github.io',
    author: {
      name: 'Mario Reder',
      url: 'https://github.com/Tarnadas',
      email: 'mreder1289@gmail.com'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Net64',
        short_name: 'Net64',
        start_url: '/',
        background_color: '#f1ecbc',
        theme_color: '#f1ecbc',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'news',
        path: `${__dirname}/src/news`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-component',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
              withWebp: true
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 85,
        pngCompressionSpeed: 1
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans']
        }
      }
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `net64-mod.github.io`,
      },
    }
  ]
}
