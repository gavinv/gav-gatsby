var fs = require('fs')
var path = require('path')
var glob = require('glob')

module.exports = {
  siteMetadata: {
    title: `Gavin Vaught | Web Developer & Designer`,
    titleTemplate: ``,
    description: `Personal portfolio PWA with blog and modern UI.`,
    siteUrl: `https://gavinvaught.com`,
    image: `/assets/favicon.ico`,
    twitterUsername: `@_gvaught`,
  },
  pathPrefix: `/gvaught/gav-gatsby` /* For gitlab-ci */,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Vaught | Web Developer & Designer`,
        short_name: `gav`,
        start_url: `/`,
        icon: 'src/assets/favicon512.png',
        background_color: `#121212`,
        theme_color: `#fac9ce`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139960866-1',
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {

    //   }
    // },
    `gatsby-plugin-offline`,
  ],
}
