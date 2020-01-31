/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `dOrg`,
    description: `dOrg is a self-organized developer community that wills software into
          existence.`,
    author: `@dOrg_tech`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cases`,
        path: `${__dirname}/src/content/cases`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/content/services`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `manifesto`,
        path: `${__dirname}/src/content/manifesto`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/json`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dOrg`,
        short_name: `dOrg`,
        start_url: `/`,
        background_color: `#2c4b56`,
        theme_color: `#4bd2c6`,
        display: `standalone`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-mdx`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
