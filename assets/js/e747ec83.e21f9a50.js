"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2291],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={sidebar_position:1e3},c="Glossary",l={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"CRDTs",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/docs/glossary",editUrl:"https://github.com/automerge/docs/tree/main/docs/docs/glossary.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/docs/api"}},h=[{value:"CRDTs",id:"crdts",children:[],level:2},{value:"Eventual Consistency",id:"eventual-consistency",children:[],level:2},{value:"Documents",id:"documents",children:[],level:2},{value:"Types",id:"types",children:[],level:2},{value:"Changes",id:"changes",children:[],level:2},{value:"History",id:"history",children:[],level:2},{value:"Compaction",id:"compaction",children:[],level:2},{value:"Synchronization",id:"synchronization",children:[],level:2}],u={toc:h};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h2",{id:"crdts"},"CRDTs"),(0,r.kt)("p",null,"Automerge is a type of CRDT (Conflict-Free Replicated Datatype). A CRDT is a data structure that simplifies multi-user applications. We can use them to syncronize data between two devices in a way that both devices see the same application state.  In many systems, copies of some data need to be stored on multiple computers. Examples include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobile apps that store data on the local device, and that need to sync that data to other devices belonging to the same user (such as calendars, notes, contacts, or reminders);"),(0,r.kt)("li",{parentName:"ul"},"Distributed databases, which maintain multiple replicas of the data (in the same datacenter or in different locations) so that the system continues working correctly if some of the replicas are offline;"),(0,r.kt)("li",{parentName:"ul"},"Collaboration software, such as Google Docs, Trello, Figma, or many others, in which several users can concurrently make changes to the same file or data;"),(0,r.kt)("li",{parentName:"ul"},"Large-scale data storage and processing systems, which replicate data in order to achieve global scalability.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://crdt.tech/"},"Read more about CRDTs"))),(0,r.kt)("h2",{id:"eventual-consistency"},"Eventual Consistency"),(0,r.kt)("p",null,"Applications built with Automerge are assumed to be ",(0,r.kt)("em",{parentName:"p"},"eventually consistent.")," Users should expect to see the same application state as the other users they collaborate with, ",(0,r.kt)("strong",{parentName:"p"},"eventually"),". This is a radical shift from how most multi-user applications work today, which require systems to be highly available. All users in a multi-user application are typically required online in order to change or interact with the app. In contrast, an eventually consistent application will always allow the user to type into the application. When the users come back online, their computers can syncronize and update to the latest state."),(0,r.kt)("h2",{id:"documents"},"Documents"),(0,r.kt)("p",null,"A document is a collection of data that holds the current state of the application. A document in Automerge is represented as an object. Each document has a set of keys which can be used to hold variables that are one of the Automerge datatypes."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"All collaborative data structures conform to certain rules. Each variable in the document must be of one of the implemented types. Each type mmust conform to the rules of CRDTs. Automerge comes with a set of pre-defined types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", and so on."),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("p",null,"A change is a small set of metadata that describes an update to a data structure within the document. For example, a insertion of an element to a list is an example of a change. All changes are commutative, which means that the order in which they are applied does not matter. In other words, as long as all of the same set of changes have been applied, all replicas of that data structure should see the same state."),(0,r.kt)("p",null,"To do this, typically each change depends upon a previous change. Automerge creates a graph of changes that are modeled as a tree. This internal data structure is convienent as we are able to walk the tree efficiently to compute the application state at any given time. To learn more about how automerge works internally, see the ",(0,r.kt)("a",{parentName:"p",href:"how-it-works/backend"},"Internals")," section."),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"Each change that is made to a data structure builds upon other changes to create a shared, materialized view of a document. Each change is dependent on a previous change, which means that all replicas are able to construct a history of the data structure. This is a powerful propery in multi-user applications, and can be implemented in a way that is storage and space efficient."),(0,r.kt)("h2",{id:"compaction"},"Compaction"),(0,r.kt)("p",null,"Compaction is a way to serialize the current state of the document without the history. You might want to do this when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You don't want to replicate the entire history because of bandwidth or resource concerns on the target device. This might be useful in embedded systems or mobile phones."),(0,r.kt)("li",{parentName:"ul"},"A deleted element contains some sensitive information that you would like to be purged from the history.")),(0,r.kt)("p",null,"The downsides of compacting the history of a document include not being able to syncronize that compacted document with another document that doesn't have a common ancestor. "),(0,r.kt)("h2",{id:"synchronization"},"Synchronization"),(0,r.kt)("p",null,"When two or more  devices make changes to a document, and then decide to exchange those changes to come to a consistent state, we call that ",(0,r.kt)("em",{parentName:"p"},"synchronization"),". Syncronization can, in the most simple implementaiton, consist of sending the full list of changes in ithe history to all connected devices. To improve performance, devices may negotiate which changes are missing on either end and exchange only those changes which are missing, rather than the entire change history."))}p.isMDXComponent=!0}}]);