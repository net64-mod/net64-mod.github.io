'use strict'

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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-103677465-2',
        head: true,
        anonymize: true,
        respectDNT: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: '82aQUoC-35flkWcJCNd4ormLSk0J_v6A3uuTMT3yHRA'
      },
    }
  ]
}
