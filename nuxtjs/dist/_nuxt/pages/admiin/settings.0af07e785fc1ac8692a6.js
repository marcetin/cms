webpackJsonp([2],{DkyE:function(t,e,s){"use strict";var a=s("mtWM"),i=s.n(a),n=s("4swq");e.a={data:function(){return{column:[{}],activeTab:0,loading:!1,list:[],headerProps:{}}},mounted:function(){n.a.auth(this);var t=this;this.loading=!0,i.a.post(this.$store.state.apiPath+"/form-generator/api",{key:"listallforms",formType:""}).then(function(e){t.list=e.data,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},beforeMount:function(){this.headerProps={tabs:[{icon:"settings",label:"Form Generator"},{icon:"settings",label:"Settings 1"},{icon:"settings",label:"Settings 2"}],title:"Settings"},this.$store.commit("changeActiveNav","Settings");this.$store.commit("changeBreadcrumbs",[{label:"Settings",to:"/admiin/settings"}])}}},ZWpS:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-flex",{staticClass:"header light-green darken-1 white--text pt-4 mb-4",staticStyle:{position:"relative"}},[s("h3",{class:["display-1 mb-4 pt-3 ml-4",{"mb-5":!t.headerProps.tabs}]},[s("v-icon",{staticClass:"mr-2",attrs:{dark:"",large:""}},[t._v("settings")]),t._v("\n            "+t._s(t.headerProps.title)+" \n            "),t.headerProps.subtitle?s("small",{staticClass:"ml-1",staticStyle:{color:"#C5E1A5"}},[t._v("("+t._s(t.headerProps.subtitle)+")")]):t._e()],1),s("v-tabs",{staticClass:"mainTabs",attrs:{dark:"","next-icon":"arrow_forward","prev-icon":"arrow_back","show-arrows":"","slider-color":"yellow"}},t._l(t.headerProps.tabs,function(e,a){return s("v-tab",{key:a,on:{click:function(e){t.activeTab=a}}},[s("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.label)+"\n            ")],1)}))],1),s("div",{staticClass:"content"},t._l(t.headerProps.tabs,function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab==a,expression:"activeTab == ti"}],key:a},[0==a?s("div",[s("div",{staticClass:"px-5"},[s("v-layout",{attrs:{listing:"","py-2":"",row:"",th:""}},[s("v-flex",{attrs:{xs1:"","text-xs-center":""}},[t._v("no.")]),s("v-flex",{attrs:{xs7:""}},[t._v("Title")])],1),t._l(t.list,function(e,a){return s("v-layout",{key:a,attrs:{listing:"","py-2":"",row:""}},[s("v-flex",{attrs:{xs1:"","text-xs-center":""}},[t._v(t._s(a+1))]),s("v-flex",{attrs:{xs7:""}},["i"==e.Type?s("nuxt-link",{attrs:{to:"/admiin/generator/"+e.Id+"/"}},[t._v(t._s(e.Title))]):t._e(),"i"!=e.Type?s("nuxt-link",{attrs:{to:"/admiin/generator/"+e.Name+"/"}},[t._v(t._s(e.Title))]):t._e()],1)],1)})],2)]):t._e()])})),s("div",{staticClass:"floating-btn"},[s("nuxt-link",{attrs:{to:"/admiin/generator/addnew/"}},[s("v-btn",{attrs:{round:"",large:"",dark:"",color:"primary"}},[s("v-icon",{attrs:{left:""}},[t._v("add")]),t._v(" add new\n      ")],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},usCg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("DkyE"),i=s("ZWpS"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="pages/admiin/settings.vue",e.default=n.exports}});