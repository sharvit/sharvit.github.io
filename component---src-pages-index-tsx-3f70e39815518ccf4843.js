(self.webpackChunkavi_sharvit=self.webpackChunkavi_sharvit||[]).push([[245],{7853:function(e,t,r){"use strict";r.d(t,{zy:function(){return s},fk:function(){return m},sf:function(){return p},Xs:function(){return a}});const n=e=>{const[t,r,n]=e.split("-");return new Date(t+"-"+r+"-"+n)},a=e=>{var t,r,a,o,l,c,s;return{name:e.name,title:(null===(t=e.childMarkdownRemark)||void 0===t||null===(r=t.frontmatter)||void 0===r?void 0:r.title)||"",date:n(e.name),url:"/blog/"+e.name,excerpt:(null===(a=e.childMarkdownRemark)||void 0===a?void 0:a.excerpt)||"",html:(null===(o=e.childMarkdownRemark)||void 0===o?void 0:o.html)||"",coverImage:(null===(l=e.childMarkdownRemark)||void 0===l||null===(c=l.frontmatter)||void 0===c||null===(s=c.coverImage)||void 0===s?void 0:s.childImageSharp)||void 0}};var o=r(4194),l=r(6540);const c=e=>{const t=(e=>{const t=(0,o.useStaticQuery)("1187565960").allFile.nodes;return(0,l.useMemo)((()=>e?t.slice(0,e):t),[t,e])})(e);return t.map(a)};const s=e=>{let{title:t,date:r,html:n}=e;const a=(0,l.useMemo)((()=>r.toDateString()),[r]),o=(0,l.useMemo)((()=>r.toJSON()),[r]);return l.createElement("article",{className:"BlogPost-module--post--b8740"},l.createElement("header",null,l.createElement("h1",null,t),l.createElement("time",{dateTime:o},a)),l.createElement("div",{className:"BlogPost-module--postContent--2fb97",dangerouslySetInnerHTML:{__html:n}}))};var i=r(2759);function u(e){let{blogPost:{title:t,date:r,url:n,excerpt:a,coverImage:c}}=e;return l.createElement("article",{className:"BlogPostListItem-module--blog-post-item--9faee"},l.createElement("header",null,c&&l.createElement(o.Link,{to:n},l.createElement(i.D,{alt:t,image:c})),l.createElement(o.Link,{to:n},l.createElement("h3",null,t)),l.createElement("time",{dateTime:r.toJSON()},r.toDateString())),l.createElement("p",null,a),l.createElement("footer",null,l.createElement(o.Link,{to:n},"#read_more")))}const m=e=>{let{top:t}=e;const r=c(t);return l.createElement(l.Fragment,null,r.map((e=>l.createElement(u,{key:e.name,blogPost:e}))))};var d=r(3353);const p=()=>l.createElement(d.wn,{title:"Latest Blog Posts",footer:"#all_blog_posts",link:"/blog",className:"BlogSection-module--blog-section--8f530"},l.createElement(m,{top:5}))},465:function(e,t,r){"use strict";r.d(t,{GithubCardsGrid:function(){return k},OpenSourceSection:function(){return S}});var n=r(6540),a=r(4194);const o=e=>Promise.all(e.map((e=>(async e=>{const t=await fetch("https://api.github.com/repos/"+e),r=await t.json();return{id:r.id,owner:r.owner.login,name:r.name,fullName:r.full_name,description:r.description,language:r.language,htmlUrl:r.html_url,stargazersCount:r.stargazers_count,forksCount:r.forks_count,fork:r.fork}})(e)))),l=e=>{const{0:t,1:r}=(0,n.useState)([]),{0:l,1:c}=(0,n.useState)(null),{0:s,1:i}=(0,n.useState)(!1),u=(e=>{var t,r;const o=null===(t=(0,a.useStaticQuery)("483975508").file)||void 0===t||null===(r=t.childYaml)||void 0===r?void 0:r.open_source_projects;return(0,n.useMemo)((()=>e?o.slice(0,e):o),[o,e])})(e);return(0,n.useEffect)((()=>{(async()=>{i(!0);const e=await o(u);r(e),i(!1)})().catch((e=>{c(e.message),i(!1)}))}),[u]),{openSourceProjectsIds:u,openSourceProjects:t,error:l,isLoading:s}};r(90);const c=n.createContext({}),s=!0;function i({baseColor:e,highlightColor:t,width:r,height:n,borderRadius:a,circle:o,direction:l,duration:c,enableAnimation:i=s}){const u={};return"rtl"===l&&(u["--animation-direction"]="reverse"),"number"==typeof c&&(u["--animation-duration"]=`${c}s`),i||(u["--pseudo-element-display"]="none"),"string"!=typeof r&&"number"!=typeof r||(u.width=r),"string"!=typeof n&&"number"!=typeof n||(u.height=n),"string"!=typeof a&&"number"!=typeof a||(u.borderRadius=a),o&&(u.borderRadius="50%"),void 0!==e&&(u["--base-color"]=e),void 0!==t&&(u["--highlight-color"]=t),u}function u({count:e=1,wrapper:t,className:r,containerClassName:a,containerTestId:o,circle:l=!1,style:u,...m}){var d,p,h;const g=n.useContext(c),f={...m};for(const[n,c]of Object.entries(m))void 0===c&&delete f[n];const v={...g,...f,circle:l},E={...u,...i(v)};let b="react-loading-skeleton";r&&(b+=` ${r}`);const k=null!==(d=v.inline)&&void 0!==d&&d,y=[],S=Math.ceil(e);for(let c=0;c<S;c++){let t=E;if(S>e&&c===S-1){const r=null!==(p=t.width)&&void 0!==p?p:"100%",n=e%1,a="number"==typeof r?r*n:`calc(${r} * ${n})`;t={...t,width:a}}const r=n.createElement("span",{className:b,style:t,key:c},"‌");k?y.push(r):y.push(n.createElement(n.Fragment,{key:c},r,n.createElement("br",null)))}return n.createElement("span",{className:a,"data-testid":o,"aria-live":"polite","aria-busy":null!==(h=v.enableAnimation)&&void 0!==h?h:s},t?y.map(((e,r)=>n.createElement(t,{key:r},e))):y)}const m=()=>n.createElement("svg",{"aria-label":"forks",role:"img",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo-forked",fill:"currentColor"},n.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})),d=()=>n.createElement("svg",{"aria-label":"stars",className:"octicon octicon-star",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},n.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),p=()=>n.createElement("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo mr-1 color-fg-muted"},n.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}));var h=r(6942),g=r.n(h);function f(e){switch(e){case"TypeScript":return"#2b7489";case"JavaScript":return"#f1e05a";case"HTML":return"#e34c26";case"CSS":return"#563d7c";case"SCSS":return"#c6538c";case"Python":return"#3572A5";case"C#":return"#178600";case"C++":return"#f34b7d";case"Java":return"#b07219";case"PHP":return"#4F5D95";case"Ruby":return"#701516";case"Shell":return"#89e051";default:return"#000"}}const v=e=>{let{programingLanguage:t,className:r}=e;return n.createElement("span",{className:g()("LanguageIcon-module--language-icon--ec3f0",r),style:{backgroundColor:f(t)}})};var E="GithubCard-module--footer-item--08e40";const b=e=>{let{repositoryId:t,repository:r}=e;const{0:a,1:o}=(0,n.useMemo)((()=>t.split("/")),[t]),l=(0,n.useMemo)((()=>"https://github.com/"+a+"/"+o),[a,o]),c=!r;return n.createElement("article",{className:"GithubCard-module--card--2b76c"},n.createElement("div",{className:"GithubCard-module--body--884ce"},n.createElement("h4",null,n.createElement(p,null),n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},n.createElement("span",{className:"GithubCard-module--owner--7e362"},a),"/",n.createElement("span",{className:"GithubCard-module--repository-name--20a87"},o))),n.createElement("p",null,c?n.createElement(u,{count:2}):r.description)),c?n.createElement("footer",{className:"GithubCard-module--skeleton--9a38d"},n.createElement(u,null)):n.createElement("footer",null,n.createElement("span",{className:E},n.createElement(v,{className:"GithubCard-module--language-icon--68462",programingLanguage:r.language})," ",n.createElement("span",{itemProp:"programmingLanguage"},r.language)),n.createElement("a",{href:r.htmlUrl+"/stargazers",className:E,target:"_blank",rel:"noopener noreferrer"},n.createElement(d,null)," ",r.stargazersCount),n.createElement("a",{href:r.htmlUrl+"/network/members",className:E,target:"_blank",rel:"noopener noreferrer"},n.createElement(m,null)," ",r.forksCount)))};const k=e=>{let{top:t,className:r}=e;const{openSourceProjects:a,openSourceProjectsIds:o}=l(t),c=(0,n.useMemo)((()=>o.map(((e,t)=>{const r=a[t];return n.createElement(b,{key:e,repositoryId:e,repository:r})}))),[o,a]);return n.createElement("div",{className:g()("GithubCardsGrid-module--github-cards--75d38",r)},c)};var y=r(3353);const S=()=>n.createElement(y.wn,{title:"Top Open Source Projects",footer:"#all_open_source_projects",link:"/open-source",className:"OpenSourceSection-module--open-source-section--bbab4"},n.createElement(k,{top:6}))},90:function(){},2783:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return i},default:function(){return u}});var n=r(6540),a=r(3353),o=r(4306),l=r(7853),c=r(465),s=r(55);const i=()=>n.createElement(a.G$,null);function u(){const e=(0,o.Zh)();return n.createElement(a.PE,{transparent:!0,className:s.CL,coverImage:e&&{image:e,alt:"Avi Sharvit"}},n.createElement(o.rd,null),n.createElement(c.OpenSourceSection,null),n.createElement(l.sf,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3f70e39815518ccf4843.js.map