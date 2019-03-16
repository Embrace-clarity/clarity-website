// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contribute-index-js": () => import("/home/i/clarity-website/src/pages/contribute/index.js" /* webpackChunkName: "component---src-pages-contribute-index-js" */),
  "component---src-pages-home-index-js": () => import("/home/i/clarity-website/src/pages/home/index.js" /* webpackChunkName: "component---src-pages-home-index-js" */),
  "component---src-pages-index-js": () => import("/home/i/clarity-website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-manifesto-index-js": () => import("/home/i/clarity-website/src/pages/manifesto/index.js" /* webpackChunkName: "component---src-pages-manifesto-index-js" */),
  "component---src-pages-modules-index-js": () => import("/home/i/clarity-website/src/pages/modules/index.js" /* webpackChunkName: "component---src-pages-modules-index-js" */),
  "component---src-pages-os-index-js": () => import("/home/i/clarity-website/src/pages/os/index.js" /* webpackChunkName: "component---src-pages-os-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/i/clarity-website/.cache/data.json")

