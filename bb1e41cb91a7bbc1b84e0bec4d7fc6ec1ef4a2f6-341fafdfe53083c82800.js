/*! For license information please see bb1e41cb91a7bbc1b84e0bec4d7fc6ec1ef4a2f6-341fafdfe53083c82800.js.LICENSE.txt */
(self.webpackChunkavi_sharvit=self.webpackChunkavi_sharvit||[]).push([[693],{2729:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,o=new RegExp("^"+l.source),i=new RegExp(l.source+a.source,"gu"),s=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,a)=>{let l=!1,o=!1,i=!1;for(let s=0;s<e.length;s++){const c=e[s];l&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),l=!1,i=o,o=!0,s++):o&&i&&r.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),i=o,o=!1,l=!0):(l=n(c)===c&&a(c)!==c,i=o,o=a(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(o,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,s.lastIndex=0,e.replace(i,((e,r)=>t(r))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){"use strict";r.d(t,{G:function(){return M},L:function(){return f},M:function(){return x},P:function(){return k},_:function(){return i},a:function(){return o},b:function(){return m},c:function(){return c},g:function(){return d},h:function(){return s}});var n=r(6540),a=(r(2729),r(5556)),l=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(r=l[n])>=0||(a[r]=e[r]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,l,i,s){const c={};l&&(c.backgroundColor=l,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=l,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),s&&(c.objectPosition=s);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=i(e,p);return n.createElement(n.Fragment,null,n.createElement(g,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:a,alt:l="",shouldLoad:s}=e,c=i(e,h);return n.createElement("img",o({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,alt:l}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,l=i(e,v);const s=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},l,t,{sizes:s,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+r,type:l,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:s})})),c):c};var E;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,r=i(e,w);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};k.displayName="Placeholder",k.propTypes={fallback:a.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],L=e=>e.replace(/\n/g,""),O=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?l().string.apply(l(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:l().object.isRequired,alt:O},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let P,_;const R=function(e){let{as:t="div",image:a,style:l,backgroundColor:c,className:m,class:d,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,j);const{width:v,height:y,layout:b}=a,E=u(v,y,b),{style:w,className:k}=E,x=i(E,T),N=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(m=d);const L=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((()=>{P||(P=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S);if(_&&I.has(S))return;let t,n;return P.then((e=>{let{renderImageToString:r,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(S),image:a},h)),I.has(S)||(t=requestAnimationFrame((()=>{N.current&&(n=i(N.current,S,I,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{I.has(S)&&_&&(N.current.innerHTML=_(o({isLoading:I.has(S),isLoaded:I.has(S),image:a},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,n.createElement)(t,o({},x,{style:o({},w,l,{backgroundColor:c}),className:k+(m?" "+m:""),ref:N,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));M.propTypes=C,M.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function B(e){return function(t){let{src:r,__imageData:a,__error:l}=t,s=i(t,z);return l&&console.warn(l),a?n.createElement(e,o({image:a},s)):(console.warn("Image not loaded",r),null)}}const A=B((function(e){let{as:t="div",className:r,class:a,style:l,image:s,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:v,objectPosition:y}=e,b=i(e,N);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),g=o({objectFit:v,objectPosition:y,backgroundColor:h},g);const{width:E,height:w,layout:O,images:C,placeholder:j,backgroundColor:T}=s,I=u(E,w,O),{style:P,className:_}=I,R=i(I,S),M={fallback:void 0,sources:[]};return C.fallback&&(M.fallback=o({},C.fallback,{srcSet:C.fallback.srcSet?L(C.fallback.srcSet):void 0})),C.sources&&(M.sources=C.sources.map((e=>o({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,o({},R,{style:o({},P,l,{backgroundColor:h}),className:_+(r?" "+r:"")}),n.createElement(f,{layout:O,width:E,height:w},n.createElement(k,o({},d(j,!1,O,E,w,T,v,y))),n.createElement(x,o({"data-gatsby-image-ssr":"",className:p},b,m("eager"===c,!1,M,c,g)))))})),q=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:O,width:q,height:q,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const G=B(M);G.displayName="StaticImage",G.propTypes=F},2759:function(e,t,r){"use strict";r.d(t,{D:function(){return i}});var n=r(6540),a=r(6942),l=r.n(a),o=r(2532);const i=e=>{let{alt:t,image:r,className:a}=e;return n.createElement(o.G,{className:l()("CoverImage-module--coverImage--48126",a),image:(0,o.c)(r),alt:t})}},3353:function(e,t,r){"use strict";r.d(t,{Nb:function(){return b},PE:function(){return L},wn:function(){return O},G$:function(){return j},Q5:function(){return E}});var n=r(4506),a=r(6540),l=r(6942),o=r.n(l);const i={navigation:{displayNavigation:!1,toggleNavigation:()=>{}}},s=(0,a.createContext)(i);var c=r(4810),u=r(5556),m=r.n(u);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,o=void 0===l?24:l,i=p(e,["color","size"]);return a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));g.propTypes={color:m().string,size:m().oneOfType([m().string,m().number])},g.displayName="Menu";var f=g,h=r(50);const v=()=>(0,a.useContext)(h.D);const y=e=>{let{className:t}=e;const r=(()=>{const{colorScheme:e,setColorScheme:t}=v();return(0,a.useCallback)((()=>{t("dark"===e?"light":"dark")}),[e,t])})();return a.createElement("button",{className:o()("ThemeToggler-module--theme-toggler--596ca",t),title:"Toggles light & dark",onClick:r},a.createElement("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24"},a.createElement("mask",{id:"moon",className:"ThemeToggler-module--moon--30db8"},a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),a.createElement("circle",{cx:"40",cy:"8",r:"11",fill:"black"})),a.createElement("circle",{className:"ThemeToggler-module--sun--3041b",cx:"12",cy:"12",r:"11",mask:"url(#moon)"}),a.createElement("g",{className:"ThemeToggler-module--sun-beams--98fde"},a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))))},b=()=>a.createElement("svg",{fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true"},a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})),E=()=>a.createElement("svg",{fill:"currentColor",viewBox:"0 0 19 22","aria-hidden":"true"},a.createElement("path",{d:"M16 20v-6h2v8H0v-8h2v6h14Z"}),a.createElement("path",{d:"m12.72 0-1.57 1.17L17 9.05l1.57-1.18L12.72 0ZM4 18h10v-2H4v2Zm11.4-7.08L7.86 4.64l1.25-1.5 7.54 6.28-1.25 1.5Zm-10-1.91 8.9 4.14.82-1.78-8.9-4.14L5.4 9Zm8.63 6.27-9.9-1.67.4-1.92 9.63 1.92-.13 1.67Z"}));const w=e=>{let{transparent:t}=e;const{navigation:{displayNavigation:r,toggleNavigation:n}}=(0,a.useContext)(s);return a.createElement("nav",{role:"navigation",className:o()("Navbar-module--navbar--fddbe",{"Navbar-module--transparent--f7747":!0===t,"Navbar-module--display-navigation--22afc":!0===r})},a.createElement("button",{type:"button",className:"Navbar-module--toggler--74c57",onClick:()=>n()},a.createElement(f,null)),a.createElement("ul",{className:"Navbar-module--link-list--faed9"},a.createElement("li",null,a.createElement(c.N_,{to:"/"},"Home")),a.createElement("li",null,a.createElement(c.N_,{to:"/blog"},"Blog")),a.createElement("li",null,a.createElement(c.N_,{to:"/open-source"},"Open Source")),a.createElement("li",null,a.createElement(c.N_,{to:"/about"},"About"))),a.createElement("ul",{className:"Navbar-module--icon-lists--76927"},a.createElement("li",null,a.createElement(y,null)),a.createElement("li",null,a.createElement("a",{href:"https://github.com/sharvit"},a.createElement(b,null)))))},k=e=>{let{title:t,path:r}=e;return a.createElement("li",{itemScope:!0,itemType:"http://data-vocabulary.org/Breadcrumb"},a.createElement(c.N_,{to:r,itemProp:"url"},a.createElement("span",{itemProp:"title"},t)))};const x=e=>{let{items:t}=e;return a.createElement("nav",{className:"Breadcrumbs-module--breadcrumbs--0d70e"},a.createElement("ol",{style:{margin:0}},t.map((e=>a.createElement(k,Object.assign({key:e.path},e))))))};var N=r(2759),S=r(4306);const L=e=>{let{coverImage:t,breadcrumbs:r,transparent:l,className:c,children:u}=e;const m=(0,S.gF)(),{0:d,1:p}=(0,a.useState)(i.navigation.displayNavigation),g=(0,a.useCallback)((()=>p(!d)),[p,d]);return a.createElement(s.Provider,{value:{navigation:{displayNavigation:d,toggleNavigation:g}}},a.createElement("header",{className:o()("Layout-module--layout-header--34fb2",{"Layout-module--transparent--e694b":l})},a.createElement(w,{transparent:l}),t&&a.createElement(N.D,Object.assign({},t,{className:o()("Layout-module--cover-image--e8402",t.className)})),r&&r.length>0&&a.createElement(x,{items:[{title:m.name,path:"/"}].concat((0,n.A)(r))})),a.createElement("main",{className:c},u))};const O=e=>{let{className:t,title:r,link:n,linkExternal:l,footer:i,children:s}=e;return a.createElement("section",{className:o()("Section-module--section--2dbfa",t)},r&&a.createElement("header",{className:"Section-module--section-header--b1c0b"},n?a.createElement(c.N_,{to:n},a.createElement("h2",null,r)):a.createElement("h2",null,r)),s,i&&a.createElement("footer",{className:"Section-module--section-footer--1d388"},n?l?a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},i):a.createElement(c.N_,{to:n},i):i))};var C=r(9105);const j=e=>{var t;let{title:r,description:l,meta:o=[]}=e;const{file:i}=(0,c.GR)("2545220355"),s=(0,C.gF)(),u=r?s.name+" | "+r:s.name+" | "+s.title,m=l||(null==i||null===(t=i.childMarkdownRemark)||void 0===t?void 0:t.rawMarkdownBody),d=[{name:"description",content:m},{property:"og:title",content:u},{property:"og:description",content:m},{property:"og:image",content:s.avatar},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:s.twitter},{name:"twitter:creator",content:s.twitter}].concat((0,n.A)(o));return a.createElement(a.Fragment,null,a.createElement("title",null,u),d.map((e=>{let{name:t,property:r,content:n}=e;return a.createElement("meta",{key:t||r,name:t,property:r,content:n})})))}},9105:function(e,t,r){"use strict";r.d(t,{LL:function(){return l},WZ:function(){return u},gF:function(){return s},Zh:function(){return a},iX:function(){return o},gB:function(){return c}});var n=r(4810);const a=()=>{var e;return(null===(e=(0,n.GR)("400598487").file)||void 0===e?void 0:e.childImageSharp)||void 0},l=()=>{var e;return(null===(e=(0,n.GR)("282316431").file)||void 0===e?void 0:e.childImageSharp)||void 0},o=()=>{var e,t;return(null===(e=(0,n.GR)("338777631").file)||void 0===e||null===(t=e.childMarkdownRemark)||void 0===t?void 0:t.html)||""};var i=r(6540);const s=()=>(e=>{var t,r;const{profile:n}=(null===(t=e.file)||void 0===t?void 0:t.childYaml)||{};return{name:(null==n?void 0:n.name)||"",nickname:(null==n?void 0:n.nickname)||"",title:(null==n?void 0:n.title)||"",website:(null==n?void 0:n.website)||"",phone:(null==n?void 0:n.phone)||"",email:(null==n?void 0:n.email)||"",github:(null==n?void 0:n.github)||"",twitter:(null==n?void 0:n.twitter)||"",stackoverflow:(null==n||null===(r=n.stackoverflow)||void 0===r?void 0:r.toString())||"",disqus:(null==n?void 0:n.disqus)||"",avatar:(null==n?void 0:n.avatar)||""}})((0,n.GR)("2375201890")),c=()=>{const e=s();return(0,i.useMemo)((()=>[{type:"github",href:"https://github.com/"+e.github,label:e.github},{type:"twitter",href:"https://www.twitter.com/"+e.twitter,label:e.twitter},{type:"stackoverflow",href:"https://stackoverflow.com/users/"+e.stackoverflow,label:e.nickname},{type:"email",href:"mailto:"+e.email,label:e.email}]),[e])},u=()=>(e=>{var t,r,n;const{cv:a}=(null===(t=e.file)||void 0===t?void 0:t.childYaml)||{};return{skills:(null==a||null===(r=a.skills)||void 0===r?void 0:r.trim().split(", "))||[],experiences:(null==a||null===(n=a.experiences)||void 0===n?void 0:n.map((e=>{var t,r;return{company:(null==e?void 0:e.company)||"",position:(null==e?void 0:e.position)||"",years:(null==e?void 0:e.years)||"",tags:(null==e||null===(t=e.tags)||void 0===t?void 0:t.trim().split(", "))||[],bulletPoints:(null==e||null===(r=e.bullet_points)||void 0===r?void 0:r.map((e=>(null==e?void 0:e.trim())||"")))||[]}})))||[]}})((0,n.GR)("3904166403"))},4306:function(e,t,r){"use strict";r.d(t,{cn:function(){return k},rd:function(){return E},LL:function(){return n.LL},gF:function(){return n.gF},Zh:function(){return n.Zh}});var n=r(9105),a=r(6540),l=r(3353),o=r(6942),i=r.n(o),s=r(5556),c=r.n(s);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,o=void 0===l?24:l,i=m(e,["color","size"]);return a.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));d.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},d.displayName="Twitter";var p=d;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=(0,a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,o=void 0===l?24:l,i=f(e,["color","size"]);return a.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));h.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},h.displayName="Mail";var v=h;const y=e=>{let{type:t,href:r,label:n}=e;const o=(e=>(0,a.useMemo)((()=>{switch(e){case"github":return l.Nb;case"twitter":return p;case"stackoverflow":return l.Q5;case"email":return v}}),[e]))(t),s=(e=>(0,a.useMemo)((()=>{switch(e){case"github":return"SocialLinks-module--github-link--a91f6";case"twitter":return"SocialLinks-module--twitter-link--50496";case"stackoverflow":return"SocialLinks-module--stack-overflow-link--21656";case"email":return"SocialLinks-module--email-link--5b25e"}}),[e]))(t);return a.createElement("a",{href:r,className:i()("SocialLinks-module--social-link--b709b",s)},a.createElement(o,null)," ",n)},b=()=>{const e=(0,n.gB)();return a.createElement("div",{className:"SocialLinks-module--social-links--a9b23"},e.map((e=>a.createElement(y,Object.assign({key:e.type},e)))))};const E=e=>{let{link:t="/about",linkExternal:r=!1,footer:o="#full_bio"}=e;const i=(0,n.gF)(),s=(0,n.iX)(),[c,u]=i.name.split(" ");return a.createElement(l.wn,{className:"ProfileSection-module--profile-section--b4927",link:t,linkExternal:r,footer:o},a.createElement("img",{className:"ProfileSection-module--avatar--48194",src:i.avatar,alt:i.name}),a.createElement("h1",null,c,a.createElement("br",null),u),a.createElement("h2",null,i.title),a.createElement(b,null),a.createElement("div",{className:"ProfileSection-module--short-bio--8b50c",dangerouslySetInnerHTML:{__html:s}}))};const w=e=>{let{skills:t}=e;return a.createElement("p",{className:"BioSection-module--skills--7ca8c"},t.map((e=>a.createElement("span",{key:e,className:"BioSection-module--skill--bc8f1"},e))))},k=()=>{const e=(0,n.WZ)();return a.createElement(l.wn,{className:"BioSection-module--bio-section--ecdd9"},a.createElement("div",{className:"BioSection-module--skills-section--c0604"},a.createElement("h3",null,"Main Skills"),a.createElement(w,{skills:e.skills})),a.createElement("hr",null),e.experiences.map((e=>a.createElement("div",{key:e.company,className:"BioSection-module--experience--9bebd"},a.createElement("h3",null,e.position),a.createElement("h4",null,e.company),a.createElement("p",{className:"BioSection-module--years--8a73f"},e.years),a.createElement("ul",null,e.bulletPoints.map((e=>a.createElement("li",{key:e},e)))),a.createElement(w,{skills:e.tags}),a.createElement("hr",null)))))}},55:function(e,t,r){"use strict";r.d(t,{CL:function(){return o},Ed:function(){return i},MY:function(){return a},nW:function(){return l},ws:function(){return n}});var n="page-module--fluid-section--99a21",a="page-module--page--77e66",l="page-module--page-about--a903a",o="page-module--page-fluid--1ab44",i="page-module--page-title-centered--0d998"},6942:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,l(r)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=bb1e41cb91a7bbc1b84e0bec4d7fc6ec1ef4a2f6-341fafdfe53083c82800.js.map