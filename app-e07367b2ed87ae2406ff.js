webpackJsonp([0xd2a57dc1d883],{75:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var u=[{plugin:o(360),options:{plugins:[]}},{plugin:o(358),options:{plugins:[],trackingId:"UA-116285482-1",head:!1,anonymize:!0,respectDNT:!0}}]},201:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(315),"component---src-templates-blog-template-js":o(319),"component---src-templates-tags-js":o(320),"component---src-pages-404-js":o(317),"component---src-pages-index-js":o(318)},e.json=(t={"layout-index.json":o(3),"offline-plugin-app-shell-fallback.json":o(337)},t["layout-index.json"]=o(3),t["blog-blogging.json"]=o(324),t["layout-index.json"]=o(3),t["blog-sketch.json"]=o(333),t["layout-index.json"]=o(3),t["blog-electron.json"]=o(326),t["layout-index.json"]=o(3),t["blog-hyperapp.json"]=o(330),t["layout-index.json"]=o(3),t["blog-angular.json"]=o(323),t["layout-index.json"]=o(3),t["blog-go.json"]=o(329),t["layout-index.json"]=o(3),t["blog-facial-recognition.json"]=o(328),t["layout-index.json"]=o(3),t["blog-socket-io.json"]=o(334),t["layout-index.json"]=o(3),t["blog-portfolio.json"]=o(332),t["layout-index.json"]=o(3),t["blog-css-art.json"]=o(325),t["layout-index.json"]=o(3),t["blog-elm.json"]=o(327),t["layout-index.json"]=o(3),t["blog-objection.json"]=o(331),t["layout-index.json"]=o(3),t["blog-web-components.json"]=o(335),t["layout-index.json"]=o(3),t["tags-blogging.json"]=o(343),t["layout-index.json"]=o(3),t["tags-sketch.json"]=o(355),t["layout-index.json"]=o(3),t["tags-frontend.json"]=o(350),t["layout-index.json"]=o(3),t["tags-design.json"]=o(346),t["layout-index.json"]=o(3),t["tags-electron.json"]=o(348),t["layout-index.json"]=o(3),t["tags-java-script.json"]=o(352),t["layout-index.json"]=o(3),t["tags-desktop.json"]=o(347),t["layout-index.json"]=o(3),t["tags-angular.json"]=o(338),t["layout-index.json"]=o(3),t["tags-go.json"]=o(351),t["layout-index.json"]=o(3),t["tags-api.json"]=o(339),t["layout-index.json"]=o(3),t["tags-backend.json"]=o(342),t["layout-index.json"]=o(3),t["tags-postgre-sql.json"]=o(354),t["layout-index.json"]=o(3),t["tags-data-science.json"]=o(345),t["layout-index.json"]=o(3),t["tags-augmented-reality.json"]=o(341),t["layout-index.json"]=o(3),t["tags-websockets.json"]=o(357),t["layout-index.json"]=o(3),t["tags-css.json"]=o(344),t["layout-index.json"]=o(3),t["tags-art.json"]=o(340),t["layout-index.json"]=o(3),t["tags-elm.json"]=o(349),t["layout-index.json"]=o(3),t["tags-node.json"]=o(353),t["layout-index.json"]=o(3),t["tags-web-components.json"]=o(356),t["layout-index.json"]=o(3),t["404.json"]=o(321),t["layout-index.json"]=o(3),t["index.json"]=o(336),t["layout-index.json"]=o(3),t["404-html.json"]=o(322),t),e.layouts={"layout---index":o(316)}},202:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},l=o(4),c=t(l),i=o(8),p=t(i),f=o(135),d=t(f),m=o(55),g=t(m),h=o(75),y=o(524),j=t(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(o){a(this,e);var t=u(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,l.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,l.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=b,n.exports=e.default},55:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(425),u=t(a),r=(0,u.default)();n.exports=r},203:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(74),u=o(136),r=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,r.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var l=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return l=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return l=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return l=n,s[u]=n,!0}return!1}),l}}},204:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(105),u=t(a),r=o(75),s=(0,r.apiRunner)("replaceHistory"),l=s[0],c=l||(0,u.default)();n.exports=c},322:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(366)})})}},321:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(367)})})}},323:function(n,e,o){o(1),n.exports=function(n){return o.e(0xf2b4903f1475,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(368)})})}},324:function(n,e,o){o(1),n.exports=function(n){return o.e(59922266386898,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(369)})})}},325:function(n,e,o){o(1),n.exports=function(n){return o.e(0x888a03c99e5d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(370)})})}},326:function(n,e,o){o(1),n.exports=function(n){return o.e(0xfc54be5496eb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(371)})})}},327:function(n,e,o){o(1),n.exports=function(n){return o.e(0xbbfedad2800f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(372)})})}},328:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc349d4e484d9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(373)})})}},329:function(n,e,o){o(1),n.exports=function(n){return o.e(0xff251b6a6e15,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(374)})})}},330:function(n,e,o){o(1),n.exports=function(n){return o.e(0xfd018c6e6994,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(375)})})}},331:function(n,e,o){o(1),n.exports=function(n){return o.e(0xf6d11087c7b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(376)})})}},332:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9d8712030a73,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(377)})})}},333:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd184658afa8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(378)})})}},334:function(n,e,o){o(1),n.exports=function(n){return o.e(18826368022058,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(379)})})}},335:function(n,e,o){o(1),n.exports=function(n){return o.e(36163852562177,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},336:function(n,e,o){o(1),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},3:function(n,e,o){o(1),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(109)})})}},337:function(n,e,o){o(1),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},338:function(n,e,o){o(1),n.exports=function(n){return o.e(62117242295850,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},339:function(n,e,o){o(1),n.exports=function(n){return o.e(0x8d8700bcc262,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},340:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe2e0ea02f33,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},341:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa4499b63a754,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},342:function(n,e,o){o(1),n.exports=function(n){return o.e(0x72ef45f70a9f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},343:function(n,e,o){o(1),n.exports=function(n){return o.e(92900522393385,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},344:function(n,e,o){o(1),n.exports=function(n){return o.e(0xbe2449c8444b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},345:function(n,e,o){o(1),n.exports=function(n){return o.e(0x744f8390dcc7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},346:function(n,e,o){o(1),n.exports=function(n){return o.e(65951750749414,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},347:function(n,e,o){o(1),n.exports=function(n){return o.e(0x81815590a299,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},348:function(n,e,o){o(1),n.exports=function(n){return o.e(85240199557489,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},349:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd857523ec266,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},350:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa5c00f081663,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},351:function(n,e,o){o(1),n.exports=function(n){return o.e(29981209658063,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},352:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc1658d68ad40,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},353:function(n,e,o){o(1),n.exports=function(n){return o.e(71230123872026,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},354:function(n,e,o){o(1),n.exports=function(n){return o.e(0xae6482bb299f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(399)})})}},355:function(n,e,o){o(1),n.exports=function(n){return o.e(0xea86dc95895,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(400)})})}},356:function(n,e,o){o(1),n.exports=function(n){return o.e(0x8e9ebbdb488e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(401)})})}},357:function(n,e,o){o(1),n.exports=function(n){return o.e(0xf0bdf4e16a89,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(402)})})}},316:function(n,e,o){o(1),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(205)})})}},135:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(4),u=(t(a),o(203)),r=t(u),s=o(55),l=t(s),c=o(136),i=t(c),p=void 0,f={},d={},m={},g={},h={},y=[],j=[],x={},b="",N=[],C={},v=function(n){return n&&n.default||n},k=void 0,R=!0,w=[],P={},_={},E=5;k=o(206)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){N=N.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),l.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),l.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){g[e]=t,w.push({resource:e,succeeded:!n}),_[e]||(_[e]=n),w=w.slice(-E),o(n,t)})}},S=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):_[e]?n.nextTick(function(){o(_[e])}):L(e,function(n,t){if(n)o(n);else{var a=v(t());h[e]=a,o(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),P[n]||(P[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},C={},N=[],y=[],b=""},addPagesArray:function(n){y=n,b="/on-learning-new-things",p=(0,r.default)(n,b)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,i.default)(n,b);if(!y.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(T);var t=p(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,N.indexOf(t.jsonName)!==-1||g[t.jsonName]||N.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,N.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||N.unshift(t.componentChunkName)),N.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var u=a;u.unregister()}window.location.reload()}})),R=!1;if(P[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),l.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];l.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!t.layoutComponentChunkName||r)){m[e]={component:a,json:u,layout:r,page:t};var n={component:a,json:u,layout:r,page:t};o(n),l.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),a=e,s()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(111))},403:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-blogging.json",path:"/blog/blogging"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-sketch.json",path:"/blog/sketch"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-electron.json",path:"/blog/electron"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-hyperapp.json",path:"/blog/hyperapp"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-angular.json",path:"/blog/angular"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-go.json",path:"/blog/go"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-facial-recognition.json",path:"/blog/facial-recognition"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-socket-io.json",path:"/blog/socket-io"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-portfolio.json",path:"/blog/portfolio"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-css-art.json",path:"/blog/css-art"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-elm.json",path:"/blog/elm"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-objection.json",path:"/blog/objection"},{componentChunkName:"component---src-templates-blog-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-web-components.json",path:"/blog/web-components"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-blogging.json",path:"/tags/blogging/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-sketch.json",path:"/tags/sketch/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-frontend.json",path:"/tags/frontend/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-design.json",path:"/tags/design/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-electron.json",path:"/tags/electron/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-java-script.json",path:"/tags/java-script/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-desktop.json",path:"/tags/desktop/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-angular.json",path:"/tags/angular/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-go.json",path:"/tags/go/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-api.json",path:"/tags/api/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-backend.json",path:"/tags/backend/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-postgre-sql.json",path:"/tags/postgre-sql/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-data-science.json",path:"/tags/data-science/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-augmented-reality.json",path:"/tags/augmented-reality/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-websockets.json",path:"/tags/websockets/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-css.json",path:"/tags/css/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-art.json",path:"/tags/art/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-elm.json",path:"/tags/elm/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-node.json",path:"/tags/node/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-web-components.json",path:"/tags/web-components/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},206:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],u=function(){var n=e();n&&(a.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(75),r=o(4),s=t(r),l=o(171),c=t(l),i=o(74),p=o(364),f=o(300),d=t(f),m=o(107),g=o(204),h=t(g),y=o(55),j=t(y),x=o(403),b=t(x),N=o(404),C=t(N),v=o(202),k=t(v),R=o(201),w=t(R),P=o(135),_=t(P);o(226),window.___history=h.default,window.___emitter=j.default,_.default.addPagesArray(b.default),_.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=_.default,window.matchPath=i.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&l!==!1||(window.___history=n,l=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(207);var t=function(n){function e(n){n.page.path===_.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,h.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);_.default.getResourcesForPathname(t)?(clearTimeout(r),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var l=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(i.Router,{history:h.default},e)},y=(0,i.withRouter)(k.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(f?f:g,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(i.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,r.createElement)(k.default,a({page:!0},t)):(0,r.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},404:function(n,e){n.exports=[]},207:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(55),u=t(a),r="/";r="/on-learning-new-things/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},136:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},300:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},1:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,u=o.s;o.e=function(t,r){var s=!1,l=!0,c=function(n){r&&(r(o,n),r=null)};return!u&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,l?setTimeout(function(){c()}):c())}),void(s||(l=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},358:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},315:function(n,e,o){o(1),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(359)})})}},360:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},108:function(n,e,o){!function(e,o){n.exports=o()}(this,function(){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,
length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,t=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function l(c,i,p){if("string"!=typeof i){if(s){var f=r(i);f&&f!==s&&l(c,f,p)}var d=t(i);a&&(d=d.concat(a(i)));for(var m=0;m<d.length;++m){var g=d[m];if(!(n[g]||e[g]||p&&p[g])){var h=u(i,g);try{o(c,g,h)}catch(n){}}}return c}return c}})},425:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},111:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(n){if(i===setTimeout)return setTimeout(n,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(n,0);try{return i(n,0)}catch(e){try{return i.call(null,n,0)}catch(e){return i.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function r(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=a(r);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,u(n)}}function l(n,e){this.fun=n,this.array=e}function c(){}var i,p,f=n.exports={};!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(n){i=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new l(n,e)),1!==m.length||g||a(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},524:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},317:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(213)})})}},318:function(n,e,o){o(1),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(214)})})}},319:function(n,e,o){o(1),n.exports=function(n){return o.e(0x6f26da274c7e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(215)})})}},320:function(n,e,o){o(1),n.exports=function(n){return o.e(50739212244294,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(216)})})}}});
//# sourceMappingURL=app-e07367b2ed87ae2406ff.js.map