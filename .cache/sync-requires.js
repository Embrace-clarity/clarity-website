const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contribute-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/contribute/index.js"))),
  "component---src-pages-home-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/home/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/index.js"))),
  "component---src-pages-manifesto-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/manifesto/index.js"))),
  "component---src-pages-modules-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/modules/index.js"))),
  "component---src-pages-os-index-js": hot(preferDefault(require("/home/i/clarity-website/src/pages/os/index.js")))
}

