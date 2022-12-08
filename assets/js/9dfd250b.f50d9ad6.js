"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7038:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Welcome to Automerge",l={unversionedId:"hello",id:"hello",isDocsHomePage:!1,title:"Welcome to Automerge",description:"Automerge is a library of data structures for building collaborative",source:"@site/docs/hello.md",sourceDirName:".",slug:"/hello",permalink:"/docs/hello",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/hello.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"5-Minute Quick Start",permalink:"/docs/quickstart"}},s=[{value:"Design principles",id:"design-principles",children:[],level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-automerge"},"Welcome to Automerge"),(0,n.kt)("p",null,"Automerge is a library of data structures for building collaborative\napplications. You can have a copy of the application state locally on several\ndevices which may belong to the same user, or to different users. Each user can\nindependently update the application state on their local device, even while\noffline, and save the state to local disk. This is similar to Git, which allows\nyou to edit files and commit changes offline."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When a network connection is available, Automerge figures out which changes need\nto be synced from one device to another, and brings them into the same state. "),(0,n.kt)("p",{parentName:"li"},"  (Similar to Git, which lets you push your own changes, and pull changes from other developers, when you are online.)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the state was changed concurrently on different devices, Automerge automatically merges the changes together cleanly, so that everybody ends up in the same state, and no changes are lost. "),(0,n.kt)("p",{parentName:"li"},"(Git only supports merging of plain text; Automerge allows complex file formats to be merged automatically.)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Automerge keeps track of the changes you make to the state, so that you can view old versions, compare versions, create branches, and choose when to merge them. "),(0,n.kt)("p",{parentName:"li"},"(Similar to Git, which allows diffing, branching, merging, and pull request workflows.)"))),(0,n.kt)("h2",{id:"design-principles"},"Design principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Network-agnostic"),". Automerge is a pure data structure library that does not care about what\nkind of network you use. It works with any connection-oriented network protocol, which could be\nclient/server (e.g. WebSocket), peer-to-peer (e.g. WebRTC), or entirely local (e.g. Bluetooth).\nBindings to particular networking technologies are handled by separate libraries;\nsee the page on ",(0,n.kt)("a",{parentName:"li",href:"/docs/cookbook/real-time/"},"real-time collaboration")," for examples.\nIt also works with unidirectional messaging: you can send an Automerge file as email attachment,\nor on a USB drive in the mail, and the recipient will be able to merge it with their version."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Immutable state"),". An Automerge object is an immutable snapshot of the application state at one\npoint in time. Whenever you make a change, or merge in a change that came from the network, you\nget back a new state object reflecting that change. This fact makes Automerge compatible with the\nfunctional reactive programming style of ",(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org"},"React")," and\n",(0,n.kt)("a",{parentName:"li",href:"http://redux.js.org/"},"Redux"),", for example."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatic merging"),". Automerge is a ",(0,n.kt)("em",{parentName:"li"},"Conflict-Free Replicated Data Type")," (",(0,n.kt)("a",{parentName:"li",href:"https://crdt.tech/"},"CRDT"),"),\nwhich allows concurrent changes on different devices to be merged automatically without requiring any\ncentral server. The conflict resolution approach is described\n",(0,n.kt)("a",{parentName:"li",href:"/docs/cookbook/conflicts/"},"in the documentation"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Portable"),". The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/automerge/automerge"},"JavaScript implementation")," of\nAutomerge is compatible with Node.js, ",(0,n.kt)("a",{parentName:"li",href:"https://electron.atom.io/"},"Electron"),", and modern browsers.\nThe ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/automerge/automerge-rs"},"Rust implementation")," compiles to WebAssembly\nfor use in browsers, and it exposes a C API through which it can be used on iOS and other\nplatforms without requiring a JavaScript engine. For TypeScript users, Automerge comes with\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/automerge/automerge/blob/main/@types/automerge/index.d.ts"},"type definitions"),"\nthat allow you to use Automerge in a type-safe way.")),(0,n.kt)("p",null,"Automerge is designed for creating ",(0,n.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/local-first/"},"local-first software"),",\ni.e. software that treats a user's local copy of their data (on their own device) as primary, rather\nthan centralising data in a cloud service. The local-first approach enables offline working while\nstill allowing several users to collaborate in real-time and sync their data across multiple\ndevices. By reducing the dependency on cloud services (which may disappear if someone stops paying\nfor the servers), local-first software can have greater longevity, stronger privacy, and better\nperformance, and it gives users more control over their data.\nThe ",(0,n.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/local-first/"},"essay on local-first software")," goes into more\ndetail on the philosophy behind Automerge, and the pros and cons of this approach."),(0,n.kt)("p",null,"However, if you want to use Automerge with a centralised server, that works fine too! You still get\nuseful benefits, such as allowing several clients to concurrently update the data, easy sync between\nclients and server, being able to inspect the change history of your app's data, and support for\nbranching and merging workflows."))}p.isMDXComponent=!0}}]);