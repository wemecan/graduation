(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/write/write"],{"02d0":function(e,t,a){"use strict";(function(e){a("1c35"),a("921b");n(a("66fd"));var t=n(a("d3f4"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"6b0c":function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},"6fba":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(a("9f11"));var i=s(a("0747"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){return Promise.all([a.e("common/vendor"),a.e("components/sunui-upimg/sunui-upimg")]).then(a.bind(null,"c7d6"))},c={data:function(){return{text:"",picUrl:"",skin:!1,addressshow:"点击右侧按钮添加位置",address:"",fieldStr:"选择类型",field:"",modalName:null,checkbox:[{value:0,name:"娱乐",alias:"funny",checked:0},{value:1,name:"动漫",alias:"anime",checked:0},{value:2,name:"新闻",alias:"news",checked:0},{value:3,name:"时尚",alias:"fashion",checked:0},{value:4,name:"运动",alias:"motion",checked:0},{value:5,name:"科技",alias:"science",checked:0}]}},components:{"sunui-upimg":o},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},SwitchSex:function(t){var a=this;0==this.skin?e.chooseLocation({success:function(e){console.log(n("位置名称："+e.name," at pages\\write\\write.vue:108")),console.log(n("详细地址："+e.address," at pages\\write\\write.vue:109")),console.log(n("纬度："+e.latitude," at pages\\write\\write.vue:110")),console.log(n("经度："+e.longitude," at pages\\write\\write.vue:111")),a.addressshow=e.address,a.address=e.address,a.skin=t.detail.value},fail:function(){a.skin=t.detail.value,a.addressshow="获取位置失败，请取消并重试"}}):(a.skin=t.detail.value,a.addressshow="点击右侧按钮添加位置")},getImageInfo1:function(e){console.log(n("图片返回1：",e," at pages\\write\\write.vue:127")),this.picUrl=e,console.log(n(this.picUrl," at pages\\write\\write.vue:129"))},ChooseCheckbox:function(e){for(var t=this.checkbox,a=e.currentTarget.dataset.value,n=0,i=t.length;n<i;++n)t[n].value==a?1==t[n].checked?(this.fieldStr="选择类型",this.field="",t[n].checked=0):t[n].checked=1:t[n].checked=0;for(var s=0,o=t.length;s<o;++s)if(1==t[s].checked){this.fieldStr=t[s].name,this.field=t[s].alias;break}},send:function(){var t=this,a=[{name:"text",checkType:"notnull",checkRule:"",errorMsg:"说些有趣的事情吧"},{name:"text",checkType:"string",checkRule:"0,254",errorMsg:"您想说的超过254个字符了哦，删减些吧"}],s=i.default.check(t,a);s?e.request({url:this.Server_IP+"addSay",data:{userId:e.getStorageSync("userId"),text:t.text,address:t.address,field:t.field,picUrl:JSON.stringify(t.picUrl),userName:e.getStorageSync("userName")},header:{"custom-header":"addSay"},method:"POST",dataType:"json",success:function(t){console.log(n(t.data," at pages\\write\\write.vue:194")),"0"==t.data.info.code?(e.navigateBack({delta:1}),e.showToast({title:"发表成功",icon:"none"})):(console.log(n(t.data.info.message," at pages\\write\\write.vue:204")),e.showToast({icon:"none",title:t.data.info.message}))}}):e.showToast({title:i.default.error,icon:"none"})}}};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"7a48":function(e,t,a){"use strict";a.r(t);var n=a("6fba"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},a65f:function(e,t,a){},ab55:function(e,t,a){"use strict";var n=a("a65f"),i=a.n(n);i.a},d3f4:function(e,t,a){"use strict";a.r(t);var n=a("6b0c"),i=a("7a48");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("ab55");var o,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=r.exports}},[["02d0","common/runtime","common/vendor"]]]);