(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(203),c=a(202),s=a(216),o=(a(39),a(13),a(210)),i=a.n(o),m=(a(207),a(134),a(223));function u(e,t,a,n,r,l,c){try{var s=e[l](c),o=s.value}catch(i){return void a(i)}s.done?t(o):Promise.resolve(o).then(n,r)}var d=function(){var e,t=(e=i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("sharvit");case 3:return t=e.sent,e.abrupt("return",t.filter(function(e){return!e.fork}).sort(function(e,t){return e.stargazersCount-t.stargazersCount}).reverse().slice(0,3));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.abrupt("return",[]);case 11:case"end":return e.stop()}},e,null,[[0,7]])}),function(){var t=this,a=arguments;return new Promise(function(n,r){var l=e.apply(t,a);function c(e){u(l,n,r,c,s,"next",e)}function s(e){u(l,n,r,c,s,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}(),f=(a(38),a(201)),v=a.n(f),p=a(200),E=a(224),b=a(237),h=a.n(b),w=function(e){var t=e.repositories;return r.a.createElement("div",{className:v()("section posts-section section-light-brown",h.a.container)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Latest Open Source Projects")))),r.a.createElement("div",{className:"row open-source open-source-section"},t.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.name},r.a.createElement(E.a,e))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(p.a,{to:"/open-source",className:"btn btn-default"},"MORE"))))))};w.defaultProps={repositories:[]};var N=w;function g(e,t,a,n,r,l,c){try{var s=e[l](c),o=s.value}catch(i){return void a(i)}s.done?t(o):Promise.resolve(o).then(n,r)}var k=function(){var e=Object(n.useState)([]),t=e[0],a=e[1],l=(c=i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,d();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}),s=function(){var e=this,t=arguments;return new Promise(function(a,n){var r=c.apply(e,t);function l(e){g(r,a,n,l,s,"next",e)}function s(e){g(r,a,n,l,s,"throw",e)}l(void 0)})},function(){return s.apply(this,arguments)});var c,s;return Object(n.useEffect)(function(){l()},[]),r.a.createElement(N,{repositories:t})},x=a(217),y=a(238),C=a.n(y),P=function(){return r.a.createElement("div",{className:v()("section section-white",C.a.container)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Latest Blog Posts")))),r.a.createElement(x.a,{limit:3}),r.a.createElement("div",{className:v()("row",C.a.morePostsRow)},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(p.a,{to:"/blog",className:"btn btn-fill btn-primary btn-lg"},"All Posts"))))))};t.default=function(){return r.a.createElement(l.a,{transparent:!0},r.a.createElement(c.a,{title:"Home"}),r.a.createElement(s.a,null),r.a.createElement(k,null),r.a.createElement(P,null))}},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Avi Sharvit",description:"Expert Full Stack Developer",author:{avatar:"https://avatars0.githubusercontent.com/u/1262502"}}}}}},212:function(e){e.exports={data:{site:{siteMetadata:{socialLinks:[{id:"email",link:"mailto:sharvita@gmail.com",buttonClassName:"btn btn-icon btn-fill",iconClassName:"fas fa-envelope"},{id:"facebook",link:"https://www.facebook.com/sharvitavi",buttonClassName:"btn btn-icon btn-fill btn-facebook",iconClassName:"fab fa-facebook-f"},{id:"github",link:"https://github.com/sharvit",buttonClassName:"btn btn-icon btn-fill btn-github",iconClassName:"fab fa-github"},{id:"twitter",link:"https://www.twitter.com/avi_sharvit",buttonClassName:"btn btn-icon btn-fill btn-twitter",iconClassName:"fab fa-twitter"},{id:"stackoverflow",link:"https://stackoverflow.com/users/5800965",buttonClassName:"btn btn-icon btn-fill btn-stack-overflow",iconClassName:"fab fa-stack-overflow"},{id:"rss",link:"/feed.xml",buttonClassName:"btn btn-icon btn-fill btn-rss",iconClassName:"fas fa-rss"}]}}}}},213:function(e,t,a){"use strict";a(214)("link",function(e){return function(t){return e(this,"a","href",t)}})},214:function(e,t,a){var n=a(1),r=a(7),l=a(32),c=/"/g,s=function(e,t,a,n){var r=String(l(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},215:function(e){e.exports={data:{allFile:{edges:[{node:{name:"2016-07-01-serving-your-angular-client-with-nodejs-microservice",childMarkdownRemark:{excerpt:"So you build your angularjs app and you need to serve the app in production.\nThe common mistake is serving your client side from your main…",frontmatter:{title:"Serving angular client with node.js micro service"}}}},{node:{name:"2016-01-22-build-your-i18n-translation-files-using-gulp",childMarkdownRemark:{excerpt:"From one hand, i want to have a flexible and dynamic source files for my app I18n/translations.\nROR have a great I18n source structure that…",frontmatter:{title:"Build your I18n translation files using gulp"}}}},{node:{name:"2015-12-21-hello-world",childMarkdownRemark:{excerpt:"Its took a minute to set everything up, and it feel so great working on that platform!",frontmatter:{title:"Hello World!"}}}}]}}}},216:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(211),c=(a(38),a(220)),s=a.n(c),o=function(){return r.a.createElement("div",{className:s.a.container,style:{backgroundImage:"yooo"}},r.a.createElement("div",{className:s.a.filter}))};o.defaultProps={};var i=o,m=a(212),u=(a(213),function(e){var t=e.socialLinks;return r.a.createElement("p",null,t.map(function(e){var t=e.id,a=e.link,n=e.buttonClassName,l=e.iconClassName;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("a",{className:n,href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:l}))," ")}))});u.defaultProps={socialLinks:[]};var d=u,f=function(){var e=m.data.site.siteMetadata.socialLinks;return r.a.createElement(d,{socialLinks:e})},v=a(221),p=a.n(v),E=function(e){var t=e.name,a=e.description,n=e.avatar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:p.a.profileSection+" section-nude"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "+p.a.ownerAvatar},r.a.createElement("div",{className:"col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center"},r.a.createElement("div",{className:p.a.avatar},r.a.createElement("img",{src:n,alt:"Avi Sharvit Avatar",className:"img-circle img-no-padding img-responsive"})))),r.a.createElement("div",{className:"row "+p.a.owner},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement("h1",{className:p.a.name},t,r.a.createElement("br",null),r.a.createElement("small",null,a)))),r.a.createElement("div",{className:"row "+p.a.ownerContact},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement(f,null))),r.a.createElement("div",{className:"row "+p.a.ownerAbout},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement("p",null,"Expert full stack software developer with more than 12 years of experience.",r.a.createElement("br",null),"I started to learn and write code when I was 10 years old because I thought that this very cool and it can actually give me super powers."),r.a.createElement("p",null,"All my knowledge is from self-learning and I don’t believe that a course or an academic degree can make you a developer. In my opinion, self-learning is the best way to control the bits and bytes."),r.a.createElement("div",{className:p.a.resumeButton},r.a.createElement("a",{href:"/avi-sharvit-resume.pdf",className:"btn btn-danger btn-fill"},"DOWNLOAD RESUME PDF")))))))};E.defaultProps={};var b=E;t.a=function(){var e=l.data.site.siteMetadata,t=e.title,a=e.description,n=e.author;return r.a.createElement(b,{name:t,description:a,avatar:n.avatar})}},217:function(e,t,a){"use strict";a(23);var n=a(0),r=a.n(n),l=a(201),c=a.n(l),s=a(200),o=a(222),i=a.n(o),m=function(e){var t=e.title,a=e.path,n=e.date,l=e.excerpt;return r.a.createElement("div",{className:i.a.article},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(s.a,{to:a},r.a.createElement("h3",{className:i.a.title},t)),r.a.createElement("h6",{className:"title-uppercase"},n.toDateString())))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-md-offset-2"},r.a.createElement("div",{className:i.a.articleContent},r.a.createElement("p",null,l),r.a.createElement(s.a,{to:a,className:c()("btn btn-simple btn-primary",i.a.readMoreButton)},"READ MORE")))))};m.defaultProps={title:"",path:"",date:new Date,excerpt:""};var u=m,d=(a(40),a(38),a(215)),f=function(e){var t=e.node,a=t.name,n=t.childMarkdownRemark,r=n.excerpt,l=n.frontmatter.title;return v({name:a,title:l,excerpt:r})},v=function(e){var t=e.name,a=e.title,n=e.excerpt,r=t.split("-"),l=r[0],c=r[1],s=r[2],o=r.slice(3);return{title:a,date:new Date(l+"-"+c+"-"+s),excerpt:n,path:"/blog/"+o.join("-")}},p=function(e){return d.data.allFile.edges.map(f).slice(0,e)},E=function(e){var t=e.limit;return r.a.createElement("div",{className:"articles"},p(t).map(function(e){return r.a.createElement(u,Object.assign({key:e.path},e))}))};E.defaultProps={limit:1e3};var b=E;t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-8d7b0637d1a9bedf888a.js.map