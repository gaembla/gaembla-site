"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4131:function(e,M,N){N.r(M),N.d(M,{default:function(){return S}});var t=N(7294),a=(N(5444),N(5127),N(3751),N.p+"static/main-block__img-b8dd24a94483c08ad5dcdaf286d96df2.jpg"),i=N.p+"static/main-block__img-decor-52b6d92a03578966a4bbc899910c5df4.png",g=N.p+"static/info-block__decor-34be7def425dd776a5fec639a1d52389.svg",I=N.p+"static/main-about__bg-e138b260f47bbc78a1c35031fe65b0bf.jpg",D=N.p+"static/main-about__decor-88fa3ffc7b1f2cac72b747a5a2963810.png",c=N.p+"static/main-team__info-interested-decor-e73138151e7cbccfcdfe2bff724c604e.svg",n=N.p+"static/main-team__img-1745e425548bf6f9e8918224806bdfea.jpg",r=N.p+"static/main-team__img-decor-ead12ac1bf080e8d2735de5f88747e9a.png",z=N.p+"static/main-contacts__info-decor-d8bf28e905e086d21bce6c9ab0348d05.svg",l=N(4694),j=N(5697),o=N.n(j);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,M,N){return M in e?Object.defineProperty(e,M,{value:N,enumerable:!0,configurable:!0,writable:!0}):e[M]=N,e}function A(e,M){var N=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);M&&(t=t.filter((function(M){return Object.getOwnPropertyDescriptor(e,M).enumerable}))),N.push.apply(N,t)}return N}function m(e){for(var M=1;M<arguments.length;M++){var N=null!=arguments[M]?arguments[M]:{};M%2?A(Object(N),!0).forEach((function(M){u(e,M,N[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(N)):A(Object(N)).forEach((function(M){Object.defineProperty(e,M,Object.getOwnPropertyDescriptor(N,M))}))}return e}function E(e,M){if(null==e)return{};var N,t,a=function(e,M){if(null==e)return{};var N,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)N=i[t],M.indexOf(N)>=0||(a[N]=e[N]);return a}(e,M);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)N=i[t],M.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(e,N)&&(a[N]=e[N])}return a}function T(e){return function(e){if(Array.isArray(e)){for(var M=0,N=new Array(e.length);M<e.length;M++)N[M]=e[M];return N}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return M=e,(M-=0)==M?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,M){return M?M.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var M}function x(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,M){var N,t=M.indexOf(":"),a=y(M.slice(0,t)),i=M.slice(t+1).trim();return a.startsWith("webkit")?e[(N=a,N.charAt(0).toUpperCase()+N.slice(1))]=i:e[a]=i,e}),{})}var O=!1;try{O=!0}catch(U){}function C(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:l.parse.icon?l.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function L(e,M){return Array.isArray(M)&&M.length>0||!Array.isArray(M)&&M?u({},e,M):{}}function Y(e){var M=e.forwardedRef,N=E(e,["forwardedRef"]),t=N.icon,a=N.mask,i=N.symbol,g=N.className,I=N.title,D=N.titleId,c=C(t),n=L("classes",[].concat(T(function(e){var M,N=e.spin,t=e.pulse,a=e.fixedWidth,i=e.inverse,g=e.border,I=e.listItem,D=e.flip,c=e.size,n=e.rotation,r=e.pull,z=(u(M={"fa-spin":N,"fa-pulse":t,"fa-fw":a,"fa-inverse":i,"fa-border":g,"fa-li":I,"fa-flip-horizontal":"horizontal"===D||"both"===D,"fa-flip-vertical":"vertical"===D||"both"===D},"fa-".concat(c),null!=c),u(M,"fa-rotate-".concat(n),null!=n&&0!==n),u(M,"fa-pull-".concat(r),null!=r),u(M,"fa-swap-opacity",e.swapOpacity),M);return Object.keys(z).map((function(e){return z[e]?e:null})).filter((function(e){return e}))}(N)),T(g.split(" ")))),r=L("transform","string"==typeof N.transform?l.parse.transform(N.transform):N.transform),z=L("mask",C(a)),j=(0,l.icon)(c,m({},n,{},r,{},z,{symbol:i,title:I,titleId:D}));if(!j)return function(){var e;!O&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var o=j.abstract,s={ref:M};return Object.keys(N).forEach((function(e){Y.defaultProps.hasOwnProperty(e)||(s[e]=N[e])})),d(o[0],s)}Y.displayName="FontAwesomeIcon",Y.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},Y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var d=function e(M,N){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof N)return N;var a=(N.children||[]).map((function(N){return e(M,N)})),i=Object.keys(N.attributes||{}).reduce((function(e,M){var t=N.attributes[M];switch(M){case"class":e.attrs.className=t,delete N.attributes.class;break;case"style":e.attrs.style=x(t);break;default:0===M.indexOf("aria-")||0===M.indexOf("data-")?e.attrs[M.toLowerCase()]=t:e.attrs[y(M)]=t}return e}),{attrs:{}}),g=t.style,I=void 0===g?{}:g,D=E(t,["style"]);return i.attrs.style=m({},i.attrs.style,{},I),M.apply(void 0,[N.tag,m({},i.attrs,{},D)].concat(T(a)))}.bind(null,t.createElement),f=N(7190),S=function(){return t.createElement("div",{className:"main-wrapper"},t.createElement("main",{className:"content"},t.createElement("section",{className:"main-block"},t.createElement("div",{className:"section-gradient"}),t.createElement("div",{className:"wrapper"},t.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iMTIyIiB2aWV3Qm94PSIwIDAgODggMTIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBvcGFjaXR5PSIwLjMiPgo8cGF0aCBkPSJNMyAxMjAuNUMzIDEyMS4zMjggMi4zMjg0MyAxMjIgMS41IDEyMkMwLjY3MTU3MyAxMjIgMCAxMjEuMzI4IDAgMTIwLjVDMCAxMTkuNjcyIDAuNjcxNTczIDExOSAxLjUgMTE5QzIuMzI4NDMgMTE5IDMgMTE5LjY3MiAzIDEyMC41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMjAgMTIwLjVDMjAgMTIxLjMyOCAxOS4zMjg0IDEyMiAxOC41IDEyMkMxNy42NzE2IDEyMiAxNyAxMjEuMzI4IDE3IDEyMC41QzE3IDExOS42NzIgMTcuNjcxNiAxMTkgMTguNSAxMTlDMTkuMzI4NCAxMTkgMjAgMTE5LjY3MiAyMCAxMjAuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTM3IDEyMC41QzM3IDEyMS4zMjggMzYuMzI4NCAxMjIgMzUuNSAxMjJDMzQuNjcxNiAxMjIgMzQgMTIxLjMyOCAzNCAxMjAuNUMzNCAxMTkuNjcyIDM0LjY3MTYgMTE5IDM1LjUgMTE5QzM2LjMyODQgMTE5IDM3IDExOS42NzIgMzcgMTIwLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik01NCAxMjAuNUM1NCAxMjEuMzI4IDUzLjMyODQgMTIyIDUyLjUgMTIyQzUxLjY3MTYgMTIyIDUxIDEyMS4zMjggNTEgMTIwLjVDNTEgMTE5LjY3MiA1MS42NzE2IDExOSA1Mi41IDExOUM1My4zMjg0IDExOSA1NCAxMTkuNjcyIDU0IDEyMC41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNNzEgMTIwLjVDNzEgMTIxLjMyOCA3MC4zMjg0IDEyMiA2OS41IDEyMkM2OC42NzE2IDEyMiA2OCAxMjEuMzI4IDY4IDEyMC41QzY4IDExOS42NzIgNjguNjcxNiAxMTkgNjkuNSAxMTlDNzAuMzI4NCAxMTkgNzEgMTE5LjY3MiA3MSAxMjAuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTg4IDEyMC41Qzg4IDEyMS4zMjggODcuMzI4NCAxMjIgODYuNSAxMjJDODUuNjcxNiAxMjIgODUgMTIxLjMyOCA4NSAxMjAuNUM4NSAxMTkuNjcyIDg1LjY3MTYgMTE5IDg2LjUgMTE5Qzg3LjMyODQgMTE5IDg4IDExOS42NzIgODggMTIwLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0zIDEwMy41QzMgMTA0LjMyOCAyLjMyODQzIDEwNSAxLjUgMTA1QzAuNjcxNTczIDEwNSAwIDEwNC4zMjggMCAxMDMuNUMwIDEwMi42NzIgMC42NzE1NzMgMTAyIDEuNSAxMDJDMi4zMjg0MyAxMDIgMyAxMDIuNjcyIDMgMTAzLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0yMCAxMDMuNUMyMCAxMDQuMzI4IDE5LjMyODQgMTA1IDE4LjUgMTA1QzE3LjY3MTYgMTA1IDE3IDEwNC4zMjggMTcgMTAzLjVDMTcgMTAyLjY3MiAxNy42NzE2IDEwMiAxOC41IDEwMkMxOS4zMjg0IDEwMiAyMCAxMDIuNjcyIDIwIDEwMy41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMzcgMTAzLjVDMzcgMTA0LjMyOCAzNi4zMjg0IDEwNSAzNS41IDEwNUMzNC42NzE2IDEwNSAzNCAxMDQuMzI4IDM0IDEwMy41QzM0IDEwMi42NzIgMzQuNjcxNiAxMDIgMzUuNSAxMDJDMzYuMzI4NCAxMDIgMzcgMTAyLjY3MiAzNyAxMDMuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTU0IDEwMy41QzU0IDEwNC4zMjggNTMuMzI4NCAxMDUgNTIuNSAxMDVDNTEuNjcxNiAxMDUgNTEgMTA0LjMyOCA1MSAxMDMuNUM1MSAxMDIuNjcyIDUxLjY3MTYgMTAyIDUyLjUgMTAyQzUzLjMyODQgMTAyIDU0IDEwMi42NzIgNTQgMTAzLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik03MSAxMDMuNUM3MSAxMDQuMzI4IDcwLjMyODQgMTA1IDY5LjUgMTA1QzY4LjY3MTYgMTA1IDY4IDEwNC4zMjggNjggMTAzLjVDNjggMTAyLjY3MiA2OC42NzE2IDEwMiA2OS41IDEwMkM3MC4zMjg0IDEwMiA3MSAxMDIuNjcyIDcxIDEwMy41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNODggMTAzLjVDODggMTA0LjMyOCA4Ny4zMjg0IDEwNSA4Ni41IDEwNUM4NS42NzE2IDEwNSA4NSAxMDQuMzI4IDg1IDEwMy41Qzg1IDEwMi42NzIgODUuNjcxNiAxMDIgODYuNSAxMDJDODcuMzI4NCAxMDIgODggMTAyLjY3MiA4OCAxMDMuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTMgODYuNUMzIDg3LjMyODQgMi4zMjg0MyA4OCAxLjUgODhDMC42NzE1NzMgODggMCA4Ny4zMjg0IDAgODYuNUMwIDg1LjY3MTYgMC42NzE1NzMgODUgMS41IDg1QzIuMzI4NDMgODUgMyA4NS42NzE2IDMgODYuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTIwIDg2LjVDMjAgODcuMzI4NCAxOS4zMjg0IDg4IDE4LjUgODhDMTcuNjcxNiA4OCAxNyA4Ny4zMjg0IDE3IDg2LjVDMTcgODUuNjcxNiAxNy42NzE2IDg1IDE4LjUgODVDMTkuMzI4NCA4NSAyMCA4NS42NzE2IDIwIDg2LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0zNyA4Ni41QzM3IDg3LjMyODQgMzYuMzI4NCA4OCAzNS41IDg4QzM0LjY3MTYgODggMzQgODcuMzI4NCAzNCA4Ni41QzM0IDg1LjY3MTYgMzQuNjcxNiA4NSAzNS41IDg1QzM2LjMyODQgODUgMzcgODUuNjcxNiAzNyA4Ni41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNNTQgODYuNUM1NCA4Ny4zMjg0IDUzLjMyODQgODggNTIuNSA4OEM1MS42NzE2IDg4IDUxIDg3LjMyODQgNTEgODYuNUM1MSA4NS42NzE2IDUxLjY3MTYgODUgNTIuNSA4NUM1My4zMjg0IDg1IDU0IDg1LjY3MTYgNTQgODYuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTcxIDg2LjVDNzEgODcuMzI4NCA3MC4zMjg0IDg4IDY5LjUgODhDNjguNjcxNiA4OCA2OCA4Ny4zMjg0IDY4IDg2LjVDNjggODUuNjcxNiA2OC42NzE2IDg1IDY5LjUgODVDNzAuMzI4NCA4NSA3MSA4NS42NzE2IDcxIDg2LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik04OCA4Ni41Qzg4IDg3LjMyODQgODcuMzI4NCA4OCA4Ni41IDg4Qzg1LjY3MTYgODggODUgODcuMzI4NCA4NSA4Ni41Qzg1IDg1LjY3MTYgODUuNjcxNiA4NSA4Ni41IDg1Qzg3LjMyODQgODUgODggODUuNjcxNiA4OCA4Ni41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMyA2OS41QzMgNzAuMzI4NCAyLjMyODQzIDcxIDEuNSA3MUMwLjY3MTU3MyA3MSAwIDcwLjMyODQgMCA2OS41QzAgNjguNjcxNiAwLjY3MTU3MyA2OCAxLjUgNjhDMi4zMjg0MyA2OCAzIDY4LjY3MTYgMyA2OS41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMjAgNjkuNUMyMCA3MC4zMjg0IDE5LjMyODQgNzEgMTguNSA3MUMxNy42NzE2IDcxIDE3IDcwLjMyODQgMTcgNjkuNUMxNyA2OC42NzE2IDE3LjY3MTYgNjggMTguNSA2OEMxOS4zMjg0IDY4IDIwIDY4LjY3MTYgMjAgNjkuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTM3IDY5LjVDMzcgNzAuMzI4NCAzNi4zMjg0IDcxIDM1LjUgNzFDMzQuNjcxNiA3MSAzNCA3MC4zMjg0IDM0IDY5LjVDMzQgNjguNjcxNiAzNC42NzE2IDY4IDM1LjUgNjhDMzYuMzI4NCA2OCAzNyA2OC42NzE2IDM3IDY5LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik01NCA2OS41QzU0IDcwLjMyODQgNTMuMzI4NCA3MSA1Mi41IDcxQzUxLjY3MTYgNzEgNTEgNzAuMzI4NCA1MSA2OS41QzUxIDY4LjY3MTYgNTEuNjcxNiA2OCA1Mi41IDY4QzUzLjMyODQgNjggNTQgNjguNjcxNiA1NCA2OS41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNNzEgNjkuNUM3MSA3MC4zMjg0IDcwLjMyODQgNzEgNjkuNSA3MUM2OC42NzE2IDcxIDY4IDcwLjMyODQgNjggNjkuNUM2OCA2OC42NzE2IDY4LjY3MTYgNjggNjkuNSA2OEM3MC4zMjg0IDY4IDcxIDY4LjY3MTYgNzEgNjkuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTg4IDY5LjVDODggNzAuMzI4NCA4Ny4zMjg0IDcxIDg2LjUgNzFDODUuNjcxNiA3MSA4NSA3MC4zMjg0IDg1IDY5LjVDODUgNjguNjcxNiA4NS42NzE2IDY4IDg2LjUgNjhDODcuMzI4NCA2OCA4OCA2OC42NzE2IDg4IDY5LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0zIDUyLjVDMyA1My4zMjg0IDIuMzI4NDMgNTQgMS41IDU0QzAuNjcxNTczIDU0IDAgNTMuMzI4NCAwIDUyLjVDMCA1MS42NzE2IDAuNjcxNTczIDUxIDEuNSA1MUMyLjMyODQzIDUxIDMgNTEuNjcxNiAzIDUyLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0yMCA1Mi41QzIwIDUzLjMyODQgMTkuMzI4NCA1NCAxOC41IDU0QzE3LjY3MTYgNTQgMTcgNTMuMzI4NCAxNyA1Mi41QzE3IDUxLjY3MTYgMTcuNjcxNiA1MSAxOC41IDUxQzE5LjMyODQgNTEgMjAgNTEuNjcxNiAyMCA1Mi41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMzcgNTIuNUMzNyA1My4zMjg0IDM2LjMyODQgNTQgMzUuNSA1NEMzNC42NzE2IDU0IDM0IDUzLjMyODQgMzQgNTIuNUMzNCA1MS42NzE2IDM0LjY3MTYgNTEgMzUuNSA1MUMzNi4zMjg0IDUxIDM3IDUxLjY3MTYgMzcgNTIuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTU0IDUyLjVDNTQgNTMuMzI4NCA1My4zMjg0IDU0IDUyLjUgNTRDNTEuNjcxNiA1NCA1MSA1My4zMjg0IDUxIDUyLjVDNTEgNTEuNjcxNiA1MS42NzE2IDUxIDUyLjUgNTFDNTMuMzI4NCA1MSA1NCA1MS42NzE2IDU0IDUyLjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik03MSA1Mi41QzcxIDUzLjMyODQgNzAuMzI4NCA1NCA2OS41IDU0QzY4LjY3MTYgNTQgNjggNTMuMzI4NCA2OCA1Mi41QzY4IDUxLjY3MTYgNjguNjcxNiA1MSA2OS41IDUxQzcwLjMyODQgNTEgNzEgNTEuNjcxNiA3MSA1Mi41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNODggNTIuNUM4OCA1My4zMjg0IDg3LjMyODQgNTQgODYuNSA1NEM4NS42NzE2IDU0IDg1IDUzLjMyODQgODUgNTIuNUM4NSA1MS42NzE2IDg1LjY3MTYgNTEgODYuNSA1MUM4Ny4zMjg0IDUxIDg4IDUxLjY3MTYgODggNTIuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTMgMzUuNUMzIDM2LjMyODQgMi4zMjg0MyAzNyAxLjUgMzdDMC42NzE1NzMgMzcgMCAzNi4zMjg0IDAgMzUuNUMwIDM0LjY3MTYgMC42NzE1NzMgMzQgMS41IDM0QzIuMzI4NDMgMzQgMyAzNC42NzE2IDMgMzUuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTIwIDM1LjVDMjAgMzYuMzI4NCAxOS4zMjg0IDM3IDE4LjUgMzdDMTcuNjcxNiAzNyAxNyAzNi4zMjg0IDE3IDM1LjVDMTcgMzQuNjcxNiAxNy42NzE2IDM0IDE4LjUgMzRDMTkuMzI4NCAzNCAyMCAzNC42NzE2IDIwIDM1LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0zNyAzNS41QzM3IDM2LjMyODQgMzYuMzI4NCAzNyAzNS41IDM3QzM0LjY3MTYgMzcgMzQgMzYuMzI4NCAzNCAzNS41QzM0IDM0LjY3MTYgMzQuNjcxNiAzNCAzNS41IDM0QzM2LjMyODQgMzQgMzcgMzQuNjcxNiAzNyAzNS41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNNTQgMzUuNUM1NCAzNi4zMjg0IDUzLjMyODQgMzcgNTIuNSAzN0M1MS42NzE2IDM3IDUxIDM2LjMyODQgNTEgMzUuNUM1MSAzNC42NzE2IDUxLjY3MTYgMzQgNTIuNSAzNEM1My4zMjg0IDM0IDU0IDM0LjY3MTYgNTQgMzUuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTcxIDM1LjVDNzEgMzYuMzI4NCA3MC4zMjg0IDM3IDY5LjUgMzdDNjguNjcxNiAzNyA2OCAzNi4zMjg0IDY4IDM1LjVDNjggMzQuNjcxNiA2OC42NzE2IDM0IDY5LjUgMzRDNzAuMzI4NCAzNCA3MSAzNC42NzE2IDcxIDM1LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik04OCAzNS41Qzg4IDM2LjMyODQgODcuMzI4NCAzNyA4Ni41IDM3Qzg1LjY3MTYgMzcgODUgMzYuMzI4NCA4NSAzNS41Qzg1IDM0LjY3MTYgODUuNjcxNiAzNCA4Ni41IDM0Qzg3LjMyODQgMzQgODggMzQuNjcxNiA4OCAzNS41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMyAxOC41QzMgMTkuMzI4NCAyLjMyODQzIDIwIDEuNSAyMEMwLjY3MTU3MyAyMCAwIDE5LjMyODQgMCAxOC41QzAgMTcuNjcxNiAwLjY3MTU3MyAxNyAxLjUgMTdDMi4zMjg0MyAxNyAzIDE3LjY3MTYgMyAxOC41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNMjAgMTguNUMyMCAxOS4zMjg0IDE5LjMyODQgMjAgMTguNSAyMEMxNy42NzE2IDIwIDE3IDE5LjMyODQgMTcgMTguNUMxNyAxNy42NzE2IDE3LjY3MTYgMTcgMTguNSAxN0MxOS4zMjg0IDE3IDIwIDE3LjY3MTYgMjAgMTguNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTM3IDE4LjVDMzcgMTkuMzI4NCAzNi4zMjg0IDIwIDM1LjUgMjBDMzQuNjcxNiAyMCAzNCAxOS4zMjg0IDM0IDE4LjVDMzQgMTcuNjcxNiAzNC42NzE2IDE3IDM1LjUgMTdDMzYuMzI4NCAxNyAzNyAxNy42NzE2IDM3IDE4LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik01NCAxOC41QzU0IDE5LjMyODQgNTMuMzI4NCAyMCA1Mi41IDIwQzUxLjY3MTYgMjAgNTEgMTkuMzI4NCA1MSAxOC41QzUxIDE3LjY3MTYgNTEuNjcxNiAxNyA1Mi41IDE3QzUzLjMyODQgMTcgNTQgMTcuNjcxNiA1NCAxOC41WiIgZmlsbD0iIzgzNUJGRiIvPgo8cGF0aCBkPSJNNzEgMTguNUM3MSAxOS4zMjg0IDcwLjMyODQgMjAgNjkuNSAyMEM2OC42NzE2IDIwIDY4IDE5LjMyODQgNjggMTguNUM2OCAxNy42NzE2IDY4LjY3MTYgMTcgNjkuNSAxN0M3MC4zMjg0IDE3IDcxIDE3LjY3MTYgNzEgMTguNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTg4IDE4LjVDODggMTkuMzI4NCA4Ny4zMjg0IDIwIDg2LjUgMjBDODUuNjcxNiAyMCA4NSAxOS4zMjg0IDg1IDE4LjVDODUgMTcuNjcxNiA4NS42NzE2IDE3IDg2LjUgMTdDODcuMzI4NCAxNyA4OCAxNy42NzE2IDg4IDE4LjVaIiBmaWxsPSIjODM1QkZGIi8+CjxwYXRoIGQ9Ik0zIDEuNUMzIDIuMzI4NDMgMi4zMjg0MyAzIDEuNSAzQzAuNjcxNTczIDMgMCAyLjMyODQzIDAgMS41QzAgMC42NzE1NzMgMC42NzE1NzMgMCAxLjUgMEMyLjMyODQzIDAgMyAwLjY3MTU3MyAzIDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTIwIDEuNUMyMCAyLjMyODQzIDE5LjMyODQgMyAxOC41IDNDMTcuNjcxNiAzIDE3IDIuMzI4NDMgMTcgMS41QzE3IDAuNjcxNTczIDE3LjY3MTYgMCAxOC41IDBDMTkuMzI4NCAwIDIwIDAuNjcxNTczIDIwIDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTM3IDEuNUMzNyAyLjMyODQzIDM2LjMyODQgMyAzNS41IDNDMzQuNjcxNiAzIDM0IDIuMzI4NDMgMzQgMS41QzM0IDAuNjcxNTczIDM0LjY3MTYgMCAzNS41IDBDMzYuMzI4NCAwIDM3IDAuNjcxNTczIDM3IDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTU0IDEuNUM1NCAyLjMyODQzIDUzLjMyODQgMyA1Mi41IDNDNTEuNjcxNiAzIDUxIDIuMzI4NDMgNTEgMS41QzUxIDAuNjcxNTczIDUxLjY3MTYgMCA1Mi41IDBDNTMuMzI4NCAwIDU0IDAuNjcxNTczIDU0IDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTcxIDEuNUM3MSAyLjMyODQzIDcwLjMyODQgMyA2OS41IDNDNjguNjcxNiAzIDY4IDIuMzI4NDMgNjggMS41QzY4IDAuNjcxNTczIDY4LjY3MTYgMCA2OS41IDBDNzAuMzI4NCAwIDcxIDAuNjcxNTczIDcxIDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPHBhdGggZD0iTTg4IDEuNUM4OCAyLjMyODQzIDg3LjMyODQgMyA4Ni41IDNDODUuNjcxNiAzIDg1IDIuMzI4NDMgODUgMS41Qzg1IDAuNjcxNTczIDg1LjY3MTYgMCA4Ni41IDBDODcuMzI4NCAwIDg4IDAuNjcxNTczIDg4IDEuNVoiIGZpbGw9IiM4MzVCRkYiLz4KPC9nPgo8L3N2Zz4K",className:"main-block__decor",alt:""}),t.createElement("div",{className:"main-block__content"},t.createElement("h1",{className:"title1"},"We are Gaembla"),t.createElement("p",null,"We are an iGaming transformation tech company at the forefront of new developments and possibilities across the industry. We create and operate iGaming solutions that are powered by innovation and dedication.")),t.createElement("div",{className:"main-block__img"},t.createElement("img",{src:a,alt:""}),t.createElement("img",{src:i,className:"main-block__img-decor",alt:""})))),t.createElement("section",{className:"info-block"},t.createElement("div",{className:"wrapper"},t.createElement("img",{src:g,className:"info-block__decor",alt:""}),t.createElement("div",{className:"info-block__items"},t.createElement("div",{className:"info-block__item"},t.createElement("h2",{className:"title2"},"Our Company Values"),t.createElement("p",null,"We base our business ethos on transparency, credibility, and accountability. These are the values we reinforce throughout our company and work to cultivate at every level of operation. We take responsibility and uphold these values as they are the bedrock for our continued success.")),t.createElement("div",{className:"info-block__item"},t.createElement("h2",{className:"title2"},"Vision"),t.createElement("p",null,"To be become a trendsetter in the iGaming Industry, through cutting edge innovations and a mobile focused unique experience for our customers."))))),t.createElement("section",{className:"main-about"},t.createElement("div",{className:"wrapper"},t.createElement("img",{src:I,className:"main-about__bg",alt:""}),t.createElement("img",{src:D,className:"main-about__decor",alt:""}),t.createElement("div",{className:"main-about__block"},t.createElement("h2",{className:"title2"},"About Us"),t.createElement("p",null,"We are GAEMBLA, a project that was company created by a group of experts with vast knowledge and love for everything that is Gambling and Entertainment. Coming from a long history of international casino operations and software development along with a rich track record of successful ventures in many different verticals , we aim to take iGaming yet a little bit further. Key aspects for our ongoing success are ambitious targets, an efficient business-model and a well-defined strategy. With over 30 years of industry experience and an outstanding team of highly talented professionals , we ensure a strong position in every niche we enter.")))),t.createElement("section",{className:"main-team"},t.createElement("div",{className:"section-gradient"}),t.createElement("div",{className:"section-gradient section-gradient2"}),t.createElement("div",{className:"wrapper"},t.createElement("img",{src:g,className:"info-block__decor",alt:""}),t.createElement("div",{className:"main-team__content"},t.createElement("div",{className:"main-team__info"},t.createElement("div",{className:"main-team__info-block"},t.createElement("h2",{className:"title2"},"Join Our Team"),t.createElement("p",null,"Our growing game tech presence springs directly from the minds and work ethic of a standout team. Recognising how crucial it is to attract and retain exceptional talent, we prioritise a work culture and employee experience that allows our team members to feel a sense of ownership and pride within the company. We’re committed to training and developing the best in the field—with groundbreaking projects and continual support."),t.createElement("a",{href:"careers.gaembla.com",className:"btn btn-white"},"see all vacancies")),t.createElement("div",{className:"main-team__info-interested"},t.createElement("img",{src:c,className:"main-team__info-interested-decor",alt:""}),t.createElement("h3",{className:"title3"},"Interested in learning more about",t.createElement("br",null)," Gaembla job opportunities?"),t.createElement("p",null,"Check out our current openings, or feel free to reach out",t.createElement("br",null)," and introduce yourself by dropping a message here."),t.createElement("div",{className:"main-team__info-interested-items"},t.createElement("div",{className:"main-team__info-interested-item"},t.createElement("div",{className:"main-team__info-interested-item-text"},t.createElement("span",{className:"title4"},"Senior Software Data Engineer"),t.createElement("p",null,"Kyiv, Ukraine")),t.createElement("a",{href:"careers.gaembla.com",className:"btn btn-white"},"Apply")),t.createElement("div",{className:"main-team__info-interested-item"},t.createElement("div",{className:"main-team__info-interested-item-text"},t.createElement("span",{className:"title4"},"Senior Software Data Engineer"),t.createElement("p",null,"Kyiv, Ukraine")),t.createElement("a",{href:"careers.gaembla.com",className:"btn btn-white"},"Apply")),t.createElement("div",{className:"main-team__info-interested-item"},t.createElement("div",{className:"main-team__info-interested-item-text"},t.createElement("span",{className:"title4"},"Senior Software Data Engineer"),t.createElement("p",null,"Kyiv, Ukraine")),t.createElement("a",{href:"careers.gaembla.com",className:"btn btn-white"},"Apply"))))),t.createElement("div",{className:"main-team__img"},t.createElement("img",{"data-src":n,src:n,className:"js-img",alt:""}),t.createElement("img",{"data-src":r,src:r,className:"js-img main-team__img-decor",alt:""}))))),t.createElement("section",{className:"main-contacts"},t.createElement("div",{className:"section-gradient"}),t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"main-contacts__content"},t.createElement("div",{className:"main-contacts__info"},t.createElement("img",{src:z,className:"main-contacts__info-decor",alt:""}),t.createElement("h2",{className:"title2"},"Contact Us"),t.createElement("p",null,"Have questions or feedback? Interested in Gaembla partnership? career opportunities? We look forward to hearing from you, get in touch with us today!")),t.createElement("div",{className:"main-contacts__form"},t.createElement("form",null,t.createElement("div",{className:"box-field"},t.createElement("label",{className:"box-field__label"},"Full Name"),t.createElement("input",{className:"form-control",type:"text"})),t.createElement("div",{className:"box-field"},t.createElement("label",{className:"box-field__label"},"Your Email"),t.createElement("input",{className:"form-control",type:"email"})),t.createElement("div",{className:"box-field box-field__textarea"},t.createElement("label",{className:"box-field__label"},"Message"),t.createElement("textarea",{className:"form-control",defaultValue:""})),t.createElement("button",{type:"submit",className:"btn"},"Submit"))))))),t.createElement("header",{className:"header"},t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"header-content"},t.createElement("div",{className:"header-logo"},t.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMTU0IDE0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIuMjE5NSAxNEMxMi44OTY2IDE0IDEzLjQ3NjEgMTMuNzU5MSAxMy45NTc4IDEzLjI3NzNDMTQuNDMzMSAxMi44MDIxIDE0LjY3MDcgMTIuMjI1OSAxNC42NzA3IDExLjU0ODhWNS40MTYwMkg2LjkwNzA0VjguNjg3NUgxMS4zOTkyVjEwLjcyODVIMy42MzU1NlYzLjM3NUgxMS4zOTkyVjQuNTk1N0gxNC42NzA3VjIuNTU0NjlDMTQuNjcwNyAxLjg3NzYgMTQuNDMzMSAxLjI5ODE4IDEzLjk1NzggMC44MTY0MDZDMTMuNDc2MSAwLjM0MTE0NiAxMi44OTY2IDAuMTAzNTE2IDEyLjIxOTUgMC4xMDM1MTZIMi44MTUyNUMyLjEzODE2IDAuMTAzNTE2IDEuNTYxOTkgMC4zNDExNDYgMS4wODY3MyAwLjgxNjQwNkMwLjYwNDk2IDEuMjk4MTggMC4zNjQwNzUgMS44Nzc2IDAuMzY0MDc1IDIuNTU0NjlWMTEuNTQ4OEMwLjM2NDA3NSAxMi4yMjU5IDAuNjA0OTYgMTIuODAyMSAxLjA4NjczIDEzLjI3NzNDMS41NjE5OSAxMy43NTkxIDIuMTM4MTYgMTQgMi44MTUyNSAxNEgxMi4yMTk1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTI4LjgxODQgMC4xMDM1MTZMMjIuMzI0MiAxNEgyNS44OTg0TDI3LjI2NTYgMTEuMTM4N0gzNC4yODcxTDM1LjcwMzEgMTRIMzkuMjc3NEwzMi41OTc3IDAuMTAzNTE2SDI4LjgxODRaTTMwLjcxMjkgMy45NDE0MUwzMi42NTYzIDcuODY3MTlIMjguODI4MUwzMC43MTI5IDMuOTQxNDFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDYuOTIxMSA4LjY4NzVINjAuODE3NlY1LjQxNjAySDQ2LjkyMTFWOC42ODc1Wk00Ni45MjExIDMuMzc1SDYwLjgxNzZWMC4xMDM1MTZINDYuOTIxMVYzLjM3NVpNNDYuOTIxMSAxNEg2MC44MTc2VjEwLjcyODVINDYuOTIxMVYxNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04My4wNzA3IDAuMTAzNTE2TDc3LjQ2NTIgNy4yNjE3Mkw3MS44NTk4IDAuMTAzNTE2SDY4LjQ3MTFWMTRINzEuNzQyNlY1LjI1TDc3LjQ2NTIgMTIuNTY0NUw4My4xODc5IDUuMjVWMTRIODYuNDU5NFYwLjEwMzUxNkg4My4wNzA3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTk3LjM3NDYgOC42ODc1SDEwNS4xMzhWMTAuNzI4NUg5Ny4zNzQ2VjguNjg3NVpNOTcuMzc0NiAzLjM3NUgxMDUuMTM4VjUuNDE2MDJIOTcuMzc0NlYzLjM3NVpNMTA4LjQxIDguNjg3NUMxMDguNDEgOC4xMDE1NiAxMDguMjYzIDcuNTU0NjkgMTA3Ljk3IDcuMDQ2ODhDMTA4LjI2MyA2LjU0NTU3IDEwOC40MSA2LjAwMTk1IDEwOC40MSA1LjQxNjAyVjMuMzc1QzEwOC40MSAyLjQ3MDA1IDEwOC4wOTEgMS42OTg1NyAxMDcuNDUzIDEuMDYwNTVDMTA2LjgxNSAwLjQyMjUyNiAxMDYuMDQzIDAuMTAzNTE2IDEwNS4xMzggMC4xMDM1MTZIOTQuMTAzMVYxNEgxMDUuMTM4QzEwNi4wNDMgMTQgMTA2LjgxNSAxMy42ODEgMTA3LjQ1MyAxMy4wNDNDMTA4LjA5MSAxMi40MDQ5IDEwOC40MSAxMS42MzM1IDEwOC40MSAxMC43Mjg1VjguNjg3NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMTYuMDYzIDAuMTAzNTE2VjE0SDEyOC43MzlWMTAuNzI4NUgxMTkuMzM1VjAuMTAzNTE2SDExNi4wNjNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTQyLjg3NyAwLjEwMzUxNkwxMzYuMzgzIDE0SDEzOS45NTdMMTQxLjMyNCAxMS4xMzg3SDE0OC4zNDZMMTQ5Ljc2MiAxNEgxNTMuMzM2TDE0Ni42NTYgMC4xMDM1MTZIMTQyLjg3N1pNMTQ0Ljc3MSAzLjk0MTQxTDE0Ni43MTUgNy44NjcxOUgxNDIuODg3TDE0NC43NzEgMy45NDE0MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",alt:""})),t.createElement("nav",{className:"header-nav"},t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"#"},"Home")),t.createElement("li",null,t.createElement("a",{href:"#"},"About Us")),t.createElement("li",null,t.createElement("a",{href:"#"},"Careers")),t.createElement("li",null,t.createElement("a",{href:"#"},"Blog")),t.createElement("li",null,t.createElement("a",{href:"#"},"Contacts")))),t.createElement("div",{className:"btn-menu js-btn-menu"},t.createElement("span",null," "),t.createElement("span",null," "),t.createElement("span",null," "))))),t.createElement("footer",{className:"footer"},t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"footer-content"},t.createElement("span",null,"© Gaembla 2021"),t.createElement("ul",null,t.createElement("li",null,t.createElement("a",{href:"#"},t.createElement(Y,{icon:f.Zzi,className:"icon-instagram"}))),t.createElement("li",null,t.createElement("a",{href:"#"},t.createElement(Y,{icon:f.neY,className:"icon-facebook"}))),t.createElement("li",null,t.createElement("a",{href:"#"},t.createElement(Y,{icon:f.mdU,className:"icon-twitter"}))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f36b62d050acc15327df.js.map