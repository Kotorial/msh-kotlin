"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6960],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(v,s(s({ref:n},c),{},{components:t})):o.createElement(v,s({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},s="Manage Docs Versions",i={unversionedId:"nodejs/manage-docs-versions",id:"nodejs/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/nodejs/manage-docs-versions.md",sourceDirName:"nodejs",slug:"/nodejs/manage-docs-versions",permalink:"/docusaurus/docs/nodejs/manage-docs-versions",draft:!1,editUrl:"https://milkcoke.github.io/docusaurus/docs/docs/nodejs/manage-docs-versions.md",tags:[],version:"current",lastUpdatedAt:1672988938,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 6\uc77c",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docusaurus/docs/category/nodejs"},next:{title:"Translate your site",permalink:"/docusaurus/docs/nodejs/translate-your-site"}},l={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],c={toc:d};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,r.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,r.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,r.kt)("p",null,"Release a version 1.0 of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run docusaurus docs:version 1.0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,r.kt)("p",null,"Your docs now have 2 versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,r.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,r.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,r.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docs Version Dropdown",src:t(9731).Z,width:"370",height:"302"})),(0,r.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,r.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},9731:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);