(self.webpackChunkavi_sharvit=self.webpackChunkavi_sharvit||[]).push([[691],{8391:function(e,t,r){"use strict";r.d(t,{JG:function(){return l},DQ:function(){return s},os:function(){return d},jE:function(){return n}});var n=function(e){var t,r,n,a,o,c,l,u,i,s,m,d;return{name:e.name,title:(null===(t=e.childMarkdownRemark)||void 0===t||null===(r=t.frontmatter)||void 0===r?void 0:r.title)||"",date:(u=e.name,i=u.split("-"),s=i[0],m=i[1],d=i[2],new Date(s+"-"+m+"-"+d)),url:"/blog/"+e.name,excerpt:(null===(n=e.childMarkdownRemark)||void 0===n?void 0:n.excerpt)||"",html:(null===(a=e.childMarkdownRemark)||void 0===a?void 0:a.html)||"",coverImage:(null===(o=e.childMarkdownRemark)||void 0===o||null===(c=o.frontmatter)||void 0===c||null===(l=c.coverImage)||void 0===l?void 0:l.childImageSharp)||void 0}},a=r(1082),o=r(7294),c=function(e){var t=function(e){var t=(0,a.K2)("472951252").allFile.nodes;return(0,o.useMemo)((function(){return e?t.slice(0,e):t}),[t,e])}(e);return t.map(n)},l=function(e){var t=e.title,r=e.date,n=e.html,a=(0,o.useMemo)((function(){return r.toDateString()}),[r]),c=(0,o.useMemo)((function(){return r.toJSON()}),[r]);return o.createElement("article",{className:"BlogPost-module--post--b8740"},o.createElement("header",null,o.createElement("h1",null,t),o.createElement("time",{dateTime:c},a)),o.createElement("div",{className:"BlogPost-module--postContent--2fb97",dangerouslySetInnerHTML:{__html:n}}))},u=r(9734);function i(e){var t=e.blogPost,r=t.title,n=t.date,c=t.url,l=t.excerpt,i=t.coverImage;return o.createElement("article",{className:"BlogPostListItem-module--blog-post-item--9faee"},o.createElement("header",null,i&&o.createElement(a.rU,{to:c},o.createElement(u.y,{alt:r,image:i})),o.createElement(a.rU,{to:c},o.createElement("h3",null,r)),o.createElement("time",{dateTime:n.toJSON()},n.toDateString())),o.createElement("p",null,l),o.createElement("footer",null,o.createElement(a.rU,{to:c},"#read_more")))}var s=function(e){var t=e.top,r=c(t);return o.createElement(o.Fragment,null,r.map((function(e){return o.createElement(i,{key:e.name,blogPost:e})})))},m=r(7159),d=function(){return o.createElement(m.$0,{title:"Latest Blog Posts",footer:"#all_blog_posts",link:"/blog",className:"BlogSection-module--blog-section--8f530"},o.createElement(s,{top:5}))}},3791:function(e,t,r){"use strict";r.d(t,{GithubCardsGrid:function(){return C},OpenSourceSection:function(){return _}});var n=r(5861),a=r(4687),o=r.n(a),c=r(7294),l=r(1082),u=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/"+t);case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",{id:n.id,owner:n.owner.login,name:n.name,fullName:n.full_name,description:n.description,language:n.language,htmlUrl:n.html_url,stargazersCount:n.stargazers_count,forksCount:n.forks_count,fork:n.fork});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function i(e){switch(e){case"TypeScript":return"#2b7489";case"JavaScript":return"#f1e05a";case"HTML":return"#e34c26";case"CSS":return"#563d7c";case"SCSS":return"#c6538c";case"Python":return"#3572A5";case"C#":return"#178600";case"C++":return"#f34b7d";case"Java":return"#b07219";case"PHP":return"#4F5D95";case"Ruby":return"#701516";case"Shell":return"#89e051";default:return"#000"}}var s=function(e){var t=(0,c.useState)([]),r=t[0],a=t[1],i=(0,c.useState)(null),s=i[0],m=i[1],d=(0,c.useState)(!1),f=d[0],p=d[1],v=function(e){var t,r,n=null===(t=(0,l.K2)("483975508").file)||void 0===t||null===(r=t.childYaml)||void 0===r?void 0:r.open_source_projects;return(0,c.useMemo)((function(){return e?n.slice(0,e):n}),[n,e])}(e);return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,r=v,Promise.all(r.map((function(e){return u(e)})));case 3:t=e.sent,a(t),p(!1);case 6:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){m(e.message),p(!1)}))}),[v]),{openSourceProjectsIds:v,openSourceProjects:r,error:s,isLoading:f}},m=(r(2686),r(885));function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=["count","wrapper","className","containerClassName","containerTestId","circle","style"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=c.createContext({});function b(e){for(var t,r,n,a=e.count,o=void 0===a?1:a,l=e.wrapper,u=e.className,i=e.containerClassName,s=e.containerTestId,d=e.circle,v=void 0!==d&&d,b=e.style,E=f(e,p),y=c.useContext(g),w=h({},E),k=0,S=Object.entries(E);k<S.length;k++){var O=(0,m.Z)(S[k],2),N=O[0];void 0===O[1]&&delete w[N]}var P=h(h(h({},y),w),{},{circle:v}),C=h(h({},b),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,o=e.borderRadius,c=e.circle,l=e.direction,u=e.duration,i=e.enableAnimation,s=void 0===i||i,m={};return"rtl"===l&&(m["--animation-direction"]="reverse"),"number"==typeof u&&(m["--animation-duration"]="".concat(u,"s")),s||(m["--pseudo-element-display"]="none"),"string"!=typeof n&&"number"!=typeof n||(m.width=n),"string"!=typeof a&&"number"!=typeof a||(m.height=a),"string"!=typeof o&&"number"!=typeof o||(m.borderRadius=o),c&&(m.borderRadius="50%"),void 0!==t&&(m["--base-color"]=t),void 0!==r&&(m["--highlight-color"]=r),m}(P)),j="react-loading-skeleton";u&&(j+=" ".concat(u));for(var _=null!==(t=P.inline)&&void 0!==t&&t,M=[],x=Math.ceil(o),I=0;I<x;I++){var z=C;if(x>o&&I===x-1){var G=null!==(r=z.width)&&void 0!==r?r:"100%",L=o%1,R="number"==typeof G?G*L:"calc(".concat(G," * ").concat(L,")");z=h(h({},z),{},{width:R})}var A=c.createElement("span",{className:j,style:z,key:I},"‌");_?M.push(A):M.push(c.createElement(c.Fragment,{key:I},A,c.createElement("br",null)))}return c.createElement("span",{className:i,"data-testid":s,"aria-live":"polite","aria-busy":null===(n=P.enableAnimation)||void 0===n||n},l?M.map((function(e,t){return c.createElement(l,{key:t},e)})):M)}var E=function(){return c.createElement("svg",{"aria-label":"forks",role:"img",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo-forked",fill:"currentColor"},c.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"}))},y=function(){return c.createElement("svg",{"aria-label":"stars",className:"octicon octicon-star",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},c.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}))},w=function(){return c.createElement("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo mr-1 color-fg-muted"},c.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}))},k=r(5900),S=r.n(k),O=function(e){var t=e.programingLanguage,r=e.className;return c.createElement("span",{className:S()("LanguageIcon-module--language-icon--ec3f0",r),style:{backgroundColor:i(t)}})},N="GithubCard-module--footer-item--08e40",P=function(e){var t=e.repositoryId,r=e.repository,n=(0,c.useMemo)((function(){return t.split("/")}),[t]),a=n[0],o=n[1],l=(0,c.useMemo)((function(){return"https://github.com/"+a+"/"+o}),[a,o]),u=!r;return c.createElement("article",{className:"GithubCard-module--card--2b76c"},c.createElement("div",{className:"GithubCard-module--body--884ce"},c.createElement("h4",null,c.createElement(w,null),c.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},c.createElement("span",{className:"GithubCard-module--owner--7e362"},a),"/",c.createElement("span",{className:"GithubCard-module--repository-name--20a87"},o))),c.createElement("p",null,u?c.createElement(b,{count:2}):r.description)),u?c.createElement("footer",{className:"GithubCard-module--skeleton--9a38d"},c.createElement(b,null)):c.createElement("footer",null,c.createElement("span",{className:N},c.createElement(O,{className:"GithubCard-module--language-icon--68462",programingLanguage:r.language})," ",c.createElement("span",{itemProp:"programmingLanguage"},r.language)),c.createElement("a",{href:r.htmlUrl+"/stargazers",className:N,target:"_blank",rel:"noopener noreferrer"},c.createElement(y,null)," ",r.stargazersCount),c.createElement("a",{href:r.htmlUrl+"/network/members",className:N,target:"_blank",rel:"noopener noreferrer"},c.createElement(E,null)," ",r.forksCount)))},C=function(e){var t=e.top,r=e.className,n=s(t),a=n.openSourceProjects,o=n.openSourceProjectsIds,l=(0,c.useMemo)((function(){return o.map((function(e,t){var r=a[t];return c.createElement(P,{key:e,repositoryId:e,repository:r})}))}),[o,a]);return c.createElement("div",{className:S()("GithubCardsGrid-module--github-cards--75d38",r)},l)},j=r(7159),_=function(){return c.createElement(j.$0,{title:"Top Open Source Projects",footer:"#all_open_source_projects",link:"/open-source",className:"OpenSourceSection-module--open-source-section--bbab4"},c.createElement(C,{top:6}))}},2686:function(){},7200:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return i},default:function(){return s}});var n=r(7294),a=r(7159),o=r(5863),c=r(8391),l=r(3791),u=r(2783),i=function(){return n.createElement(a.pQ,null)};function s(){var e=(0,o.fg)();return n.createElement(a.Ar,{transparent:!0,className:u.uG,coverImage:e&&{image:e,alt:"Avi Sharvit"}},n.createElement(o.zd,null),n.createElement(l.OpenSourceSection,null),n.createElement(c.os,null))}},5861:function(e,t,r){"use strict";function n(e,t,r,n,a,o,c){try{var l=e[o](c),u=l.value}catch(i){return void r(i)}l.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var c=e.apply(t,r);function l(e){n(c,a,o,l,u,"next",e)}function u(e){n(c,a,o,l,u,"throw",e)}l(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-190b749d489b4f0969a4.js.map