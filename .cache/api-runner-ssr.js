var plugins = [{
      plugin: require('/usr/local/var/www/home/gav.gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/usr/local/var/www/home/gav.gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gavin Vaught","short_name":"gav","start_url":"/","icons":[{"src":"favicon/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"favicon/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"favicon/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"favicon/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"favicon/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"favicon/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"favicon/android-chrome-256x256.png","sizes":"256x256","type":"image/png"},{"src":"favicon/android-chrome-384x384.png","sizes":"384x384","type":"image/png"},{"src":"favicon/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"background_color":"#fefefe","theme_color":"#ef333f","display":"minimal-ui"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
