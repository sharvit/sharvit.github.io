(self.webpackChunkavi_sharvit=self.webpackChunkavi_sharvit||[]).push([[143],{465:function(e,t,r){"use strict";r.d(t,{GithubCardsGrid:function(){return y},OpenSourceSection:function(){return w}});var a=r(6540),n=r(4194);const o=e=>Promise.all(e.map((e=>(async e=>{const t=await fetch("https://api.github.com/repos/"+e),r=await t.json();return{id:r.id,owner:r.owner.login,name:r.name,fullName:r.full_name,description:r.description,language:r.language,htmlUrl:r.html_url,stargazersCount:r.stargazers_count,forksCount:r.forks_count,fork:r.fork}})(e)))),c=e=>{const{0:t,1:r}=(0,a.useState)([]),{0:c,1:l}=(0,a.useState)(null),{0:s,1:i}=(0,a.useState)(!1),u=(e=>{var t,r;const o=null===(t=(0,n.useStaticQuery)("483975508").file)||void 0===t||null===(r=t.childYaml)||void 0===r?void 0:r.open_source_projects;return(0,a.useMemo)((()=>e?o.slice(0,e):o),[o,e])})(e);return(0,a.useEffect)((()=>{(async()=>{i(!0);const e=await o(u);r(e),i(!1)})().catch((e=>{l(e.message),i(!1)}))}),[u]),{openSourceProjectsIds:u,openSourceProjects:t,error:c,isLoading:s}};r(90);const l=a.createContext({}),s=!0;function i({baseColor:e,highlightColor:t,width:r,height:a,borderRadius:n,circle:o,direction:c,duration:l,enableAnimation:i=s}){const u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"==typeof l&&(u["--animation-duration"]=`${l}s`),i||(u["--pseudo-element-display"]="none"),"string"!=typeof r&&"number"!=typeof r||(u.width=r),"string"!=typeof a&&"number"!=typeof a||(u.height=a),"string"!=typeof n&&"number"!=typeof n||(u.borderRadius=n),o&&(u.borderRadius="50%"),void 0!==e&&(u["--base-color"]=e),void 0!==t&&(u["--highlight-color"]=t),u}function u({count:e=1,wrapper:t,className:r,containerClassName:n,containerTestId:o,circle:c=!1,style:u,...m}){var d,p,h;const g=a.useContext(l),f={...m};for(const[a,l]of Object.entries(m))void 0===l&&delete f[a];const v={...g,...f,circle:c},b={...u,...i(v)};let E="react-loading-skeleton";r&&(E+=` ${r}`);const y=null!==(d=v.inline)&&void 0!==d&&d,C=[],w=Math.ceil(e);for(let l=0;l<w;l++){let t=b;if(w>e&&l===w-1){const r=null!==(p=t.width)&&void 0!==p?p:"100%",a=e%1,n="number"==typeof r?r*a:`calc(${r} * ${a})`;t={...t,width:n}}const r=a.createElement("span",{className:E,style:t,key:l},"‌");y?C.push(r):C.push(a.createElement(a.Fragment,{key:l},r,a.createElement("br",null)))}return a.createElement("span",{className:n,"data-testid":o,"aria-live":"polite","aria-busy":null!==(h=v.enableAnimation)&&void 0!==h?h:s},t?C.map(((e,r)=>a.createElement(t,{key:r},e))):C)}const m=()=>a.createElement("svg",{"aria-label":"forks",role:"img",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo-forked",fill:"currentColor"},a.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})),d=()=>a.createElement("svg",{"aria-label":"stars",className:"octicon octicon-star",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),p=()=>a.createElement("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-repo mr-1 color-fg-muted"},a.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}));var h=r(6942),g=r.n(h);function f(e){switch(e){case"TypeScript":return"#2b7489";case"JavaScript":return"#f1e05a";case"HTML":return"#e34c26";case"CSS":return"#563d7c";case"SCSS":return"#c6538c";case"Python":return"#3572A5";case"C#":return"#178600";case"C++":return"#f34b7d";case"Java":return"#b07219";case"PHP":return"#4F5D95";case"Ruby":return"#701516";case"Shell":return"#89e051";default:return"#000"}}const v=e=>{let{programingLanguage:t,className:r}=e;return a.createElement("span",{className:g()("LanguageIcon-module--language-icon--ec3f0",r),style:{backgroundColor:f(t)}})};var b="GithubCard-module--footer-item--08e40";const E=e=>{let{repositoryId:t,repository:r}=e;const{0:n,1:o}=(0,a.useMemo)((()=>t.split("/")),[t]),c=(0,a.useMemo)((()=>"https://github.com/"+n+"/"+o),[n,o]),l=!r;return a.createElement("article",{className:"GithubCard-module--card--2b76c"},a.createElement("div",{className:"GithubCard-module--body--884ce"},a.createElement("h4",null,a.createElement(p,null),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c},a.createElement("span",{className:"GithubCard-module--owner--7e362"},n),"/",a.createElement("span",{className:"GithubCard-module--repository-name--20a87"},o))),a.createElement("p",null,l?a.createElement(u,{count:2}):r.description)),l?a.createElement("footer",{className:"GithubCard-module--skeleton--9a38d"},a.createElement(u,null)):a.createElement("footer",null,a.createElement("span",{className:b},a.createElement(v,{className:"GithubCard-module--language-icon--68462",programingLanguage:r.language})," ",a.createElement("span",{itemProp:"programmingLanguage"},r.language)),a.createElement("a",{href:r.htmlUrl+"/stargazers",className:b,target:"_blank",rel:"noopener noreferrer"},a.createElement(d,null)," ",r.stargazersCount),a.createElement("a",{href:r.htmlUrl+"/network/members",className:b,target:"_blank",rel:"noopener noreferrer"},a.createElement(m,null)," ",r.forksCount)))};const y=e=>{let{top:t,className:r}=e;const{openSourceProjects:n,openSourceProjectsIds:o}=c(t),l=(0,a.useMemo)((()=>o.map(((e,t)=>{const r=n[t];return a.createElement(E,{key:e,repositoryId:e,repository:r})}))),[o,n]);return a.createElement("div",{className:g()("GithubCardsGrid-module--github-cards--75d38",r)},l)};var C=r(3353);const w=()=>a.createElement(C.wn,{title:"Top Open Source Projects",footer:"#all_open_source_projects",link:"/open-source",className:"OpenSourceSection-module--open-source-section--bbab4"},a.createElement(y,{top:6}))},90:function(){},9793:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return l},default:function(){return s}});var a=r(6540),n=r(3353),o=r(465),c=r(55);const l=()=>a.createElement(n.G$,{title:"Open source projects"});function s(){return a.createElement(n.PE,{className:c.CL},a.createElement("h2",{className:c.Ed},"Open Source Projects"),a.createElement(o.GithubCardsGrid,{className:c.ws}))}}}]);
//# sourceMappingURL=component---src-pages-open-source-tsx-196064fe4bebf4bad2bb.js.map