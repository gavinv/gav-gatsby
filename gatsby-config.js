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
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: function (url, parent, done) {
          var base = path.join(path.dirname(parent), url);
          if (glob.hasMagic(base)) {
            glob(base, { nodir: true }, function (err, files) {
              var contents = files.map(function (cur) {
                return fs.readFileSync(cur, 'utf8');
              });
              done({ contents: contents.join('\n') });
            });
          } else {
            done({ file: url });
          }
        },
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
