(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c7a718cd"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}r[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"004b":function(t,e,a){"use strict";var n=a("2a57"),r=a.n(n);r.a},1:function(t,e){},"1fd7":function(t,e,a){t.exports=a.p+"img/Maths_cropped.b9838ff5.jpg"},2:function(t,e){},"2a57":function(t,e,a){},3:function(t,e){},"31c5":function(t,e,a){t.exports=a.p+"img/1_cropped.ea2c4a0d.jpg"},4:function(t,e){},5:function(t,e){},5506:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="5506"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("85f2"),r=a.n(n),o=(a("cadf"),a("551c"),a("f751"),a("097d"),a("a026")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("h3",{staticClass:"m-2",class:[t.alive?"service_alive":"service_dead"]},[t._v("Auto Check")]),t._m(0)]),a("loading",{attrs:{active:t.isLoading,"can-cancel":!1,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),t._m(1),a("div",{staticClass:"card m-4 flex-row flex-wrap"},[t._m(2),a("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0"},[a("img",{staticClass:"card-img",attrs:{src:t.demo.image_file,alt:"image not found"}}),a("button",{staticClass:"m-3 btn btn-primary",on:{click:function(e){return t.test(t.demo)}}},[t._v("Submit image as answer")])]),a("div",{staticClass:"card-block p-3 flex-col flex-fill col-md-4 col-lg-6"},[t._v("\n      Submit the image on the left to see whether the answer is correct.\n      "),a("hr"),a("h5",[t._v("Expected answer:")]),a("blockquote",[t._v(t._s(t.demo.template.answer))]),a("hr"),t.demo.result?a("result",{attrs:{result:t.demo.result}}):t._e()],1)]),a("div",{staticClass:"card m-4 flex-row flex-wrap"},[t._m(3),a("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0 border-right"},[a("vue-base64-file-upload",{attrs:{placeholder:"Choose file to upload","input-class":"w-auto m-3 border shadow-sm","image-class":"card-img"},on:{load:t.on_image_upload,file:t.on_image_select}}),a("button",{staticClass:"btn btn-primary w-auto m-2",on:{click:function(e){return t.test(t.uploaded)}}},[t._v("Submit")])],1),a("div",{staticClass:"card-block p-3 flex-col flex-fill col-md-4 col-lg-6"},[t._v("\n      Write the same answer as above on a piece "),a("br"),t._v("of paper (including some mistakes if you want to test) "),a("br"),t._v("and submit a photograph.\n      "),a("hr"),t.uploaded.result?a("result",{attrs:{result:t.uploaded.result}}):t._e()],1)]),a("div",{staticClass:"card m-4 flex-row flex-wrap"},[t._m(4),a("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0"},[a("img",{staticClass:"card-img",attrs:{src:t.math.image_file,alt:"image not found"}}),a("button",{staticClass:"m-3 btn btn-primary",on:{click:function(e){return t.test(t.math)}}},[t._v("Submit image")])]),a("div",{staticClass:"card-block p-3 flex-col flex-fill col-md-4 col-lg-6"},[t._v("\n      We have added support for recognizing math symbols too.\n      "),a("hr"),t.math.result?a("div",[a("h5",[t._v("detections:")]),a("blockquote",[t._v(t._s(t.math.result.detected_words))])]):t._e()]),a("h5",{staticClass:"card-divider-horizontal"},[t._v("OR")]),a("div",{staticClass:"card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0 border-right"},[a("vue-base64-file-upload",{attrs:{placeholder:"Choose file to upload","input-class":"w-auto m-3 border shadow-sm","image-class":"card-img"},on:{load:t.on_image_upload_math,file:t.on_image_select_math}}),a("button",{staticClass:"btn btn-primary w-auto m-2",on:{click:function(e){return t.test(t.math_upload)}}},[t._v("Submit")])],1),a("div",{staticClass:"card-block p-3 flex-col flex-fill col-md-4 col-lg-6"},[t._m(5),a("hr"),t.math_upload.result?a("div",[a("h5",[t._v("detections:")]),a("blockquote",[t._v(t._s(t.math_upload.result.detected_words))])]):t._e()])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav justify-content-center"},[n("img",{staticClass:"nav-item icons m-2",attrs:{src:a("9f89")}}),n("a",{staticClass:"m-2",staticStyle:{color:"white",cursor:"text"}},[t._v("parthjshah95@gmail.com")]),n("div",{staticClass:"bg-light",staticStyle:{height:"40px",width:"0.5px"}}),n("a",{staticClass:"m-2",staticStyle:{color:"white",cursor:"text"}},[t._v("nmabhi42@gmail.com")]),n("img",{staticClass:"nav-item icons m-2",attrs:{src:a("7cd7")}}),n("a",{staticClass:"m-2",staticStyle:{color:"white"}},[t._v("+91 8879501780")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-5 ml-10 mr-10"},[a("h5",[t._v("Automatic assessment of answer papers")]),t._v("\n    Auto-check can automatically evaluate a student's answer paper using "),a("br"),t._v(" machine learning, handwriting recognition and a dynamic knowledge base. \n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header w-100"},[a("h4",{staticClass:"m-0"},[t._v("Try it out!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header w-100"},[a("h4",{staticClass:"m-0"},[t._v("Upload your own answer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header w-100"},[a("h4",{staticClass:"m-0"},[t._v("Math")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",[t._v("Temporary limitation:")]),t._v(" Math api needs zoomed in, well cropped images to work well")])}],l=(a("28a5"),a("31c5")),c=a.n(l),u=a("1fd7"),m=a.n(u),d=a("9062"),h=a.n(d),p=(a("e40d"),a("ade4")),f=a.n(p),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"mt-3 text-muted"},[t._v("Raw detections:")]),a("blockquote",{staticClass:"text-muted"},[t._v(t._s(t.raw_detection))]),a("h5",{staticClass:"mt-3 result-match"},[t._v("Words matching with the expected answer:")]),a("blockquote",{staticClass:"result-match"},[t._v(t._s(t.matched_answer))])])},_=[],g={name:"Result",props:["result"],computed:{raw_detection:function(){return this.result?this.result.detected_words.join(" "):null},matched_answer:function(){return this.result?this.result.matches.join(" "):null}}},b=g,w=(a("c43d"),a("2877")),y=Object(w["a"])(b,v,_,!1,null,"7ea6b25a",null),C=y.exports,k={name:"app",components:{Loading:h.a,VueBase64FileUpload:f.a,Result:C},created:function(){this.convert_images_to_b64(),this.heartbeat()},data:function(){var t={question:"demo",answer:"History is a coherent account of the significant past events in the progress of human culture."},e={question:"math",answer:"\\frac { \\sqrt { x ^ { 2 } + 4 ^ { 2 } } } { z ^ { 2 } } + \\sqrt { a ^ { 2 } + b ^ { 2 } }"};return{alive:!1,demo:{image_file:c.a,image:null,result:null,template:t},uploaded:{image_file:null,image:null,result:null,template:t},math:{image_file:m.a,image:null,result:null,template:e,category:"math"},math_upload:{image_file:null,image:null,result:null,template:e,category:"math"},isLoading:!1,fullPage:!0,endpoints:{heartbeat:"/heartbeat",assessImage:"/assessImage",addTemplate:"/addTemplate"}}},methods:{url:function(t){return"http://35.192.116.3:5000"+this.endpoints[t]},convert_images_to_b64:function(){var t=this;this.$image2base64(c.a).then(function(e){t.demo.image=e}),this.$image2base64(m.a).then(function(e){t.math.image=e})},heartbeat:function(){this.$http.get(this.url("heartbeat")).then(function(t){this.alive=!0},function(t){this.alive=!1})},addTemplate:function(t){},test:function(t){function e(t){console.error(t),this.isLoading=!1,alert("sorry, something went wrong")}this.alive?(this.isLoading=!0,this.$http.post(this.url("addTemplate"),t.template).then(function(){var a={question:t.template.question,image:t.image,category:t.category?t.category:"general"};this.$http.post(this.url("assessImage"),a).then(function(e){console.log(e),this.isLoading=!1,t.result=e.body},e)},e)):alert("Sorry, the service is not available currently.\nKindly try again after some time.\nIf the problem persists, please contact the creators.")},on_image_upload:function(t){var e=t.split(",")[1];this.uploaded.image=e},on_image_select:function(t){this.uploaded.image_file=t},on_image_upload_math:function(t){var e=t.split(",")[1];this.math_upload.image=e},on_image_select_math:function(t){this.math_upload.image_file=t}}},x=k,j=(a("5c0b"),Object(w["a"])(x,s,i,!1,null,null,null)),E=j.exports,$=a("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},S=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],L={name:"HelloWorld",props:{msg:String}},P=L,M=(a("004b"),Object(w["a"])(P,T,q,!1,null,"7bb339c8",null)),W=M.exports,I={name:"home",components:{HelloWorld:W}},z=I,A=Object(w["a"])(z,O,S,!1,null,null,null),F=A.exports;o["a"].use($["a"]);var H=new $["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),R=a("2f62");o["a"].use(R["a"]);var U=new R["a"].Store({state:{},mutations:{},actions:{}}),D=(a("1157"),a("f0bd"),a("4989"),a("28dd")),N=a("07e8"),V=a.n(N);o["a"].use(D["a"]),o["a"].config.productionTip=!1,r()(o["a"].prototype,"$image2base64",{value:V.a}),new o["a"]({router:H,store:U,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"7cd7":function(t,e,a){t.exports=a.p+"img/phone_icon.cc6261c8.svg"},"7f3d":function(t,e,a){},"9f89":function(t,e,a){t.exports=a.p+"img/mail_icon.4161c609.svg"},c43d:function(t,e,a){"use strict";var n=a("7f3d"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b113c62c.js.map