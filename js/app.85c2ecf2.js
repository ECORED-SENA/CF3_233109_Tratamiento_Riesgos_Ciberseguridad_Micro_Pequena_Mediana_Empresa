(function(e){function n(n){for(var o,i,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"78f6105b","chunk-0206bfa0":"1d4e54a0","chunk-0c047e41":"a7440d65","chunk-13a6037e":"41043c3c","chunk-18f95272":"9e9a082d","chunk-25b302c8":"ef3221dd","chunk-26fc7596":"67a40e05","chunk-2c06842c":"5add2e66","chunk-2d0c5615":"ddcab09b","chunk-2d0e96ec":"b9c6c2af","chunk-2d208d90":"43f5026c","chunk-2d21d0e2":"1e5e1018","chunk-2d22c123":"d5cf96fe","chunk-2d2747e2":"ea84c554","chunk-2e80bb9a":"c32e7c21","chunk-319206de":"d857055c","chunk-32334cb6":"c2e9b7d9","chunk-36769079":"c9a404d3","chunk-3c57cd7b":"65e33de9","chunk-4cdd78c0":"b62aa092","chunk-4f2d402a":"092df48c","chunk-515a8379":"2467f514","chunk-55d286b8":"1239402c","chunk-59974754":"e361b5e2","chunk-60cbc06b":"b2196aad","chunk-659152b8":"04e78bde","chunk-6e1e538a":"50fab1ff","chunk-766a929b":"d8693cf1","chunk-bf959c5a":"77bfa9c4","chunk-c796899c":"55e06d6e","chunk-e8a7823a":"89a37adc","chunk-f2df7d2c":"15f68cbd","chunk-fde47172":"b2b8aad2",comple:"00ad55f0",creditos:"1395c7af",glosario:"9755114c",intro:"910268c2",referencias:"de420829",sintesis:"568483a6",tema1:"b17267d9",tema2:"8c3e65db",tema3:"9b42287a"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1,tema2:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"d1c45cdd","chunk-55d286b8":"31d6cfe0","chunk-59974754":"218a3343","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"baf7d6d6","chunk-bf959c5a":"31d6cfe0","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"c534efb1",creditos:"6d92266f",glosario:"2ed0b68b",intro:"31d6cfe0",referencias:"f147dee8",sintesis:"31d6cfe0",tema1:"c45ca301",tema2:"c45ca301",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===t))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),a(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}t[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},5081:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-5.72f6c1f4.png"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),k=(a("a3a0"),{global:{componenteFormativo:"Estrategias para el endurecimiento de la ciberseguridad",descripcionCurso:"El componente aborda los conceptos claves para la generación de estrategias en la mejora de los sistemas de computación referente a la seguridad de la información. Se describe el concepto de seguridad profunda, cómo se hace el diseño de controladores de puntos y técnicas específicas de seguridad para la mejora de la infraestructura de una red de datos.",imagenBannerPrincipal:a("65fa"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")},{clases:["banner-principal-decorativo-3","d-none","d-lg-block"],imagen:a("7d72")},{clases:["banner-principal-decorativo-4"],imagen:a("f53d")},{clases:["banner-principal-decorativo-5"],imagen:a("5081")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Defensa en profundidad",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Capas",hash:"t_1_1"},{numero:"1.2",titulo:"Conceptos",hash:"t_1_2"},{numero:"1.3",titulo:"Características",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Diseño de controles",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Tipos",hash:"t_2_1"},{numero:"2.2",titulo:"Características",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Endurecimiento del servicio",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Características",hash:"t_3_1"},{numero:"3.2",titulo:"Marcos y técnicas de endurecimiento",hash:"t_3_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/233109_CF03_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar HTML",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Defensa en profundidad ",referencia:"Hadlington, L. (2017). Human factors in cybersecurity; examining the link between Internet addiction, impulsivity, attitudes towards cybersecurity, and risky cybersecurity behaviours. Heliyon, 3(7), 1-18.",tipo:"Artículo",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_c3640829408444539879ceeb75d871ba"},{tema:"Defensa en profundidad ",referencia:"Rios Insua, D., Couce-Vieira, A., Rubio, J., Pieters, W., Labunets, K., & G Rasines, D. (2021). An Adversarial Risk Analysis Framework for Cybersecurity. Risk Analysis, 41(1), 16-36.",tipo:"Artículo",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_1111_risa_13331"}],glosario:[{termino:"AWS",significado:"Nube de Amazon."},{termino:"AZURE",significado:"Nube de Microsoft."},{termino:"DOS",significado:"Ataque de negación de servicio."},{termino:"SCI",significado:"Sistema de control interno."},{termino:"SCD",significado:"Sistema de control distribuido."},{termino:"ACL",significado:"Listas de control de acceso."},{termino:"AAA",significado:"Autenticación, autorización y contabilidad."},{termino:"IDS",significado:"Sistemas de detección de intrusos."},{termino:"Sistemas ERP",significado:"Estaciones de trabajo de usuarios finales."},{termino:"PLC",significado:"Controlador lógico programable."},{termino:"DNS",significado:"Protocolo de sistema de nombres de dominio."},{termino:"DHCP",significado:"Protocolo de configuración dinámica de host."},{termino:"UI",significado:"Interfaz de usuario."},{termino:"<em>Dockerfile</em>",significado:"Archivo para configurar contenedores de Docker."}],referencias:[{referencia:"Ackerman, P. (2017). <em>Industrial cybersecurity: efficiently secure critical infrastructure systems.<em> Packt Publishing Ltd",link:""},{referencia:"Cohen, M., Hurley, K. & Newson, P. (2014). <em>Google compute engine: managing secure and scalable cloud computing.<em>",link:""},{referencia:"Kohnke, A., Shoemaker, D., & Sigler, K. E. (2016). <em>The complete guide to cybersecurity risks and controls.<em> CRC Press.",link:""},{referencia:"Li, H. (2009). <em>Introduction to windows azure.<em>  Apress.",link:""},{referencia:"Noonan, W. (2004). <em>Hardening Network Infrastructure: Bulletproof Your Systems Before You Are Hacked!.<em> Osborne.",link:""},{referencia:"Popek, G. J., & Goldberg, R. P. (1974). Formal requirements for virtualizable third generation <em>architectures. Communications of the ACM,<em> 17(7), 412-421.",link:"https://doi.org/10.1145/361011.361073 "},{referencia:"Portnoy, M. (2012). <em>Virtualization essentials<em> (Vol. 19). John Wiley & Sons.",link:""},{referencia:"Wittig, M. & Wittig, A. (2018). <em>Amazon web services in action.<em>  Manning.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes ",cargo:"Responsable de Línea de Producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Joaquín Fernando Sánchez",cargo:"Experto Temático",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Maribel Avellaneda Nieves",cargo:"Diseñadora Instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesora Pedagógica y Metodológica",centro:"Centro de diseño y Metrología - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Correctora de Estilo",centro:"Centro de diseño y Metrología - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Francisco José Lizcano Reyes",cargo:"Desarrollador Fullstack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Juan Daniel Polanco Muñoz",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad Didáctica",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Ricardo Mutis",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=k;var v=a("9224");o["a"].prototype.$package=v,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"65fa":function(e,n,a){e.exports=a.p+"img/banner-principal.79f1532b.png"},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.3a26911a.svg"},"7d72":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.3a26911a.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.d4b129d5.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.aa8b18cb.png"},f53d:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-4.232af4a1.svg"}});
//# sourceMappingURL=app.85c2ecf2.js.map