"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[4249],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3808:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var t=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],i={title:"Apuntes - Programaci\xf3n multi-hilo y concurrencia.",sidebar_label:"Concurrencia",slug:"/clases/concurrencia/apuntes/concurrencia",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},u=void 0,s={unversionedId:"clases/concurrencia/Apuntes/concurrencia",id:"clases/concurrencia/Apuntes/concurrencia",isDocsHomePage:!1,title:"Apuntes - Programaci\xf3n multi-hilo y concurrencia.",description:"\xbfQu\xe9 es concurrencia?",source:"@site/docs/clases/19-concurrencia/Apuntes/00-concurrencia.md",sourceDirName:"clases/19-concurrencia/Apuntes",slug:"/clases/concurrencia/apuntes/concurrencia",permalink:"/utn-prog-ii/docs/clases/concurrencia/apuntes/concurrencia",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1628370539,formattedLastUpdatedAt:"8/7/2021",sidebarPosition:0,frontMatter:{title:"Apuntes - Programaci\xf3n multi-hilo y concurrencia.",sidebar_label:"Concurrencia",slug:"/clases/concurrencia/apuntes/concurrencia",hide_table_of_contents:!1,hide_title:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"\xcdndice",permalink:"/utn-prog-ii/docs/concurrencia"},next:{title:"Programaci\xf3n multi-hilo",permalink:"/utn-prog-ii/docs/clases/concurrencia/apuntes/multihilo"}},l=[{value:"\xbfQu\xe9 es concurrencia?",id:"\xbfqu\xe9-es-concurrencia",children:[]}],p={toc:l};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\xbfqu\xe9-es-concurrencia"},"\xbfQu\xe9 es concurrencia?"),(0,c.kt)("p",null,"En programaci\xf3n hablamos de ",(0,c.kt)("strong",{parentName:"p"},"concurrencia")," cuando se ejecuta m\xe1s de una tarea al mismo tiempo. "),(0,c.kt)("p",null,"Esta habilidad es \xfatil cuando necesitamos que una aplicaci\xf3n haga alguna cosa ",(0,c.kt)("em",{parentName:"p"},"mientras")," est\xe1 trabajando en algo m\xe1s.  "),(0,c.kt)("p",null,"La concurrencia es un aspecto clave de las aplicaciones modernas, permite que:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Los usuarios finales puedan interactuar con la interfaz de usuario de manera no-bloqueante. "),(0,c.kt)("li",{parentName:"ul"},"Un servidor pueda atender varias peticiones en simult\xe1neo y no afectar los tiempos de respuesta ante periodos de alta demanda. "),(0,c.kt)("li",{parentName:"ul"},"Realizar tareas de computo complejas de manera m\xe1s r\xe1pida y haciendo un uso m\xe1s eficaz los recursos de la computadora. ")),(0,c.kt)("p",null,"La ",(0,c.kt)("strong",{parentName:"p"},"programaci\xf3n multi-hilo <",(0,c.kt)("em",{parentName:"strong"},"multithreaded programming"),">")," y ",(0,c.kt)("strong",{parentName:"p"},"programaci\xf3n asincr\xf3nica <",(0,c.kt)("em",{parentName:"strong"},"asynchronous programming"),">")," son las dos formas de concurrencia m\xe1s comunes."))}m.isMDXComponent=!0}}]);