webpackJsonp([20],{"./.cache/api-runner-browser.js":function(e,s){"use strict";var o=[];e.exports=function(e,s,n){var t=o.map(function(o){if(o.plugin[e]){var n=o.plugin[e](s,o.options);return n}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}},"./.cache/async-requires.js":function(e,s,o){"use strict";function n(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}var t;s.components={"page-component---src-pages-winners-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-winners-index-js!./src/pages/winners/index.js"),"page-component---src-pages-finalists-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-finalists-index-js!./src/pages/finalists/index.js"),"page-component---src-pages-about-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-about-index-js!./src/pages/about/index.js"),"page-component---src-pages-press-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-press-index-js!./src/pages/press/index.js"),"page-component---src-pages-news-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-news-index-js!./src/pages/news/index.js"),"page-component---src-pages-getintouch-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-getintouch-index-js!./src/pages/getintouch/index.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-homepage-top-winners-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-homepage-top-winners-js!./src/pages/homepage/TopWinners.js"),"page-component---src-pages-homepage-winner-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-homepage-winner-js!./src/pages/homepage/Winner.js")},s.json=(t={"winners.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---winners!./.cache/json/winners.json"),"finalists.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---finalists!./.cache/json/finalists.json"),"about.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),"press.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---press!./.cache/json/press.json"),"news.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---news!./.cache/json/news.json"),"getintouch.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---getintouch!./.cache/json/getintouch.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json")},n(t,"getintouch.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---getintouch!./.cache/json/getintouch.json")),n(t,"finalists.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---finalists!./.cache/json/finalists.json")),n(t,"homepage-top-winners.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---homepage-top-winners!./.cache/json/homepage-top-winners.json")),n(t,"homepage-winner.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---homepage-winner!./.cache/json/homepage-winner.json")),n(t,"about.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json")),n(t,"news.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---news!./.cache/json/news.json")),n(t,"press.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---press!./.cache/json/press.json")),n(t,"winners.json",o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---winners!./.cache/json/winners.json")),t),s.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,s,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var t=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(t),r=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=n(r),d=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=n(d),u=o("./node_modules/babel-runtime/helpers/createClass.js"),c=n(u),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(m),b=o("./node_modules/babel-runtime/helpers/inherits.js"),g=n(b),j=o("./node_modules/react/react.js"),h=n(j),f=o("./.cache/loader.js"),x=n(f),_=o("./.cache/emitter.js"),y=n(_),w=function(e){function s(e){(0,l.default)(this,s);var o=(0,p.default)(this,(s.__proto__||(0,i.default)(s)).call(this));return o.state={location:e.location,pageResources:x.default.getResourcesForPathname(e.location.pathname)},o}return(0,g.default)(s,e),(0,c.default)(s,[{key:"componentWillReceiveProps",value:function(e){var s=this;if(this.state.location.pathname!==e.location.pathname){var o=x.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):x.default.getResourcesForPathname(e.location.pathname,function(o){s.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;y.default.on("onPostLoadPageResources",function(s){s.page.path===x.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:s.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,s){return this.state.pageResources.component!==s.pageResources.component||this.state.pageResources.json!==s.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,j.createElement)(this.state.pageResources.component,(0,a.default)({},this.props,this.state.pageResources.json)):null}}]),s}(h.default.Component);s.default=w},"./.cache/emitter.js":function(e,s,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=o("./node_modules/mitt/dist/mitt.js"),a=n(t),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,s,o){"use strict";var n=o("./node_modules/react-router-dom/index.js"),t={};e.exports=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(s.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),t[a])return t[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,n.matchPath)(a,{path:e.path})||(0,n.matchPath)(a,{path:e.matchPath}))return r=e,t[a]=e,!0}else if((0,n.matchPath)(a,{path:e.path,exact:!0}))return r=e,t[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(13,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---finalists!./.cache/json/finalists.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(12,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/finalists.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---getintouch!./.cache/json/getintouch.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(11,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/getintouch.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---homepage-top-winners!./.cache/json/homepage-top-winners.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(10,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/homepage-top-winners.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---homepage-winner!./.cache/json/homepage-winner.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(9,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/homepage-winner.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(8,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---news!./.cache/json/news.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(7,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/news.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---press!./.cache/json/press.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(6,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/press.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---winners!./.cache/json/winners.json":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(5,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/winners.json")})})}},"./.cache/loader.js":function(e,s,o){(function(s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=o("./node_modules/babel-runtime/core-js/get-iterator.js"),a=n(t),r=o("./.cache/find-page.js"),i=n(r),d=o("./.cache/emitter.js"),l=n(d),u=void 0,c={},m={},p={},b={},g={},j=[],h=[],f={},x=[],_={},y=function(e){return e&&e.default||e},w=void 0,k=!0;w=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(e){W(e,function(){x=x.filter(function(s){return s!==e}),w.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var P=function(e,s){return _[e]>_[s]?1:_[e]<_[s]?-1:0},v=function(e,s){return f[e]>f[s]?1:f[e]<f[s]?-1:0},W=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(b[e])s.nextTick(function(){o(null,b[e])});else{var n="page-c"===e.slice(0,6)?m.components[e]:m.json[e];n(function(s,n){b[e]=n,o(s,n)})}},U=function(e,o){g[e]?s.nextTick(function(){o(null,g[e])}):W(e,function(s,n){if(s)o(s);else{var t=y(n());g[e]=t,o(s,t)}})},R=1,N={empty:function(){h=[],f={},_={},x=[],j=[]},addPagesArray:function(e){j=e;var s="";u=(0,i.default)(e,s)},addDevRequires:function(e){c=e},addProdRequires:function(e){m=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!j.some(function(s){return s.path===e}))return!1;var s=1/R;R+=1,f[e]?f[e]+=1:f[e]=1,N.has(e)||h.unshift(e),h.sort(v);var o=u(e);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+s:_[o.jsonName]=1+s,x.indexOf(o.jsonName)!==-1||b[o.jsonName]||x.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+s:_[o.componentChunkName]=1+s,x.indexOf(o.componentChunkName)!==-1||b[o.jsonName]||x.unshift(o.componentChunkName)),x.sort(P),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:_}},getPages:function(){return{pathArray:h,pathCount:f}},getPage:function(e){return u(e)},has:function(e){return h.some(function(s){return s===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(u(e)||navigator.serviceWorker.getRegistrations().then(function(e){var s=!0,o=!1,n=void 0;try{for(var t,r=(0,a.default)(e);!(s=(t=r.next()).done);s=!0){var i=t.value;i.unregister()}}catch(e){o=!0,n=e}finally{try{!s&&r.return&&r.return()}finally{if(o)throw n}}window.location.reload()})),k=!1;var n=u(e);if(!n)return void console.log("A page wasn't found for \""+e+'"');if(e=n.path,p[e])return s.nextTick(function(){o(p[e]),l.default.emit("onPostLoadPageResources",{page:n,pageResources:p[e]})}),p[e];l.default.emit("onPreLoadPageResources",{path:e});var t=void 0,r=void 0,i=function(){if(t&&r){p[e]={component:t,json:r};var s={component:t,json:r};o(s),l.default.emit("onPostLoadPageResources",{page:n,pageResources:s})}};return U(n.componentChunkName,function(e,s){e&&console.log("Loading the component for "+n.path+" failed"),t=s,i()}),void U(n.jsonName,function(e,s){e&&console.log("Loading the JSON for "+n.path+" failed"),r=s,i()})},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=N}).call(s,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,s){e.exports=[{componentChunkName:"page-component---src-pages-winners-index-js",jsonName:"winners.json",path:"/winners"},{componentChunkName:"page-component---src-pages-finalists-index-js",jsonName:"finalists.json",path:"/finalists"},{componentChunkName:"page-component---src-pages-about-index-js",jsonName:"about.json",path:"/about"},{componentChunkName:"page-component---src-pages-press-index-js",jsonName:"press.json",path:"/press"},{componentChunkName:"page-component---src-pages-news-index-js",jsonName:"news.json",path:"/news"},{componentChunkName:"page-component---src-pages-getintouch-index-js",jsonName:"getintouch.json",path:"/getintouch"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-getintouch-index-js",jsonName:"getintouch.json",path:"/getintouch/"},{componentChunkName:"page-component---src-pages-finalists-index-js",jsonName:"finalists.json",path:"/finalists/"},{componentChunkName:"page-component---src-pages-homepage-top-winners-js",jsonName:"homepage-top-winners.json",path:"/homepage/TopWinners/"},{componentChunkName:"page-component---src-pages-homepage-winner-js",jsonName:"homepage-winner.json",path:"/homepage/Winner/"},{componentChunkName:"page-component---src-pages-about-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"page-component---src-pages-news-index-js",jsonName:"news.json",path:"/news/"},{componentChunkName:"page-component---src-pages-press-index-js",jsonName:"press.json",path:"/press/"},{componentChunkName:"page-component---src-pages-winners-index-js",jsonName:"winners.json",path:"/winners/"}]},"./.cache/prefetcher.js":function(e,s){"use strict";e.exports=function(e){var s=e.getNextQueuedResources,o=e.createResourceDownload,n=[],t=[],a=function(){var e=s();e&&(t.push(e),o(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":t=t.filter(function(s){return s!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":n.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":n=n.filter(function(s){return s!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===t.length&&0===n.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:n,resourcesDownloading:t}},empty:function(){n=[],t=[]}}}},0:function(e,s,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function t(e){window.___history||(window.___history=e,e.listen(function(e,s){(0,l.default)("onRouteUpdate",{location:e,action:s})}))}function a(e,s){var o=s.location.pathname,n=(0,l.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(n.length>0)return n[0];if(e){var t=e.location.pathname;if(t===o)return!1}return!0}var r=o("./node_modules/babel-runtime/helpers/extends.js"),i=n(r),d=o("./.cache/api-runner-browser.js"),l=n(d),u=o("./node_modules/react/react.js"),c=n(u),m=o("./node_modules/react-dom/index.js"),p=n(m),b=o("./node_modules/react-router-dom/index.js"),g=o("./node_modules/react-router-scroll/lib/index.js"),j=o("./node_modules/history/createBrowserHistory.js"),h=n(j),f=o("./.cache/emitter.js"),x=n(f),_=o("./.cache/pages.json"),y=n(_),w=o("./.cache/component-renderer.js"),k=n(w),P=o("./.cache/async-requires.js"),v=n(P),W=o("./.cache/loader.js"),U=n(W);window.___emitter=x.default,U.default.addPagesArray(y.default),U.default.addProdRequires(v.default),window.asyncRequires=v.default,window.___loader=U.default,window.matchPath=b.matchPath,(0,l.default)("onClientEntry"),(0,l.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var R=function(e){function s(n){n.page.path===U.default.getPage(e).path&&(x.default.off("onPostLoadPageResources",s),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){x.default.off("onPostLoadPageResources",s),x.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);U.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):x.default.on("onPostLoadPageResources",s)}};window.___navigateTo=R;var N=(0,h.default)();(0,l.default)("onRouteUpdate",{location:N.location,action:N.action});var E=(0,l.default)("replaceRouterComponent",{history:N})[0],C=function(e){var s=e.children;return c.default.createElement(b.BrowserRouter,{history:N},s)},T=function(e){v.default.layouts.index?v.default.layouts.index(function(s,o){var n=o();e(n)}):e(function(e){return c.default.createElement("div",null,e.children())})};T(function(e){U.default.getResourcesForPathname(window.location.pathname,function(){var s=function(){return(0,u.createElement)(E?E:C,null,(0,u.createElement)(g.ScrollContext,{shouldUpdateScroll:a},(0,u.createElement)((0,b.withRouter)(e),{children:function(e){return(0,u.createElement)(b.Route,{render:function(s){t(s.history);var o=e?e:s;return U.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,(0,i.default)({},o)):(0,u.createElement)(k.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,l.default)("wrapRootComponent",{Root:s},s)[0];p.default.render(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,s,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=o("./.cache/emitter.js"),a=n(t),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var s=e.installing;console.log("installingWorker",s),s.addEventListener("statechange",function(){switch(s.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,s,o){"use strict";function n(){function e(e){var s=n.lastChild;return"SCRIPT"!==s.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",s)):void(s.onload=s.onerror=function(){s.onload=s.onerror=null,setTimeout(e,0)})}var s,n=document.querySelector("head"),t=o.e,a=o.s;o.e=function(n,r){var i=!1,d=!0,l=function(e){r&&(r(o,e),r=null)};return!a&&s&&s[n]?void l(!0):(t(n,function(){i||(i=!0,d?setTimeout(function(){l()}):l())}),void(i||(d=!1,e(function(){i||(i=!0,a?a[n]=void 0:(s||(s={}),s[n]=!0),l(!0))}))))}}n()},"./node_modules/hoist-non-react-statics/index.js":function(e,s){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},t="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,s,a){if("string"!=typeof s){var r=Object.getOwnPropertyNames(s);t&&(r=r.concat(Object.getOwnPropertySymbols(s)));for(var i=0;i<r.length;++i)if(!(o[r[i]]||n[r[i]]||a&&a[r[i]]))try{e[r[i]]=s[r[i]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,s){function o(e){return e=e||Object.create(null),{on:function(s,o){(e[s]||(e[s]=[])).push(o)},off:function(s,o){e[s]&&e[s].splice(e[s].indexOf(o)>>>0,1)},emit:function(s,o){(e[s]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(s,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,s){function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function t(e){if(u===setTimeout)return setTimeout(e,0);if((u===o||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(s){try{return u.call(null,e,0)}catch(s){return u.call(this,e,0)}}}function a(e){if(c===clearTimeout)return clearTimeout(e);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(s){try{return c.call(null,e)}catch(s){return c.call(this,e)}}}function r(){g&&p&&(g=!1,p.length?b=p.concat(b):j=-1,b.length&&i())}function i(){if(!g){var e=t(r);g=!0;for(var s=b.length;s;){for(p=b,b=[];++j<s;)p&&p[j].run();j=-1,s=b.length}p=null,g=!1,a(e)}}function d(e,s){this.fun=e,this.array=s}function l(){}var u,c,m=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:o}catch(e){u=o}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(e){c=n}}();var p,b=[],g=!1,j=-1;m.nextTick=function(e){var s=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)s[o-1]=arguments[o];b.push(new d(e,s)),1!==b.length||g||t(i)},d.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=l,m.addListener=l,m.once=l,m.off=l,m.removeListener=l,m.removeAllListeners=l,m.emit=l,m.prependListener=l,m.prependOnceListener=l,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(2,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-about-index-js!./src/pages/about/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(19,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-finalists-index-js!./src/pages/finalists/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(18,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/finalists/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-getintouch-index-js!./src/pages/getintouch/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(17,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/getintouch/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-homepage-top-winners-js!./src/pages/homepage/TopWinners.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(3,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/homepage/TopWinners.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-homepage-winner-js!./src/pages/homepage/Winner.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(4,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/homepage/Winner.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(1,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js');
})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-news-index-js!./src/pages/news/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(16,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/news/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-press-index-js!./src/pages/press/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(15,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/press/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-winners-index-js!./src/pages/winners/index.js":function(e,s,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(14,function(s,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/winners/index.js')})})}}});
//# sourceMappingURL=app-bb6f2566d70f74e20e19.js.map