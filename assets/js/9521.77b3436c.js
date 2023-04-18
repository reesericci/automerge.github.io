/*! For license information please see 9521.77b3436c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9521],{5999:function(e,n,t){t.d(n,{Z:function(){return s},I:function(){return l}});var r=t(7294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(7529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return i(c({message:e.message,id:e.id}),n)}function s(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:n,id:t}),r)}},9935:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},8143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},8084:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=t(2263),o=t(9935);function u(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=u()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},2389:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o=t(9913);function u(){return(0,r.useContext)(o._)}},8408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.gA=n.zh=n._r=void 0;var r=t(655),o=t(8143),u=(0,r.__importStar)(t(8084)),i=t(8408),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},907:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},Jo:function(){return r.Jo},_r:function(){return r._r},gA:function(){return r.gA},gB:function(){return r.gB},yW:function(){return r.yW},zh:function(){return r.zh},zu:function(){return r.zu}});var r=t(6730)},9521:function(e,n,t){t.d(n,{pl:function(){return Ee},zF:function(){return U},HX:function(){return g},PO:function(){return $},L5:function(){return se},Cv:function(){return oe},Cn:function(){return ne},OC:function(){return Ie},kM:function(){return ge},WA:function(){return l},os:function(){return m},lx:function(){return pe},Fx:function(){return Ne},Mg:function(){return b},_f:function(){return s},PZ:function(){return Le},bc:function(){return p},MA:function(){return xe},l5:function(){return d},nT:function(){return Pe},uR:function(){return M},J:function(){return ve},Rb:function(){return Oe},be:function(){return _e},SL:function(){return k},g8:function(){return re},c2:function(){return L},D9:function(){return R},RF:function(){return He},o5:function(){return Fe},DA:function(){return je},Si:function(){return De},LU:function(){return o},pe:function(){return w}});var r=t(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(6775);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,l=a===i?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function m(e,n){return"docs-"+e+"-"+n}var h=t(907),y=!!h._r,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(7294),P=["zero","one","two","few","many","other"];function _(e){return P.filter((function(n){return e.includes(n)}))}var S={locale:"en",pluralForms:_(["one","other"]),select:function(e){return 1===e?"one":"other"}};function x(){var e=(0,r.Z)().i18n.currentLocale;return(0,E.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),S;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:_(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),S}var n,t}),[e])}function L(){var e=x();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}var O="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function C(e){var n=(0,E.useRef)(e);return O((function(){n.current=e}),[e]),(0,E.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function R(e){var n=(0,E.useRef)();return O((function(){n.current=e})),n.current}function k(e){var n=(0,f.TH)(),t=R(n),r=C(e);(0,E.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var D=t(3366),A=t(412),j=["collapsed"],T=["lazy"],I="ease-in-out";function M(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var V={display:"none",overflow:"hidden",height:"0px"},H={display:"block",overflow:"visible",height:"auto"};function F(e,n){var t=n?V:H;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function N(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:I),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return F(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=V.height,u.style.overflow=V.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function z(e){if(!A.Z.canUseDOM)return e?V:H}function B(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,E.useRef)(null);return N({collapsibleRef:l,collapsed:r,animation:u}),E.createElement(t,{ref:l,style:c?void 0:z(r),onTransitionEnd:function(e){"height"===e.propertyName&&(F(l.current,r),null==i||i(r))},className:a},o)}function Z(e){var n=e.collapsed,t=(0,D.Z)(e,j),r=(0,E.useState)(!n),o=r[0],u=r[1];(0,E.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,E.useState)(n),a=i[0],c=i[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(B,Object.assign({},t,{collapsed:a})):null}function U(e){var n=e.lazy,t=(0,D.Z)(e,T),r=n?Z:B;return E.createElement(r,Object.assign({},t))}var W=t(2389),q=t(6010),J="details_Q743",X="isBrowser_rWTL",G="collapsibleContent_K5uX",Y=["summary","children"];function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function Q(e,n){return!!e&&(e===n||Q(e.parentElement,n))}var $=function(e){var n,t=e.summary,r=e.children,o=(0,D.Z)(e,Y),u=(0,W.Z)(),i=(0,E.useRef)(null),a=M({initialState:!o.open}),c=a.collapsed,l=a.setCollapsed,s=(0,E.useState)(o.open),f=s[0],d=s[1];return E.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,q.Z)(J,(n={},n[X]=u,n),o.className),onMouseDown:function(e){K(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;K(n)&&Q(n,i.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,E.createElement(U,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},E.createElement("div",{className:G},r)))};var ee=(0,E.createContext)(null);function ne(e){var n=e.children;return E.createElement(ee.Provider,{value:(0,E.useState)(null)},n)}function te(){var e=(0,E.useContext)(ee);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function re(){var e=te()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function oe(e){var n,t=e.component,r=e.props,o=te()[1],u=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var ue=function(e){return"docs-preferred-version-"+e},ie={save:function(e,n,t){l(ue(e),{persistence:n}).set(t)},read:function(e,n){return l(ue(e),{persistence:n}).get()},clear:function(e,n){l(ue(e),{persistence:n}).del()}};function ae(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ie.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ie.clear(e,t),{preferredVersionName:null})}(e)})),o}function ce(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,E.useEffect)((function(){i(ae({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){ie.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var le=(0,E.createContext)(null);function se(e){var n=e.children;return y?E.createElement(fe,null,n):E.createElement(E.Fragment,null,n)}function fe(e){var n=e.children,t=ce();return E.createElement(le.Provider,{value:t},n)}var de=t(9935);function ve(e){void 0===e&&(e=de.m);var n=(0,h.zh)(e),t=function(){var e=(0,E.useContext)(le);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}function pe(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var ge={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},me=l("docusaurus.announcement.dismiss"),he=l("docusaurus.announcement.id"),ye=function(){return"true"===me.get()},be=function(e){return me.set(String(e))},we=(0,E.createContext)(null),Ee=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,W.Z)(),t=(0,E.useState)((function(){return!!n&&ye()})),r=t[0],u=t[1];(0,E.useEffect)((function(){u(ye())}),[]);var i=(0,E.useCallback)((function(){be(!0),u(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=he.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;he.set(n),r&&be(!1),!r&&ye()||u(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return E.createElement(we.Provider,{value:t},n)},Pe=function(){var e=(0,E.useContext)(we);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function _e(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Se=t(5999),xe=function(){return(0,Se.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Le(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function Oe(e){!function(e){var n=(0,f.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Ce(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Ce(e.parentNode):n}function Re(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Ce(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Ce(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function ke(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var De=function(e){var n=(0,E.useRef)(void 0),t=ke();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=Re(a,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Ae(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Ae({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function je(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Ae({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Te=(0,E.createContext)(void 0);function Ie(e){var n,t=e.children;return E.createElement(Te.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Me(){var e=(0,E.useContext)(Te);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Ve=function(){return A.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function He(e,n){void 0===n&&(n=[]);var t=Me().scrollEventsEnabledRef,r=(0,E.useRef)(Ve()),o=C(e);(0,E.useEffect)((function(){var e=function(){if(t.current){var e=Ve();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function Fe(){var e,n,t,r=Me(),o=(e=(0,E.useRef)({elem:null,top:0}),n=(0,E.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,E.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,E.useMemo)((function(){return{save:n,restore:t}}),[t,n])),u=(0,E.useRef)(void 0),i=(0,E.useCallback)((function(e){o.save(e),r.disableScrollEvents(),u.current=function(){var e=o.restore().restored;if(u.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r,o]);return(0,E.useLayoutEffect)((function(){var e;null===(e=u.current)||void 0===e||e.call(u)})),{blockElementScrollPositionUntilNextRender:i}}function Ne(e,n){return void 0!==e&&void 0!==n&&new RegExp(e,"gi").test(n)}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},655:function(e,n,t){t.r(n),t.d(n,{__assign:function(){return u},__asyncDelegator:function(){return E},__asyncGenerator:function(){return w},__asyncValues:function(){return P},__await:function(){return b},__awaiter:function(){return s},__classPrivateFieldGet:function(){return O},__classPrivateFieldSet:function(){return C},__createBinding:function(){return d},__decorate:function(){return a},__exportStar:function(){return v},__extends:function(){return o},__generator:function(){return f},__importDefault:function(){return L},__importStar:function(){return x},__makeTemplateObject:function(){return _},__metadata:function(){return l},__param:function(){return c},__read:function(){return g},__rest:function(){return i},__spread:function(){return m},__spreadArray:function(){return y},__spreadArrays:function(){return h},__values:function(){return p}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,u=arguments.length,i=u<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(n,t,i):o(n,t))||i);return u>3&&i&&Object.defineProperty(n,t,i),i}function c(e,n){return function(t,r){n(t,r,e)}}function l(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function s(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function h(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var u=arguments[n],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){u.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,l):s(u[0][2],t)}catch(r){s(u[0][3],r)}var t}function c(e){a("next",e)}function l(e){a("throw",e)}function s(e,n){e(n),u.shift(),u.length&&a(u[0][0],u[0][1])}}function E(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function _(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var S=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function x(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return S(n,e),n}function L(e){return e&&e.__esModule?e:{default:e}}function O(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function C(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);