(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(205),o=a(204);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(202),a(9).default.enqueue,r.a.createContext({})},201:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n).a.createContext({navigation:{collapse:!0}}),i=r.Provider;t.b=r},202:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},204:function(e,t,a){"use strict";var n=a(209),r=a(0),i=a.n(r),o=a(214),l=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data,s=c.site.siteMetadata,u=c.file,m=o?s.title+" | %s":"%s",p=o||s.title+" | "+s.description,v=t||u.childMarkdownRemark.rawMarkdownBody;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:p,titleTemplate:m,meta:[{name:"description",content:v},{property:"og:title",content:p},{property:"og:description",content:v},{property:"og:image",content:s.author.avatar},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+s.author.twitter},{name:"twitter:creator",content:"@"+s.author.twitter}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:"",title:""},t.a=c},205:function(e,t,a){"use strict";a(23);var n=a(0),r=a.n(n),i=a(201),o=a(207),l=(a(91),a(134),a(67),a(13),a(50),a(39),a(29),a(203)),c=a.n(l),s=a(200),u=a(212),m=a.n(u),p=function(e){var t=e.siteTitle,a=e.transparent,n=e.collapse,i=e.toggleNavigation;return r.a.createElement("nav",{className:c()("navbar",m.a.container,a?"navbar-ct-transparent":"navbar-ct-primary"),role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:c()("navbar-toggle",m.a.navbarToggle),onClick:function(){return i()}},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:c()("icon-bar",m.a.iconBar)}),r.a.createElement("span",{className:c()("icon-bar",m.a.iconBar)}),r.a.createElement("span",{className:c()("icon-bar",m.a.iconBar)})),r.a.createElement(s.a,{to:"/",className:"navbar-brand"},t)),r.a.createElement("div",{className:c()({collapse:n},"navbar-collapse")},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement(s.a,{to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/open-source"},"Open Source")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/about"},"About"))))))};p.defaultProps={siteTitle:"",transparent:!1,collapse:!1,toggleNavigation:function(){return null}};var v=p,d=function(e){var t=Object(n.useContext)(i.b).navigation,a=t.collapse,o=t.toggleNavigation;return r.a.createElement(v,Object.assign({collapse:a,toggleNavigation:o},e))},g=a(206);a(213);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var t=e.siteTitle,a=e.transparent,n=e.breadcrumbs,i=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{siteTitle:t,transparent:a}),n&&n.length>0&&r.a.createElement(g.a,{items:[{title:t,path:"/"}].concat(b(n))}),r.a.createElement("div",{className:"wrapper"},i))};f.defaultProps={siteTitle:"",breadcrumbs:[],transparent:!1};var E=f;t.a=function(e){var t=Object(n.useState)(!0),a=t[0],l=t[1];return r.a.createElement(i.a,{value:{navigation:{collapse:a,toggleNavigation:function(){return l(!a)}}}},r.a.createElement(E,Object.assign({},e,{siteTitle:o.data.site.siteMetadata.title})))}},206:function(e,t,a){"use strict";a(23);var n=a(0),r=a.n(n),i=a(200),o=function(e){var t=e.title,a=e.path;return r.a.createElement("li",{itemScope:!0,itemType:"http://data-vocabulary.org/Breadcrumb"},r.a.createElement(i.a,{to:a,itemProp:"url"},r.a.createElement("span",{itemProp:"title"},t)))};o.defaultProps={title:"",path:""};var l=o,c=function(e){var t=e.items;return r.a.createElement("nav",{className:"breadcrumbs"},r.a.createElement("ol",{className:"breadcrumb",style:{margin:0}},t.map(function(e){return r.a.createElement(l,Object.assign({key:e.path},e))})))};t.a=c},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Avi Sharvit"}}}}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Avi Sharvit",description:"Expert Full Stack Developer",author:{twitter:"avi_sharvit",avatar:"https://avatars0.githubusercontent.com/u/1262502"}}},file:{childMarkdownRemark:{rawMarkdownBody:"Expert full-stack software developer with more than 12 years of\nexperience.  \nI started to learn and write code when I was ten years old\nbecause I have found it very cool and I thought it can give me\nsuperpowers.\n\nAll my knowledge is from self-learning as I believe self-learning is the best way to control the bits and bytes.\n"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-1b8476349cb63aeb7745.js.map