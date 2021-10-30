"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={id:"installation",title:"Installation"},p=void 0,o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Modern Applications",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/PptxGenJS/docs/installation",tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1632882271,formattedLastUpdatedAt:"9/28/2021",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Quick Start Guide",permalink:"/PptxGenJS/docs/quick-start"},next:{title:"Integration",permalink:"/PptxGenJS/docs/integration"}},c=[{value:"Modern Applications",id:"modern-applications",children:[{value:"Install with NPM",id:"install-with-npm",children:[]},{value:"Install with Yarn",id:"install-with-yarn",children:[]},{value:"Additional Builds",id:"additional-builds",children:[]}]},{value:"Browser-Based Applications",id:"browser-based-applications",children:[{value:"Using CDN",id:"using-cdn",children:[]},{value:"Download",id:"download",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"modern-applications"},"Modern Applications"),(0,i.kt)("h3",{id:"install-with-npm"},"Install with ",(0,i.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/pptxgenjs"},"NPM")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pptxgenjs --save\n")),(0,i.kt)("h3",{id:"install-with-yarn"},"Install with Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add pptxgenjs\n")),(0,i.kt)("h3",{id:"additional-builds"},"Additional Builds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CommonJS: ",(0,i.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.cjs.js")),(0,i.kt)("li",{parentName:"ul"},"ES Module: ",(0,i.kt)("inlineCode",{parentName:"li"},"dist/pptxgen.es.js"))),(0,i.kt)("h2",{id:"browser-based-applications"},"Browser-Based Applications"),(0,i.kt)("h3",{id:"using-cdn"},"Using CDN"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/pptxgenjs"},"jsDelivr Home")),(0,i.kt)("p",null,"Bundle: Modern Browsers and IE11"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.8.0/dist/pptxgen.bundle.js"><\/script>\n')),(0,i.kt)("p",null,"Min files: Modern Browsers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.8.0/libs/jszip.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.8.0/dist/pptxgen.min.js"><\/script>\n')),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/releases/latest"},"GitHub Latest Release")),(0,i.kt)("p",null,"Bundle: Modern Browsers and IE11"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/dist/pptxgen.bundle.js"><\/script>\n')),(0,i.kt)("p",null,"Min files: Modern Browsers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/libs/jszip.min.js"><\/script>\n<script src="PptxGenJS/dist/pptxgen.min.js"><\/script>\n')))}u.isMDXComponent=!0}}]);