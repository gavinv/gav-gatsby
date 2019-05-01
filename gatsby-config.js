module.exports = {
  siteMetadata: {
    title: `Gavin Vaught`,
    description: ``,
    author: `@gav`,
  },
  pathPrefix: `/gav-ghost/gav-gatsby`, /* For gitlab-ci */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `components`,
    //     path: `${__dirname}/src/components/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Vaught`,
        short_name: `gav`,
        start_url: `/`,
        "icons": [{
            "src": "favicon/android-chrome-36x36.png",
            "sizes": "36x36",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "favicon/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        background_color: `#fefefe`,
        theme_color: `#ef333f`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        file: `src/scss/styles.scss`,
        outFile: `dist/css/styles.css`
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://d8.gavinvaught.com/`,
        apiBase: `api`, // endpoint of Drupal server
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
