(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7IAT":function(e,t,a){e.exports={profileSection:"ProfileSection-module--profile-section--2skfJ",ownerAvatar:"ProfileSection-module--owner-avatar--34asy",avatar:"ProfileSection-module--avatar--2ruGm",owner:"ProfileSection-module--owner--3QRsL",name:"ProfileSection-module--name--vU92U",ownerContact:"ProfileSection-module--owner-contact--2lN93",ownerAbout:"ProfileSection-module--owner-about--3XxYB",resumeButton:"ProfileSection-module--resume-button--uzLu2"}},EeA9:function(e,t,a){e.exports={container:"LatestBlogPostsSection-module--container--IIh_6",morePostsRow:"LatestBlogPostsSection-module--more-posts-row--1xQ8x"}},JNoe:function(e,t,a){e.exports={article:"BlogPostListItem-module--article--3wCBE",title:"BlogPostListItem-module--title--2Z99V",articleContent:"BlogPostListItem-module--article-content--3DMTr",readMoreButton:"BlogPostListItem-module--read-more-button--JuA0_"}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Zttt"),o=a("EYWl"),c=a("UuKU"),i=a("s4ne"),s=a("KQm4"),m=a("TSYQ"),u=a.n(m),d=a("Wbzz"),f=a("OaY/"),v=a("pVYO"),E=a.n(v),p=function(e){var t=e.repositories,a=e.isLoading;return r.a.createElement("section",{className:u()("section posts-section section-light-brown",E.a.container)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Top Open Source Projects")))),r.a.createElement("div",{className:"row open-source open-source-section"},a?Object(s.a)(Array(6)).map((function(e){return r.a.createElement("div",{className:"col-md-4",key:e},r.a.createElement(f.a,{isLoading:!0}))})):t.map((function(e){return r.a.createElement("div",{className:"col-md-4",key:e.name},r.a.createElement(f.a,e))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(d.Link,{to:"/open-source",className:"btn btn-default btn-fill btn-lg"},"All Open Source Projects"))))))};p.defaultProps={isLoading:!1,repositories:[]};var b=p,N=function(){var e=Object(i.a)(6),t=e.openSourceProjects,a=e.error,n=e.isLoading;return r.a.createElement(b,{repositories:t,isLoading:n,error:a})},g=a("gWFB"),w=a("EeA9"),P=a.n(w),k=function(){return r.a.createElement("section",{className:u()("section section-white",P.a.container)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Latest Blog Posts")))),r.a.createElement(g.a,{limit:5}),r.a.createElement("div",{className:u()("row",P.a.morePostsRow)},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(d.Link,{to:"/blog",className:"btn btn-fill btn-primary btn-lg"},"All Blog Posts"))))))};t.default=function(){return r.a.createElement(l.a,{transparent:!0},r.a.createElement(o.a,null),r.a.createElement(c.a,null),r.a.createElement(N,null),r.a.createElement(k,null))}},UuKU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("Kfvu"),c=a("cKtk"),i=a("TSYQ"),s=a.n(i),m=a("fa9K"),u=a.n(m),d=function(e){var t,a=e.navbarCollapsed;return r.a.createElement("div",{className:s()(u.a.container,(t={},t[u.a.navbarCollapsed]=a,t))},r.a.createElement("div",{className:u.a.filter}))};d.defaultProps={navbarCollapsed:!1};var f=d,v=function(e){var t=Object(n.useContext)(c.b).navigation.collapse;return r.a.createElement(f,Object.assign({navbarCollapsed:t},e))},E=a("en3a"),p=a.n(E),b=function(e){var t=e.socialLinks;return r.a.createElement("p",{className:p.a.container},t.map((function(e){var t=e.id,a=e.label,n=e.link,l=e.pdfLink,c=e.buttonClassName,i=e.iconClassName;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(o.OutboundLink,{className:s()(c,p.a.button),href:n,"data-pdf-link":l||n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:s()(i,p.a.icon)}),r.a.createElement("span",{className:p.a.label},a,":")," ")," ")})))};b.defaultProps={socialLinks:[]};var N=b,g=function(){var e=Object(l.useStaticQuery)("460018882").site.siteMetadata.socialLinks;return r.a.createElement(N,{socialLinks:e})},w=a("7IAT"),P=a.n(w),k=function(e){var t=e.name,a=e.description,n=e.avatar,l=e.bio;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("header",{className:P.a.profileSection+" section-nude"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "+P.a.ownerAvatar},r.a.createElement("div",{className:"col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center"},r.a.createElement("div",{className:P.a.avatar},r.a.createElement("img",{src:n,alt:"Avi Sharvit Avatar",className:"img-circle img-no-padding img-responsive"})))),r.a.createElement("div",{className:"row "+P.a.owner},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement("h1",{className:P.a.name},t,r.a.createElement("br",null),r.a.createElement("small",null,a)))),r.a.createElement("div",{className:"row "+P.a.ownerContact},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement(g,null))),r.a.createElement("div",{className:"row "+P.a.ownerAbout},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 text-center"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("div",{className:P.a.resumeButton},r.a.createElement(o.OutboundLink,{href:"/avi-sharvit-resume.pdf",className:"btn btn-danger btn-fill"},"DOWNLOAD RESUME PDF")))))))};k.defaultProps={};var L=k;t.a=function(){var e,t,a=(e=Object(l.useStaticQuery)("296922323"),{title:(t=e.site.siteMetadata).title,description:t.description,avatar:t.author.avatar,bio:e.file.childMarkdownRemark.html}),n=a.title,o=a.description,c=a.avatar,i=a.bio;return r.a.createElement(L,{name:n,description:o,avatar:c,bio:i})}},en3a:function(e,t,a){e.exports={container:"ProfileIconLinks-module--container--GPA_A",button:"ProfileIconLinks-module--button--1gLrk",icon:"ProfileIconLinks-module--icon--3EE7x",label:"ProfileIconLinks-module--label--1mIUL"}},fa9K:function(e,t,a){e.exports={container:"ProfileBackground-module--container--38AFp",navbarCollapsed:"ProfileBackground-module--navbarCollapsed--1RmC4",filter:"ProfileBackground-module--filter--3m7yw"}},gWFB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),o=a.n(l),c=a("Wbzz"),i=a("9eSz"),s=a.n(i),m=a("JNoe"),u=a.n(m),d=function(e){var t=e.title,a=e.coverImage,n=e.path,l=e.date,i=e.excerpt;return r.a.createElement("article",{className:u.a.article},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement(c.Link,{to:n},a&&r.a.createElement(s.a,{fluid:a,objectFit:"cover",objectPosition:"50% 50%",alt:t}),r.a.createElement("h2",{className:u.a.title},t)),r.a.createElement("div",{className:"title-uppercase"},r.a.createElement("time",{dateTime:l.toJSON()},l.toDateString()))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-md-offset-2"},r.a.createElement("div",{className:u.a.articleContent},r.a.createElement("p",null,i),r.a.createElement(c.Link,{to:n,className:o()("btn btn-simple btn-primary",u.a.readMoreButton)},"READ MORE")))))};d.defaultProps={title:"",coverImage:null,path:"",date:new Date,excerpt:""};var f=d,v=function(e){var t=e.node,a=t.name,n=t.childMarkdownRemark,r=n.excerpt,l=n.frontmatter,o=l.title,c=l.coverImage;return E({name:a,title:o,excerpt:r,coverImageFile:c})},E=function(e){var t=e.name,a=e.title,n=e.excerpt,r=e.coverImageFile,l=t.split("-"),o=l[0],c=l[1],i=l[2];return{title:a,date:new Date(o+"-"+c+"-"+i),excerpt:n,coverImage:r&&r.childImageSharp.fluid,path:"/blog/"+t}},p=function(e){return Object(c.useStaticQuery)("1352671167").allFile.edges.map(v).slice(0,e)},b=function(e){var t=e.limit;return r.a.createElement("div",{className:"articles"},p(t).map((function(e){return r.a.createElement(f,Object.assign({key:e.path},e))})))};b.defaultProps={limit:1e3};var N=b;t.a=N},pVYO:function(e,t,a){e.exports={container:"LatestOpenSourceSection-module--container--3Zpy9"}}}]);
//# sourceMappingURL=component---src-pages-index-js-37b5ff5102076f3ace4d.js.map