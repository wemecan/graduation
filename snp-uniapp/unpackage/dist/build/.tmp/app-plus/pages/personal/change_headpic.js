(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal/change_headpic"],{"03a2":function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"b",function(){return r}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return n})},"42ff":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){return l(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}function s(e,t,a,n,r,o,u){try{var i=e[o](u),c=i.value}catch(l){return void a(l)}i.done?t(c):Promise.resolve(c).then(n,r)}function p(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function u(e){s(o,n,r,u,i,"next",e)}function i(e){s(o,n,r,u,i,"throw",e)}u(void 0)})}}var f={data:function(){return{headpic:"",upload_len:0,upload_cache:[],upload_cache_list:[],upload_before_list:[]}},name:"sunui-upimg",props:{url:{type:String,default:"https://a3.dns06.net.cn/app/index.php?i=2&c=entry&a=wxapp&do=Upload_qiniu_b&m=jzwx_a"},upload_img_wh:{type:String,default:"width:162rpx;height:162rpx;"},upload_count:{type:[Number,String],default:9},upload_auto:{type:Boolean,default:!0},upimg_move:{type:Boolean,default:!0},upimg_preview:{type:Array,default:function(){return[]}},upimg_delaytime:{type:[Number,String],default:300},header:{type:Object,default:function(){return{}}}},created:function(){var e=p(r.default.mark(function e(){var t=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this,setTimeout(function(){t.upload_before_list=t.upload_before_list.concat(t.upimg_preview),t.upload_len=t.upload_before_list.length,t.upimg_preview.map(function(e){t.upload_cache_list.push(e.path)}),t.emit()},this.upimg_delaytime);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{upImage:function(t,a){var n=this,r=t.map(function(e){return d(h)({url:n.url,path:e,name:"file",extra:a,_self:n})});e.showLoading({title:"正在上传..."}),Promise.all(r).then(function(t){var a;e.hideLoading(),(a=n.upload_cache_list).push.apply(a,u(t)),n.emit()}).catch(function(t){e.hideLoading()})},chooseImage:function(){var t=this;e.chooseImage({count:t.upload_count-t.upload_before_list.length,sizeType:["compressed","original"],sourceType:["album","camera"],success:function(e){for(var a=0,r=e.tempFiles.length;a<r;a++)e.tempFiles[a]["upload_percent"]=0,t.upload_before_list.push(e.tempFiles[a]);t.upload_cache=e.tempFilePaths,t.upload(t.upload_auto),console.log(n(e," at pages\\personal\\change_headpic.vue:125")),console.log(n("2"+t.headpic," at pages\\personal\\change_headpic.vue:126"))},fail:function(e){console.log(n(e," at pages\\personal\\change_headpic.vue:129"))}})},upload:function(){var e=p(r.default.mark(function e(t){var a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,!t){e.next=6;break}return e.next=4,a.upImage(a.upload_cache,a.header);case 4:e.next=7;break;case 6:console.warn(n("传输参数:this.$refs.xx.upload(true)才可上传,默认false"," at pages\\personal\\change_headpic.vue:135"));case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),previewImage:function(t){console.log(n("idx"+t," at pages\\personal\\change_headpic.vue:138"));for(var a=this,r=[],o=0,u=a.upload_before_list.length;o<u;o++)r.push(a.upload_before_list[o].path);e.previewImage({current:t,urls:r})},removeImage:function(e){var t=this;t.upload_before_list.splice(e,1),t.upload_cache_list.splice(e,1),t.upload_len=t.upload_before_list.length,t.emit()},emit:function(){var e=this;e.$emit("change",e.upload_cache_list)}}};t.default=f;var d=function(e){return function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return new Promise(function(a,r){e.apply(void 0,[Object.assign({},t,{success:a,fail:r})].concat(n))})}},h=function(t){var a=t.url,o=t._self,u=t.path,i=t.name,c=t.extra,l=t.success,s=(t.progress,t.fail),f=e.uploadFile({url:a,filePath:u,name:i,formData:c,success:function(e){var t=e.data;console.warn(n("sunui-upimg - 如发现没有获取到返回值请到源码191行修改后端返回图片路径以便正常使用插件",JSON.parse(t)," at pages\\personal\\change_headpic.vue:196"));try{t=JSON.parse(e.data).info,console.log(n(t," at pages\\personal\\change_headpic.vue:200"))}catch(a){throw t}200==e.statusCode?l&&l(t):s&&s(t)},fail:function(e){console.log(n(e," at pages\\personal\\change_headpic.vue:217")),s&&s(e)}});f.onProgressUpdate(function(){var e=p(r.default.mark(function e(t){var a,n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=0,n=o.upload_before_list.length;case 1:if(!(a<n)){e.next=8;break}return e.next=4,t.progress;case 4:o.upload_before_list[a]["upload_percent"]=e.sent;case 5:a++,e.next=1;break;case 8:o.upload_before_list=o.upload_before_list,o.upload_len=o.upload_before_list.length;case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}}).call(this,a("6e42")["default"],a("0de9")["default"])},"44b8":function(e,t,a){"use strict";a.r(t);var n=a("03a2"),r=a("7bc5");for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);a("5314");var u,i=a("f0c5"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},"453f":function(e,t,a){},5314:function(e,t,a){"use strict";var n=a("453f"),r=a.n(n);r.a},"7bc5":function(e,t,a){"use strict";a.r(t);var n=a("42ff"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},"9d0e":function(e,t,a){"use strict";(function(e){a("1c35"),a("921b");n(a("66fd"));var t=n(a("44b8"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["9d0e","common/runtime","common/vendor"]]]);