webpackJsonp([7],{"CyD/":function(t,a,e){"use strict";var i=e("mtWM"),n=e.n(i),o=e("4swq");a.a={data:function(){return{mainmenu_drawer:!0,ww_600:!1,ww_1280:!1,mainMenu:[{icon:"dashboard",title:"Dashboard",to:"/admiin"},{icon:"pages",title:"Custom Pages",to:"/admiin/independents"}],loadingpage:!0}},methods:{logout:function(){this.loadingpage=!0;var t=this;n.a.get(this.$store.state.apiPath+"/logout-api").then(function(a){return localStorage.removeItem("session"),t.loadingpage=!1,t.$router.push({path:"/"}),!1}).catch(function(a){t.loadingpage=!1,console.log(a)})}},mounted:function(){o.a.auth(this),this.loadingpage=!1;var t=this;n.a.post(this.$store.state.apiPath+"/form-generator/api",{key:"listallforms",formType:"r"}).then(function(a){for(var e=0;e<a.data.length;e++)""===a.data[e].Parent&&t.mainMenu.push({icon:a.data[e].Icon,title:a.data[e].Title,to:"/admiin/"+a.data[e].Name+"/list/"});t.mainMenu.push({icon:"image",title:"Media manager",to:"/admiin/media"}),t.mainMenu.push({icon:"settings",title:"Settings",to:"/admiin/settings"})}).catch(function(t){console.log(t)})},beforeMount:function(){window.innerWidth>=1280&&(this.ww_1280=!0,this.mainmenu_drawer=!0),window.innerWidth<=600&&(this.ww_600=!0)}}},DLCH:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",[t.loadingpage?e("div",{staticClass:"loadingpage",style:"background-image: url("+t.$store.state.mediaPath+"/assets/images/main_loading.gif);"}):t._e(),e("v-app",[e("v-navigation-drawer",{class:["blue-grey","darken-1",{drawerDesktop:t.ww_1280}],attrs:{dark:"","mini-variant":!0,"mini-variant-width":"170",app:""},model:{value:t.mainmenu_drawer,callback:function(a){t.mainmenu_drawer=a},expression:"mainmenu_drawer"}},[e("a",{staticStyle:{color:"#fff",display:"table",width:"100%","margin-top":"30px","font-size":"18px","margin-left":"14px"},attrs:{href:"/"}},[t._v("Gophify")]),e("ul",{staticClass:"subheading menuleft mt-2"},t._l(t.mainMenu,function(a,i){return e("li",{key:i,on:{click:function(e){t.$store.commit("changeActiveNav",a.title)}}},[e("nuxt-link",{class:{active:t.$store.state.activeNav==a.title},attrs:{to:a.to}},[e("v-icon",{attrs:{small:""}},[t._v(t._s(a.icon))]),t._v(t._s(a.title))],1)],1)}))]),e("v-flex",{staticClass:"hidden-xs-only breadcrumbs light-green darken-3 pl-3 py-2"},[t.mainmenu_drawer?t._e():e("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.mainmenu_drawer=!0}}},[e("v-icon",{staticStyle:{color:"white!important","margin-right":"20px"}},[t._v("menu")]),t._v(" |     \n              ")],1),e("nuxt-link",{attrs:{to:"/admiin"}},[e("v-icon",{staticStyle:{"margin-bottom":"2px"},attrs:{small:"",dark:""}},[t._v("language")]),t._v(" Dashboard")],1),t._l(t.$store.state.breadcrumbs,function(a,i){return e("nuxt-link",{key:i,attrs:{to:a.to}},[e("v-icon",{attrs:{small:"",dark:""}},[t._v("keyboard_arrow_right")]),t._v("\n                  "+t._s(a.label))],1)}),e("div",{staticClass:"pr-3",staticStyle:{float:"right"}},[e("span",[t._v("Welcome, "+t._s(t.$store.state.session.firstname)+" "+t._s(t.$store.state.session.lastname))]),t._v("   "),e("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.logout()}}},[e("u",[t._v("(logout)")])])])],2),e("v-toolbar",{staticClass:"hidden-sm-and-up",attrs:{dense:"",dark:"",color:"light-green darken-3"}},[t.mainmenu_drawer?t._e():e("v-toolbar-side-icon",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.mainmenu_drawer=!0}}}),e("v-toolbar-title",{staticStyle:{"font-size":"14px"}},[t._v("Gophify")]),e("v-spacer"),e("v-menu",[e("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[e("v-icon",{attrs:{dark:""}},[t._v("account_circle")])],1),e("div",{staticClass:"px-2 py-1",staticStyle:{color:"#333","background-color":"white"}},[t._v("Welcome, "+t._s(t.$store.state.session.firstname)+" "+t._s(t.$store.state.session.lastname)),e("br"),e("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.logout()}}},[e("u",[t._v("(logout)")])])])],1)],1),e("nuxt")],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("CyD/"),n=e("DLCH"),o=e("VU/8")(i.a,n.a,!1,null,null,null);o.options.__file="layouts/default.vue",a.default=o.exports}});