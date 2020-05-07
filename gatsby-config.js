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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139960866-1',
        head: 'true',
        anonymize: true,
        respectDNT: true,
        exclude: ['/contact/success/**', '/account'],
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'gavinvaught.com',
        forceSSL: true,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
  ],
}
