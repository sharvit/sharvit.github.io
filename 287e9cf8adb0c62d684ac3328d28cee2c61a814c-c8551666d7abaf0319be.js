/*! For license information please see 287e9cf8adb0c62d684ac3328d28cee2c61a814c-c8551666d7abaf0319be.js.LICENSE.txt */
(self.webpackChunksharvit_github_io=self.webpackChunksharvit_github_io||[]).push([[523],{8409:function(e,t,r){"use strict";var n=r(7071),o=["eventCategory","eventAction","eventLabel","eventValue"],a=r(4836);t.MS=u;var i=a(r(434)),c=a(r(7294)),l=a(r(5697));function u(e){var t=e.eventCategory,r=e.eventAction,a=e.eventLabel,l=e.eventValue,u=n(e,o);return c.default.createElement("a",(0,i.default)({},u,{onClick:function(n){"function"==typeof e.onClick&&e.onClick(n);var o=!0;return(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:r||"click",eventLabel:a||e.href,eventValue:l,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}u.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},8876:function(e,t,r){"use strict";r.d(t,{Se:function(){return W},Zt:function(){return X}});var n=r(2982),o=r(7294),a=r(5900),i=r.n(a),c=r(5861),l=r(4687),u=r.n(l),s=function(){var e=(0,c.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/"+t);case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",{id:n.id,owner:n.owner.login,name:n.name,fullName:n.full_name,description:n.description,language:n.language,htmlUrl:n.html_url,stargazersCount:n.stargazers_count,forksCount:n.forks_count,fork:n.fork});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=s,m=function(e){return Promise.all(e.map((function(e){return f(e)})))},p=r(1597),d=function(e){var t=(0,p.useStaticQuery)("2243951655").site;return e?t.siteMetadata.openSourceProjects.slice(0,e):t.siteMetadata.openSourceProjects},h=function(e){var t=(0,o.useState)([]),r=t[0],a=t[1],i=(0,o.useState)(null),l=i[0],s=i[1],f=(0,o.useState)(!1),p=f[0],h=f[1],v=d(e);return(0,o.useEffect)((function(){(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,m(v);case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),(0,n.Z)(v)),{openSourceProjects:r,error:l,isLoading:p}};function v(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var g="OpenSourceCard-module--footer-item--iUbg+",y=["children","className"],b=function(e){var t=e.children,r=e.className;v(e,y);return o.createElement("div",{className:i()("card","OpenSourceCard-module--container--mRX+3",r)},t)};b.defaultProps={children:null,className:null};var w=b,E=["className"],x=function(e){var t=e.className;v(e,E);return o.createElement("svg",{className:i()("octicon octicon-repo mr-2 text-gray","OpenSourceCard-module--title-icon--6m8xW",t),viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},o.createElement("path",{fillRule:"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}))};x.defaultProps={className:null};var N=x,O=r(8409),S=function(e){var t=e.owner,r=e.name;return o.createElement(O.MS,{className:i()("OpenSourceCard-module--title-link--DDX-3"),target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+t+"/"+r},o.createElement("span",null,t),"/",o.createElement("span",{className:"OpenSourceCard-module--repo-name--Ltu6j"},r))};S.defaultProps={owner:"",name:""};var k=S,L=function(e){var t=e.owner,r=e.name;return o.createElement("h4",{className:"OpenSourceCard-module--title--1-cuG"},o.createElement(N,null),o.createElement(k,{owner:t,name:r}))};L.defaultProps={owner:"",name:""};var C=L,j=function(e){var t=e.owner,r=e.name,n=e.description;return o.createElement("div",{className:"OpenSourceCard-module--content--S31rm"},o.createElement(C,{owner:t,name:r}),o.createElement("p",{className:"OpenSourceCard-module--description--gPv3c"},n))};j.defaultProps={owner:"",name:"",description:""};var P=j,_=function(){return o.createElement("span",{className:"OpenSourceCard-module--language-color--GfigS",style:{backgroundColor:"#f1e05a"}})},z=function(){return o.createElement("svg",{"aria-label":"stars",className:"octicon octicon-star",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},o.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}))},A=function(){return o.createElement("svg",{"aria-label":"forks",className:"octicon octicon-repo-forked",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16",role:"img"},o.createElement("path",{fillRule:"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}))},M=function(e){var t=e.language,r=e.fullName,n=e.stargazersCount,a=e.forksCount;return o.createElement("div",{className:i()("card-footer","OpenSourceCard-module--footer--Rog1A")},o.createElement("span",{className:g},o.createElement(_,null)," ",o.createElement("span",{itemProp:"programmingLanguage"},t)),o.createElement(O.MS,{href:"https://github.com/"+r+"/stargazers",className:g,target:"_blank",rel:"noopener noreferrer"},o.createElement(z,null)," ",n),o.createElement(O.MS,{href:"https://github.com/"+r+"/network/members",className:g,target:"_blank",rel:"noopener noreferrer"},o.createElement(A,null)," ",a))};M.defaultProps={fullName:"",language:"",stargazersCount:0,forksCount:0};var V=M;var T=r(181);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||(0,T.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=["count","wrapper","className","containerClassName","containerTestId","circle","style"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=o.createContext({});function D(e){for(var t,r,n,a=e.count,i=void 0===a?1:a,c=e.wrapper,l=e.className,u=e.containerClassName,s=e.containerTestId,f=e.circle,m=void 0!==f&&f,p=e.style,d=function(e,t){if(null==e)return{};var r,n,o=v(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,H),h=o.useContext(F),g=Z({},d),y=0,b=Object.entries(d);y<b.length;y++){var w=R(b[y],2),E=w[0];void 0===w[1]&&delete g[E]}var x=Z(Z(Z({},h),g),{},{circle:m}),N=Z(Z({},p),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,o=e.height,a=e.borderRadius,i=e.circle,c=e.direction,l=e.duration,u=e.enableAnimation,s=void 0===u||u,f={};return"rtl"===c&&(f["--animation-direction"]="reverse"),"number"==typeof l&&(f["--animation-duration"]="".concat(l,"s")),s||(f["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(f.width=n),"string"!=typeof o&&"number"!=typeof o||(f.height=o),"string"!=typeof a&&"number"!=typeof a||(f.borderRadius=a),i&&(f.borderRadius="50%"),void 0!==t&&(f["--base-color"]=t),void 0!==r&&(f["--highlight-color"]=r),f}(x)),O="react-loading-skeleton";l&&(O+=" ".concat(l));for(var S=null!==(t=x.inline)&&void 0!==t&&t,k=[],L=Math.ceil(i),C=0;C<L;C++){var j=N;if(L>i&&C===L-1){var P=null!==(r=j.width)&&void 0!==r?r:"100%",_=i%1,z="number"==typeof P?P*_:"calc(".concat(P," * ").concat(_,")");j=Z(Z({},j),{},{width:z})}var A=o.createElement("span",{className:O,style:j,key:C},"‌");S?k.push(A):k.push(o.createElement(o.Fragment,{key:C},A,o.createElement("br",null)))}return o.createElement("span",{className:u,"data-testid":s,"aria-live":"polite","aria-busy":null===(n=x.enableAnimation)||void 0===n||n},c?k.map((function(e,t){return o.createElement(c,{key:t},e)})):k)}var B=function(){return o.createElement(w,null,o.createElement(D,{width:200}),o.createElement(D,{count:3}))},K=function(e){var t=e.owner,r=e.name,n=e.fullName,a=e.description,i=e.language,c=e.stargazersCount,l=e.forksCount;return e.isLoading?o.createElement(B,null):o.createElement(w,null,o.createElement(P,{owner:t,name:r,description:a}),o.createElement(V,{language:i,fullName:n,stargazersCount:c,forksCount:l}))};K.defaultProps={owner:"",name:"",fullName:"",description:"",language:"",stargazersCount:0,forksCount:0,isLoading:!1};var U=K,W=function(){var e=h(),t=e.openSourceProjects,r=e.isLoading;return o.createElement("main",{className:i()("section section-nude","AllOpenSourceSection-module--container--WaBsf")},o.createElement("div",{className:"container"},o.createElement("h1",null,"Open Source Projects"),o.createElement("div",{className:"row open-source"},r?(0,n.Z)(Array(6)).map((function(e,t){return o.createElement("div",{className:"col-md-4",key:t},o.createElement(U,{isLoading:!0}))})):t.map((function(e){return o.createElement("div",{className:"col-md-4",key:e.name},o.createElement(U,e))})))))},X=function(){var e=h(6),t=e.openSourceProjects,r=e.isLoading;return o.createElement("section",{className:i()("section posts-section section-light-brown","LatestOpenSourceSection-module--container--smxhe")},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-10 col-md-offset-1"},o.createElement("div",{className:"text-center"},o.createElement("h2",null,"Top Open Source Projects")))),o.createElement("div",{className:"row open-source open-source-section"},r?(0,n.Z)(Array(6)).map((function(e,t){return o.createElement("div",{className:"col-md-4",key:t},o.createElement(U,{isLoading:!0}))})):t.map((function(e,t){return o.createElement("div",{className:"col-md-4",key:t},o.createElement(U,e))}))),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-10 col-md-offset-1"},o.createElement("div",{className:"text-center"},o.createElement(p.Link,{to:"/open-source",className:"btn btn-default btn-fill btn-lg"},"All Open Source Projects"))))))}},7061:function(e,t,r){var n=r(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=m(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=f;var p={};function d(){}function h(){}function v(){}var g={};s(g,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==r&&a.call(b,c)&&(g=b);var w=v.prototype=d.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,c,l){var u=m(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function N(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=m(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=v,s(w,"constructor",v),s(v,"constructor",h),h.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(x.prototype),s(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,r){var n=r(7061)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,l,"next",e)}function l(e){n(i,o,a,c,l,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=287e9cf8adb0c62d684ac3328d28cee2c61a814c-c8551666d7abaf0319be.js.map