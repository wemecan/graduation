(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/mine"],{"3a58":function(e,a,n){},"4db0":function(e,a,n){"use strict";var t,o=function(){var e=this,a=e.$createElement;e._self._c},s=[];n.d(a,"b",function(){return o}),n.d(a,"c",function(){return s}),n.d(a,"a",function(){return t})},8923:function(e,a,n){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{userInfo:{clientNo:null,userName:"未登录",avaterUrl:"http://a3q.dns06.net.cn/15844990493147.jpeg"},vipInfo:{},synopsis:"",levelpercent:"",loading:!1,acctDetail:{},pay:999,income:555,isLogin:!1,assets:1e5,lastIncome:-25,userLevel:{},messageList:[{cuIcon:"redpacket",color:"alive",number:"0",badge:0,url:"/pages/bank_card/index/index",name:"微博"},{cuIcon:"refund",color:"alive",number:"0",badge:0,name:"关注"},{cuIcon:"present",color:"alive",number:"0",badge:0,name:"粉丝"}],gridCol:3}},onShow:function(){console.log(e(n.getStorageSync("userId")," at pages\\index\\mine.vue:111")),console.log(e(this.isLogin," at pages\\index\\mine.vue:112")),console.log(e(1," at pages\\index\\mine.vue:113"));var a=this;""==n.getStorageSync("isLogin")&&null==n.getStorageSync("isLogin")||(a.isLogin=n.getStorageSync("isLogin")),""!=n.getStorageSync("userName")?a.userInfo.userName=n.getStorageSync("userName"):a.userInfo.userName="未登录",""!=n.getStorageSync("synopsis")?(a.synopsis=n.getStorageSync("synopsis"),a.synopsis.length>8&&(a.synopsis=a.synopsis.substr(0,8)+"...")):a.synopsis="",console.log(e(a.isLogin," at pages\\index\\mine.vue:132")),console.log(e("获取关注信息"," at pages\\index\\mine.vue:133")),n.request({url:this.Server_IP+"followIm",data:{fansId:"",userId:n.getStorageSync("userId")},header:{"custom-header":"followIm"},method:"POST",dataType:"json",success:function(n){console.log(e(n.data," at pages\\index\\mine.vue:146")),"0"==n.data.info.code?(a.messageList[1].number=+n.data.data.follow,a.messageList[2].number=+n.data.data.fans,console.log(e("获取关注粉丝成功"," at pages\\index\\mine.vue:150"))):console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:152"))},fail:function(){console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:156"))}}),n.request({url:this.Server_IP+"sayNum",data:{userId:n.getStorageSync("userId")},header:{"custom-header":"sayNum"},method:"POST",dataType:"json",success:function(n){console.log(e(n.data," at pages\\index\\mine.vue:170")),"0"==n.data.info.code?(a.messageList[0].number=+n.data.data.num,console.log(e("获取微博数量成功"," at pages\\index\\mine.vue:173"))):console.log(e("获取微博数量失败"," at pages\\index\\mine.vue:175"))},fail:function(){console.log(e("获取微博数量失败"," at pages\\index\\mine.vue:179"))}}),console.log(e("获取完成"," at pages\\index\\mine.vue:182"))},methods:{change:function(){n.getStorageSync("isLogin")?n.navigateTo({url:"/pages/personal/information"}):n.navigateTo({url:"/pages/login/login"})},toList:function(a){"微博"==a&&n.request({url:this.Server_IP+"allsay",data:{userId:n.getStorageSync("userId")},header:{"custom-header":"allsay"},method:"POST",dataType:"json",success:function(a){console.log(e(a.data," at pages\\index\\mine.vue:212")),"0"==a.data.info.code?(console.log(e(a.data," at pages\\index\\mine.vue:214")),n.navigateTo({url:"/pages/subscriber/user_say?title=我的微博&sayList="+a.data.data.sayList})):console.log(e("获取微博失败"," at pages\\index\\mine.vue:219"))},fail:function(){console.log(e("获取微博失败"," at pages\\index\\mine.vue:223"))}}),"关注"==a&&n.request({url:this.Server_IP+"queryfollow",data:{userId:n.getStorageSync("userId")},header:{"custom-header":"queryfollow"},method:"POST",dataType:"json",success:function(a){console.log(e(a.data," at pages\\index\\mine.vue:241")),"0"==a.data.info.code?n.navigateTo({url:"/pages/subscriber/user_list?title=我的关注&userList="+a.data.data.follow}):console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:247"))},fail:function(){console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:251"))}}),"粉丝"==a&&n.request({url:this.Server_IP+"queryfans",data:{userId:n.getStorageSync("userId")},header:{"custom-header":"queryfans"},method:"POST",dataType:"json",success:function(a){console.log(e(a.data," at pages\\index\\mine.vue:267")),"0"==a.data.info.code?n.navigateTo({url:"/pages/subscriber/user_list?title=我的粉丝&userList="+a.data.data.fans}):console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:273"))},fail:function(){console.log(e("获取关注粉丝失败"," at pages\\index\\mine.vue:277"))}})},changeImage:function(){n.navigateTo({url:"/pages/personal/change_headpic"})},write:function(){n.navigateTo({url:"/pages/write/write"})}}};a.default=t}).call(this,n("0de9")["default"],n("6e42")["default"])},"9e81":function(e,a,n){"use strict";n.r(a);var t=n("4db0"),o=n("f26d");for(var s in o)"default"!==s&&function(e){n.d(a,e,function(){return o[e]})}(s);n("f013");var i,u=n("f0c5"),r=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);a["default"]=r.exports},e490:function(e,a,n){"use strict";(function(e){n("1c35"),n("921b");t(n("66fd"));var a=t(n("9e81"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,n("6e42")["createPage"])},f013:function(e,a,n){"use strict";var t=n("3a58"),o=n.n(t);o.a},f26d:function(e,a,n){"use strict";n.r(a);var t=n("8923"),o=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(a,e,function(){return t[e]})}(s);a["default"]=o.a}},[["e490","common/runtime","common/vendor"]]]);