webpackJsonp([2],{"./node_modules/classnames/bind.js":function(e,t,s){var a,n;!function(){"use strict";function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(s.apply(this,a));else if("object"===n)for(var r in a)o.call(a,r)&&a[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=s:(a=[],n=function(){return s}.apply(t,a),!(void 0!==n&&(e.exports=n)))}()},"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var s={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},n="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,o){if("string"!=typeof t){var r=Object.getOwnPropertyNames(t);n&&(r=r.concat(Object.getOwnPropertySymbols(t)));for(var l=0;l<r.length;++l)if(!(s[r[l]]||a[r[l]]||o&&o[r[l]]))try{e[r[l]]=t[r[l]]}catch(e){}}return e}},"./src/assets/fonts/catamaran/Catamaran-Bold.ttf":function(e,t,s){e.exports=s.p+"static/Catamaran-Bold.2e561329.ttf"},"./src/assets/fonts/catamaran/Catamaran-Regular.ttf":function(e,t,s){e.exports=s.p+"static/Catamaran-Regular.dcf56a7b.ttf"},"./src/assets/images/logo.png":function(e,t,s){e.exports=s.p+"static/logo.4be62c40.png"},"./src/assets/mock-data/navigation.json":function(e,t){e.exports=[{label:"WINNERS",link:"/winners"},{label:"FINALISTS",link:"/finalists"},{label:"ABOUT",link:"/about"},{label:"PRESS",link:"/press"},{label:"NEWS",link:"/news"},{label:"GET IN TOUCH",link:"/getintouch"}]},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-env/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-stage-0/lib/index.js","/Users/aliakseitsiareshka/WebstormProjects/dsa-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,s){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),c=s("./node_modules/react/react.js"),u=n(c),d=s("./node_modules/gatsby-link/index.js"),f=n(d),p=s("./node_modules/prop-types/index.js"),m=a(p),b=s("./src/layouts/styles/layout.module.scss"),y=n(b),h=s("./src/assets/images/logo.png"),g=n(h),j=s("./src/assets/mock-data/navigation.json"),_=n(j),x=s("./node_modules/classnames/bind.js"),v=x.bind(y.default),k={children:m.func.isRequired},P=function(){return u.default.createElement("nav",null,_.default.map(function(e,t){return u.default.createElement(f.default,{key:t,to:e.link,activeStyle:{color:"#0431ff",opacity:1},className:y.default.navTab},e.label)}))},w=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{className:v(["header","containerFluid"])},u.default.createElement(f.default,{to:"/"},u.default.createElement("img",{src:g.default})),u.default.createElement(P,null)),this.props.children)}}]),t}(u.default.Component);w.propTypes=k,t.default=w,e.exports=t.default},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/layouts/styles/layout.module.scss":function(e,t,s){t=e.exports=s("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"@font-face{font-family:Catamaran;src:url("+s("./src/assets/fonts/catamaran/Catamaran-Regular.ttf")+")}@font-face{font-family:Catamaran-Bold;src:url("+s("./src/assets/fonts/catamaran/Catamaran-Bold.ttf")+")}a,div,h1,h3,h4,h5,h6,hr{font-family:Catamaran;margin-bottom:0!important}a{text-decoration:none;color:#000}._1R_Ek3cYPmrCcHREsP5y9Z{margin:74px 135px 0}._1ZA2Y2iMI9AccmN4mEtSMe{display:flex;flex-direction:row;justify-content:space-between}nav{width:100%;display:flex;justify-content:flex-end}nav>.Kk_ZM0dL7DRqRVfPKPWQ4{cursor:pointer;margin:20px;opacity:.7;font-family:Catamaran-Bold;font-size:14px;font-weight:700;line-height:1.43;letter-spacing:-.1px;text-align:left;color:rgba(29,28,31,.7);transition:.1s linear}nav>.Kk_ZM0dL7DRqRVfPKPWQ4:hover{font-weight:700;opacity:1}button._3npPftVvBjJHqMhlAIBBts{background-color:blue}",""]),t.locals={containerFluid:"_1R_Ek3cYPmrCcHREsP5y9Z",header:"_1ZA2Y2iMI9AccmN4mEtSMe",navTab:"Kk_ZM0dL7DRqRVfPKPWQ4","winner-button":"_3npPftVvBjJHqMhlAIBBts"}},"./src/layouts/styles/layout.module.scss":function(e,t,s){var a=s("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/layouts/styles/layout.module.scss");"string"==typeof a&&(a=[[e.id,a,""]]);s("./node_modules/style-loader/addStyles.js")(a,{});a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=layout-component---index-1b29542eafc841aacdbb.js.map