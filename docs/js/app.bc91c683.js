(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)s=i[u],r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad763791"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"31c5":function(e,t,n){e.exports=n.p+"img/1_cropped.ea2c4a0d.jpg"},4:function(e,t){},5:function(e,t){},5506:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5506"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("85f2"),r=n.n(a),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("h3",{staticClass:"m-2",class:[e.alive?"service_alive":"service_dead"]},[e._v("Auto Assessor")])]),n("loading",{attrs:{active:e.isLoading,"can-cancel":!1,"is-full-page":e.fullPage},on:{"update:active":function(t){e.isLoading=t}}}),e._m(0),n("div",{staticClass:"card m-4 flex-row flex-wrap"},[e._m(1),n("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0"},[n("img",{staticClass:"card-img",attrs:{src:e.demo.image,alt:"image not found"}}),n("button",{staticClass:"w-100 btn btn-primary",on:{click:function(t){return e.test_demo_image()}}},[e._v("Submit image as answer")])]),n("div",{staticClass:"card-block p-3 flex-col flex-fill col-md-4 col-lg-6"},[e._v("\n      Submit the image to see whether the answer is correct.\n      "),n("hr"),n("h5",[e._v("Expected answer:")]),e._v("\n        "+e._s(e.demo.template.answer)+"\n      "),e.demo.result?n("div",[n("h5",{staticClass:"mt-3"},[e._v("We found following words in your answer:")]),e._v("\n        "+e._s(e.demo.result)+"\n      ")]):e._e()])]),n("div",{staticClass:"card m-4 flex-row flex-wrap"},[e._m(2),n("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0"},[n("vue-base64-file-upload",{attrs:{"input-class":"","image-class":"card-img"}})],1)])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-5 ml-10 mr-10"},[n("h5",[e._v("Automatic checking of answer papers")]),e._v("\n    The Auto-assessor can automatically evaluate a student's answer paper through "),n("br"),n("b",[e._v("handwriting recognition")]),e._v(" and a dynamic knowledge base. \n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header w-100"},[n("h4",{staticClass:"m-0"},[e._v("Try it out!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header w-100"},[n("h4",{staticClass:"m-0"},[e._v("Upload your own answer")])])}],l=n("31c5"),c=n.n(l),u=n("9062"),d=n.n(u),f=(n("e40d"),n("ade4")),p=n.n(f),m={name:"app",components:{Loading:d.a,VueBase64FileUpload:p.a},data:function(){return{alive:!1,demo:{image:c.a,result:null,template:{question:"demo",answer:"History is a coherent account of the significant past events in the progress of human culture."}},isLoading:!1,fullPage:!0,endpoints:{heartbeat:"/heartbeat",assessImage:"/assessImage",addTemplate:"/addTemplate"}}},methods:{url:function(e){return"http://35.243.168.184:5000"+this.endpoints[e]},heartbeat:function(){this.$http.get(this.url("heartbeat")).then(function(e){this.alive=!0},function(e){this.alive=!1})},addTemplate:function(e){function t(e){console.log(e)}function n(e){console.log(e)}this.$http.post(this.url("addTemplate"),e).then(t,n)},test_image:function(e,t){var n=this;console.log("sending demo image.."),this.isLoading=!0,this.$image2base64(e).then(function(e){var a=e,r={question:t,image:a};n.$http.post(n.url("assessImage"),r).then(function(e){console.log(e),this.isLoading=!1,this.demo.result=e.body.matches.join(" ")},function(e){console.error(e),this.isLoading=!1,this.demo.result=null})}).catch(function(e){console.log(e),n.isLoading=!1,alert("sorry, something went wrong")})},test_demo_image:function(){this.addTemplate(this.demo.template),this.test_image(this.demo.image,this.demo.template.question)}}},h=m,v=(n("5c0b"),n("2877")),g=Object(v["a"])(h,s,i,!1,null,null,null),_=g.exports,b=n("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},y=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],x={name:"HelloWorld",props:{msg:String}},C=x,E=(n("a5e2"),Object(v["a"])(C,j,k,!1,null,"536251f0",null)),$=E.exports,O={name:"home",components:{HelloWorld:$}},T=O,L=Object(v["a"])(T,w,y,!1,null,null,null),P=L.exports;o["a"].use(b["a"]);var S=new b["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),A=n("2f62");o["a"].use(A["a"]);var I=new A["a"].Store({state:{},mutations:{},actions:{}}),M=(n("1157"),n("f0bd"),n("4989"),n("28dd")),W=n("07e8"),q=n.n(W);o["a"].use(M["a"]),o["a"].config.productionTip=!1,r()(o["a"].prototype,"$image2base64",{value:q.a}),new o["a"]({router:S,store:I,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},a5e2:function(e,t,n){"use strict";var a=n("fc3d"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fc3d:function(e,t,n){}});
//# sourceMappingURL=app.bc91c683.js.map