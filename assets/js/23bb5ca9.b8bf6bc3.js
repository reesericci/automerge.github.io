"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4193],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:5},s="Text",l={unversionedId:"types/text",id:"types/text",isDocsHomePage:!1,title:"Text",description:"Automerge.Text provides support for collaborative text editing. Under the hood, text is",source:"@site/docs/types/text.md",sourceDirName:"types",slug:"/types/text",permalink:"/docs/docs/types/text",editUrl:"https://github.com/automerge/docs/tree/main/docs/docs/types/text.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/docs/docs/types/lists"},next:{title:"Observable",permalink:"/docs/docs/types/observable"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"Text"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.Text")," provides support for collaborative text editing. Under the hood, text is\nrepresented as a list of characters, which is edited by inserting or deleting individual characters.\nCompared to using a regular JavaScript array, ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.Text")," offers better performance."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Technically, text should be represented as a list of\n",(0,a.kt)("a",{parentName:"p",href:"http://www.unicode.org/reports/tr29/"},"Unicode ",(0,a.kt)("em",{parentName:"a"},"grapheme clusters")),'. What the user thinks of as a\n"character" may actually be a series of several Unicode code points, including accents,\ndiacritics, and other combining marks. A grapheme cluster is the smallest editable unit of text:\nthat is, the thing that gets deleted if you press the delete key once, or the thing that the\ncursor skips over if you press the right-arrow key once. Emoji make a good test case, since many\nemoji consist of a sequence of several Unicode code points (for example, the\n',(0,a.kt)("a",{parentName:"p",href:"http://www.unicode.org/reports/tr51/"},"skintone modifier")," is a combining mark).\nYou can create a Text object inside a change callback. Then you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"insertAt()")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAt()")," to insert and delete characters (same API as for list modifications, shown\n",(0,a.kt)("a",{parentName:"p",href:"#updating-a-document"},"above"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"newDoc = Automerge.change(currentDoc, doc => {\n  doc.text = new Automerge.Text()\n  doc.text.insertAt(0, 'h', 'e', 'l', 'l', 'o')\n  doc.text.deleteAt(0)\n  doc.text.insertAt(0, 'H')\n})\n")),(0,a.kt)("p",null,"To inspect a text object and render it, you can use the following methods (outside of a change\ncallback):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"newDoc.text.length // returns 5, the number of characters\nnewDoc.text.get(0) // returns 'H', the 0th character in the text\nnewDoc.text.toString() // returns 'Hello', the concatenation of all characters\nfor (let char of newDoc.text) console.log(char) // iterates over all characters\n")),(0,a.kt)("p",null,"To figure out which regions were inserted by which users, you can use the elementId. The ElementID gives is a string of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"${actorId}@${counter}"),". Here, actorId is the ID of the actor who inserted that character."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let elementId = newDoc.text.getElemId(index)\n// '2@369125d35a934292b6acb580e31f3613'\n")),(0,a.kt)("p",null,"Note that the actorId changes with each call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.init()"),", so if you want more persistent user-actorId relationships over the course of the text document, see the ",(0,a.kt)("a",{parentName:"p",href:"docs/cookbook/authentication"},"Authentication section in the Cookbook"),"."))}d.isMDXComponent=!0}}]);