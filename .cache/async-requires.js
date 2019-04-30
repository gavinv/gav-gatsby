// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/usr/local/var/www/home/gav.gatsby/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/usr/local/var/www/home/gav.gatsby/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/usr/local/var/www/home/gav.gatsby/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/usr/local/var/www/home/gav.gatsby/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/usr/local/var/www/home/gav.gatsby/.cache/data.json")

