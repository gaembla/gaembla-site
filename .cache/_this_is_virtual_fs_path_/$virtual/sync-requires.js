
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/plavreshin/Projects/gaembla/gaembla-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/plavreshin/Projects/gaembla/gaembla-site/src/pages/index.js")),
  "component---src-pages-index-old-js": preferDefault(require("/Users/plavreshin/Projects/gaembla/gaembla-site/src/pages/index.old.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/plavreshin/Projects/gaembla/gaembla-site/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/plavreshin/Projects/gaembla/gaembla-site/src/pages/using-typescript.tsx"))
}

