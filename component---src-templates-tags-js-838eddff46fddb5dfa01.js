webpackJsonp([50739212244294],{108:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,r=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,o=u&&u(Object);return function d(i,s,f){if("string"!=typeof s){if(o){var p=u(s);p&&p!==o&&d(i,p,f)}var c=r(s);n&&(c=c.concat(n(s)));for(var g=0;g<c.length;++g){var m=c[g];if(!(e[m]||t[m]||f&&f[m])){var y=l(s,m);try{a(i,m,y)}catch(e){}}}return i}return i}})},216:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(4),l=r(n),u=a(8),o=r(u),d=a(67),i=r(d),s=function(e){var t=e.pathContext,a=e.data,r=t.tag,n=a.allMarkdownRemark.edges;return l.default.createElement("div",{className:"blog-post-container"},l.default.createElement("h1",null,r),l.default.createElement("ul",null,n.map(function(e){var t=e.node,a=t.frontmatter,r=a.path,n=a.title;return l.default.createElement("li",{key:r},l.default.createElement(i.default,{to:r},n))})))};s.propTypes={pathContext:o.default.shape({tag:o.default.string.isRequired}),data:o.default.shape({allMarkdownRemark:o.default.shape({totalCount:o.default.number.isRequired,edges:o.default.arrayOf(o.default.shape({node:o.default.shape({frontmatter:o.default.shape({path:o.default.string.isRequired,title:o.default.string.isRequired})})}).isRequired)})})},t.default=s;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-838eddff46fddb5dfa01.js.map