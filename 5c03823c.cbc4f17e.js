(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=u(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:a},l),{},{components:t})):r.a.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},115:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/dotnet5_platform-7110e6aa8774d81f843f411b042b21ff.png"},82:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),o=(t(0),t(107)),i={title:"Introducci\xf3n a .NET",sidebar_label:"Introducci\xf3n a .NET",slug:"/apuntes/introduccion/introduccion-net"},c={unversionedId:"clases/01-introduccion/00-introduccion-net",id:"clases/01-introduccion/00-introduccion-net",isDocsHomePage:!1,title:"Introducci\xf3n a .NET",description:"En esta asignatura haremos uso de la plataforma de desarrollo .NET y del lenguaje de programaci\xf3n C# para entender conceptos y pr\xe1cticas que son comunes a muchas otras herramientas que se utilizan al desarrollar software.",source:"@site/docs\\clases\\01-introduccion\\00-introduccion-net.md",slug:"/apuntes/introduccion/introduccion-net",permalink:"/utn-prog-ii/docs/apuntes/introduccion/introduccion-net",version:"current",sidebar_label:"Introducci\xf3n a .NET",sidebar:"Clases",previous:{title:"Antes de empezar",permalink:"/utn-prog-ii/docs/apuntes/cuestionarios"},next:{title:"Introducci\xf3n a C#",permalink:"/utn-prog-ii/docs/apuntes/introduccion/introduccion-c-sharp"}},s=[{value:"Caracter\xedsticas de .NET",id:"caracter\xedsticas-de-net",children:[{value:"Multi-plataforma",id:"multi-plataforma",children:[]},{value:"Open Source",id:"open-source",children:[]},{value:"Multi-lenguaje",id:"multi-lenguaje",children:[]}]},{value:"Componentes de .NET",id:"componentes-de-net",children:[]},{value:"Common Type System",id:"common-type-system",children:[{value:"Tipos de valor y tipos de referencia",id:"tipos-de-valor-y-tipos-de-referencia",children:[]},{value:"Categor\xedas de tipos",id:"categor\xedas-de-tipos",children:[]}]}],l={toc:s};function u(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"En esta asignatura haremos uso de la plataforma de desarrollo .NET y del lenguaje de programaci\xf3n C# para entender conceptos y pr\xe1cticas que son comunes a muchas otras herramientas que se utilizan al desarrollar software. "),Object(o.b)("p",null,".NET (",Object(o.b)("em",{parentName:"p"},"pronunciado como \u201cdot net\u201d"),") es una plataforma gratuita y de c\xf3digo abierto que nos provee una serie de herramientas y programas para construir f\xe1cilmente una gran variedad de software, as\xed como el entorno necesario para ejecutarlo sobre distintas arquitecturas y sistemas operativos. "),Object(o.b)("h2",{id:"caracter\xedsticas-de-net"},"Caracter\xedsticas de .NET"),Object(o.b)("p",null,"En esta secci\xf3n se apuntar\xe1 a introducir las principales caracter\xedsticas de la plataforma para que puedan alcanzar un entendimiento general sobre las herramientas que utilizaremos durante la cursada."),Object(o.b)("h3",{id:"multi-plataforma"},"Multi-plataforma"),Object(o.b)("p",null,"Existi\xf3 una \xe9poca donde esta plataforma s\xf3lo nos permit\xeda trabajar para Windows, pero esos tiempos quedaron muy atr\xe1s. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola tambi\xe9n en Linux y macOS. "),Object(o.b)("h3",{id:"open-source"},"Open Source"),Object(o.b)("p",null,"El ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/dotnet"}),"c\xf3digo fuente de .NET")," es p\xfablico y es mantenido por miles de desarrolladores y compa\xf1ias. Es soportado por ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://dotnetfoundation.org/"}),".NET foundation"),", una organizaci\xf3n sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboraci\xf3n alrededor del ecosistema de .NET."),Object(o.b)("h3",{id:"multi-lenguaje"},"Multi-lenguaje"),Object(o.b)("p",null,".NET admite varios lenguajes de programaci\xf3n, los cuales se pueden utilizar para programar sobre la plataforma:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"C#")," \u2192 Lenguaje orientado a objetos con una sintaxis similar a C y JAVA."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"F#")," \u2192  Lenguaje orientado principalmente a la programaci\xf3n funcional, de sintaxis liviana."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Visual Basic")," \u2192 La sintaxis de este lenguaje es la que m\xe1s se asemeja al lenguaje humano (ingl\xe9s), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. "),Object(o.b)("h2",{id:"componentes-de-net"},"Componentes de .NET"),Object(o.b)("p",null,Object(o.b)("img",{alt:".NET Platform",src:t(115).default})),Object(o.b)("h4",{id:"runtime"},"Runtime"),Object(o.b)("p",null,"Un runtime (entorno de ejecuci\xf3n, en espa\xf1ol) es un programa encargado de ejecutar y administrar "),Object(o.b)("h4",{id:"base-class-library"},"Base Class Library"),Object(o.b)("p",null,"Cuando trabajamos con .NET contamos con"),Object(o.b)("h4",{id:"frameworks"},"Frameworks"),Object(o.b)("h4",{id:"herramientas"},"Herramientas"),Object(o.b)("p",null,"Lo que hace a una plataforma de desarrollo es que nos otorga todas las herramientas necesarias para llevar el dise\xf1o de un sistema a su implementaci\xf3n en la realidad. "),Object(o.b)("p",null,"Adem\xe1s de las antes mencionadas, .NET integra las siguientes herramientas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/"}),".NET CLI"))," \u2192 Una interfaz de l\xednea de comandos que nos provee una serie de instrucciones de consola que nos permitir\xe1n desarrollar, construir, ejecutar y p\xfablicar aplicaciones construidas con .NET. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Compiladores")," para los lenguajes soportados."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MSBuild")," \u2192 Un motor para cargar y construir nuestras aplicaciones."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.nuget.org/"}),"NuGet"))," \u2192 Un administrador de paquetes desde donde podremos incorporar distintas librer\xedas a nuestros proyectos, muchas de ellas desarrolladas por la comunidad.")),Object(o.b)("h2",{id:"common-type-system"},"Common Type System"),Object(o.b)("p",null,"El Common Type System (CTS) define un conjunto de tipos de datos com\xfan a todos los lenguajes soportados por .NET. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Establece un marco de herramientas que habilita la ejecuci\xf3n de los distintos lenguajes de la plataforma. "),Object(o.b)("li",{parentName:"ul"},"Provee un modelo orientado a objetos. "),Object(o.b)("li",{parentName:"ul"},"Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos."),Object(o.b)("li",{parentName:"ul"},"Provee una biblioteca que contiene los tipos primitivos b\xe1sicos (Boolean, Int32, Byte, Char, etc). "),Object(o.b)("li",{parentName:"ul"},"Define tipos de dato en dos categor\xedas: de valor y de referencia.")),Object(o.b)("h3",{id:"tipos-de-valor-y-tipos-de-referencia"},"Tipos de valor y tipos de referencia"),Object(o.b)("p",null,"Los ",Object(o.b)("strong",{parentName:"p"},"tipos de valor")," son tipos de dato representados por su valor real. Si son asignados a una variable, esa variable obtendr\xe1 una nueva copia del valor. "),Object(o.b)("p",null,"Los ",Object(o.b)("strong",{parentName:"p"},"tipos de referencia"),", al contrario, son tipos de dato representados por una referencia que apunta a un sector de memoria donde se encuentra el valor real. Si son asignados a una variable, esa variable almacenar\xe1 la referencia y apuntar\xe1 al valor original. No se realiza ninguna copia del valor.\nLa referencia se almacena en "),Object(o.b)("h3",{id:"categor\xedas-de-tipos"},"Categor\xedas de tipos"),Object(o.b)("p",null,".NET define cinco categor\xedas de tipos de datos."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Categor\xeda"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Valor/Referencia"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Clases")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de referencia"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Estructuras")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de valor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Enumerados")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de valor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Interfaces")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de valor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Delegados")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tipo de referencia"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(o.b)("p",null,"Entraremos en el detalle de cada una de estas categor\xedas a lo largo de la cursada. "))}u.isMDXComponent=!0}}]);