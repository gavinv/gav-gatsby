var fs = require('fs');
var path = require('path');
var glob = require('glob');

module.exports = {
  siteMetadata: {
    title: `Gavin Vaught`,
    description: ``,
    author: `@gav`,
  },
  pathPrefix: `/gvaught/gav-gatsby`, /* For gitlab-ci */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "displayName": false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Vaught`,
        short_name: `gav`,
        start_url: `/`,
        "icons": [
          {
            "src": "./src/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          }
        ],
        background_color: `#121212`,
        theme_color: `#ef333f`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
