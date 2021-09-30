"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 5127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/plavreshin/Projects/gaembla/gaembla-site/node_modules/react/index.js"
var index_js_ = __webpack_require__(7358);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2031);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=({siteTitle})=>/*#__PURE__*/index_js_.createElement("header",{style:{background:`rebeccapurple`,marginBottom:`1.45rem`}},/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:960,padding:`1.45rem 1.0875rem`}},/*#__PURE__*/index_js_.createElement("h1",{style:{margin:0}},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",style:{color:`white`,textDecoration:`none`}},siteTitle))));Header.propTypes={siteTitle:(prop_types_default()).string};Header.defaultProps={siteTitle:``};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:960,padding:`0 1.0875rem 1.45rem`}},/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement("footer",{style:{marginTop:`2rem`}},"\xA9 ",new Date().getFullYear(),", Built with",` `,/*#__PURE__*/index_js_.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 6179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2031);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function Seo({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_3__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}Seo.defaultProps={lang:`en`,meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 9616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7358);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5127);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6179);
const NotFoundPage=()=>{// <Layout>
//   <Seo title="404: Not found" />
//   <h1>404: Not Found</h1>
//   <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
// </Layout>
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"main-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"error-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"img/error-block__img.svg",className:"error-block__img",alt:""}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"img/error-block__img-decor.svg",className:"error-block__img-decor",alt:""}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#",className:"btn btn-border"},"Page not found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"img/error-block__decor.svg",className:"error-block__decor",alt:""})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-logo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"img/header-logo.svg",alt:""})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"header-nav"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"About Us")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Careers")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Blog")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Contacts")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"btn-menu js-btn-menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"\xA0"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"\xA0"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"\xA0"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{className:"footer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"footer-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"\xA9 Gaembla 2021"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"icon-instagram"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"icon-facebook"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"icon-twitter"}))))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map