webpackJsonp([38],{113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"vux-mask"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[o("div",{staticClass:"weui-mask_transparent"}),t._v(" "),o("div",{staticClass:"weui-toast",style:{position:t.position}},[o("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),o("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page",attrs:{id:"app"}},[o("loading",{model:{value:t.pageLoading,callback:function(e){t.pageLoading=e},expression:"pageLoading"}}),t._v(" "),o("router-view")],1)},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-toast"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),o("transition",{attrs:{name:t.currentTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[o("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?o("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):o("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},124:function(t,e){},17:function(t,e,o){"use strict";o.d(e,"b",function(){return n}),o.d(e,"d",function(){return i}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return s}),o.d(e,"h",function(){return c}),o.d(e,"g",function(){return r}),o.d(e,"f",function(){return u}),o.d(e,"e",function(){return p}),o.d(e,"n",function(){return l}),o.d(e,"o",function(){return h}),o.d(e,"A",function(){return d}),o.d(e,"k",function(){return m}),o.d(e,"w",function(){return f}),o.d(e,"s",function(){return g}),o.d(e,"t",function(){return b}),o.d(e,"q",function(){return w}),o.d(e,"p",function(){return v}),o.d(e,"l",function(){return x}),o.d(e,"y",function(){return y}),o.d(e,"u",function(){return $}),o.d(e,"v",function(){return z}),o.d(e,"r",function(){return L}),o.d(e,"m",function(){return S}),o.d(e,"z",function(){return _}),o.d(e,"x",function(){return j}),o.d(e,"i",function(){return k}),o.d(e,"j",function(){return I});var n="http://liuwbox.com/zzbao/app/user/login.htm",i="http://liuwbox.com/zzbao/app/user/sms.htm",a="http://liuwbox.com/zzbao/app/user/regist.htm",s="http://liuwbox.com/zzbao/app/user/resetPwd.htm",c="http://liuwbox.com/zzbao/app/insurance/company.htm",r="http://liuwbox.com/zzbao/app/shop/product.htm",u="http://liuwbox.com/zzbao/app/shop/type.htm",p="http://liuwbox.com/zzbao/app/user/edit.htm",l="http://liuwbox.com/zzbao/app/user/editPwd.htm",h="http://liuwbox.com/zzbao/app/user/resetPay.htm",d="http://liuwbox.com/zzbao/app/order/submit.htm",m="http://liuwbox.com/zzbao/app/shop/exchange.htm",f="http://liuwbox.com/zzbao/app/user/wallet.htm",g="http://liuwbox.com/zzbao/app/user/donation.htm",b="http://liuwbox.com/zzbao/app/user/precard.htm",w="http://liuwbox.com/zzbao/app/user/message.htm",v="http://liuwbox.com/zzbao/app/user/message/status.htm",x="http://liuwbox.com/zzbao/app/user/questiones.htm",y="http://liuwbox.com/zzbao/app/shop/exchange/log.htm",$="http://liuwbox.com/zzbao/app/user/withdraw.htm",z="http://liuwbox.com/zzbao/app/user/withdraw/log.htm",L="http://liuwbox.com/zzbao/app/user/bills.htm",S="http://liuwbox.com/zzbao/app/user/feedback.htm",_="http://liuwbox.com/zzbao/app/insurance/list.htm",j="http://liuwbox.com/zzbao/app/order/list.htm",k="http://liuwbox.com/zzbao/app/order/detail.htm",I=600},31:function(t,e,o){"use strict";var n=o(10),i=o(36),a=o(72),s=o(70),c=o(68),r=o(67),u=o(71),p=o(75),l=o(73),h=o(69),d=o(74);n.default.use(i.c),e.a=new i.c.Store({modules:{pageLoad:a.a,offer:s.a,mall:c.a,exchange:r.a,order:u.a,wallet:p.a,score:l.a,message:h.a,user:d.a}})},37:function(t,e,o){o(113);var n=o(16)(o(76),o(118),null,null);t.exports=n.exports},48:function(t,e,o){"use strict";var n=o(10),i=o(121),a=o(31);n.default.use(i.a);var s=new i.a({routes:[{path:"/",name:"Main",redirect:"/offer",component:function(t){o.e(19).then(function(){var e=[o(160)];t.apply(null,e)}.bind(this)).catch(o.oe)},children:[{path:"/offer",components:{tab:function(t){o.e(18).then(function(){var e=[o(141)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/mall",components:{tab:function(t){o.e(20).then(function(){var e=[o(139)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/personer",components:{tab:function(t){o.e(5).then(function(){var e=[o(151)];t.apply(null,e)}.bind(this)).catch(o.oe)}}}]},{path:"/offer/:id",components:{default:function(t){o.e(2).then(function(){var e=[o(142)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/offer/photograph/:id",components:{default:function(t){o.e(34).then(function(){var e=[o(152)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/offer/select/:id",components:{default:function(t){o.e(27).then(function(){var e=[o(158)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/offer/success/:id",components:{default:function(t){o.e(22).then(function(){var e=[o(143)];t.apply(null,e)}.bind(this)).catch(o.oe)}}},{path:"/login",name:"Login",component:function(t){o.e(11).then(function(){var e=[o(138)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/setting",name:"Setting",component:function(t){o.e(29).then(function(){var e=[o(159)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/exchange",name:"exchange",component:function(t){o.e(33).then(function(){var e=[o(133)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/order",name:"order",component:function(t){o.e(0).then(function(){var e=[o(63)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/order/:id",name:"orders",component:function(t){o.e(0).then(function(){var e=[o(63)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/wallet",name:"wallet",component:function(t){o.e(1).then(function(){var e=[o(162)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/record",name:"record",component:function(t){o.e(24).then(function(){var e=[o(155)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/record/:id",name:"recordDetail",component:function(t){o.e(30).then(function(){var e=[o(156)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/cash",name:"cash",component:function(t){o.e(12).then(function(){var e=[o(130)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/donation",name:"donation",component:function(t){o.e(6).then(function(){var e=[o(132)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/detail",name:"detail",component:function(t){o.e(10).then(function(){var e=[o(131)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/balanceDetail",name:"balanceDetail",component:function(t){o.e(25).then(function(){var e=[o(128)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/message",name:"message",component:function(t){o.e(26).then(function(){var e=[o(140)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/information",name:"information",component:function(t){o.e(7).then(function(){var e=[o(137)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/edit/passwordBypay",name:"passwordBypay",component:function(t){o.e(13).then(function(){var e=[o(147)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/edit/passwordBylogin",name:"passwordBylogin",component:function(t){o.e(15).then(function(){var e=[o(146)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/aboutUs",name:"aboutUs",component:function(t){o.e(31).then(function(){var e=[o(127)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/feedback",name:"feedback",component:function(t){o.e(8).then(function(){var e=[o(134)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/question",name:"question",component:function(t){o.e(23).then(function(){var e=[o(154)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/goods/:id",name:"goods",component:function(t){o.e(3).then(function(){var e=[o(135)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/mall/:type",name:"goodsCategory",component:function(t){o.e(4).then(function(){var e=[o(136)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/register",name:"register",component:function(t){o.e(9).then(function(){var e=[o(157)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/password",name:"password",component:function(t){o.e(14).then(function(){var e=[o(145)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/pay/:id",name:"pay",component:function(t){o.e(17).then(function(){var e=[o(148)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/pay/success/:id",name:"paysuccess",component:function(t){o.e(21).then(function(){var e=[o(150)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/pay/info/:id",name:"payInfo",component:function(t){o.e(32).then(function(){var e=[o(149)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/policy/:id",name:"policy",component:function(t){o.e(28).then(function(){var e=[o(153)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/order/detail/:id",name:"orderDetail",component:function(t){o.e(16).then(function(){var e=[o(144)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/wrong",name:"wrong",component:function(t){o.e(35).then(function(){var e=[o(129)];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/track/:id",name:"track",component:function(t){o.e(36).then(function(){var e=[o(161)];t.apply(null,e)}.bind(this)).catch(o.oe)}}]});s.beforeEach(function(t,e,o){a.a.commit("updateLoadingStatus",!0),o()}),s.afterEach(function(t){a.a.commit("updateLoadingStatus",!1)}),e.a=s},58:function(t,e,o){o(114),o(115);var n=o(16)(o(78),o(119),null,null);t.exports=n.exports},64:function(t,e,o){o(116);var n=o(16)(o(77),o(120),null,null);t.exports=n.exports},66:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(10),i=o(52),a=o.n(i),s=o(58),c=o.n(s),r=o(48),u=o(31),p=o(51),l=o(49),h=o(50),d=o(32),m=o.n(d),f=o(54),g=o.n(f),b=o(56),w=o(55),v=o.n(w),x=o(53),y=(o.n(x),o(57)),$=o.n(y);n.default.use(v.a),n.default.use(l.a),a.a.attach(document.body),n.default.use(x.InfiniteScroll),n.default.use($.a),n.default.config.productionTip=!1,n.default.use(p.a),n.default.use(b.a),n.default.use(g.a),n.default.use(h.a),n.default.use(m.a),new n.default({router:r.a,store:u.a,render:function(t){return t(c.a)}}).$mount("#app-box")},67:function(t,e,o){"use strict";var n={exchangeList:[{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"},{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"}]},i={getExchangeList:function(t){return t.exchangeList}},a={getExchangeList:function(t){},getExchange:function(t){}};e.a={state:n,getters:i,mutations:a}},68:function(t,e,o){"use strict";var n=o(34),i=o.n(n),a=o(17),s={mallNav:[],productList:[]},c={getMallNav:function(t){return t.mallNav},getProductList:function(t){return t.productList}},r={getProduct:function(t,e){e.$http({method:"jsonp",url:a.f,jsonp:"callback",jsonpCallback:"json"}).then(function(o){t.mallNav=o.body.data.typeList,e.$localStorage.set("goodsType",i()(t.mallNav)),e.$http({method:"jsonp",url:a.g,jsonp:"callback",jsonpCallback:"json",params:e.product,before:function(t){console.log(i()(t.params)),e.list=[],e.showLoading=!0}}).then(function(t){e.list=t.body.data.productList,e.showLoading=!1})})}},u={};e.a={state:s,getters:c,mutations:r,actions:u}},69:function(t,e,o){"use strict";var n={messageList:[{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0}]},i={getMessageList:function(t){return t.messageList}};e.a={state:n,getters:i}},70:function(t,e,o){"use strict";var n=o(17),i={insuranceArea:"",offerList:[]},a={getOrder:function(t){return t.order},getOfferList:function(t){return t.offerList},getOffer:function(t){return t.offer},getInsuranceArea:function(t){return t.insuranceArea}},s={getInsuranceArea:function(t,e){t.insuranceArea=e},getOfferList:function(t,e){e.$http({method:"jsonp",url:n.h,jsonp:"callback",jsonpCallback:"json",before:function(){}}).then(function(e){t.offerList=e.body.data.companyList,console.log(e.body.data.companyList)})},getOffer:function(t){}};e.a={state:i,getters:a,mutations:s}},71:function(t,e,o){"use strict";var n={orderList:[{id:1,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待保险公司报价",price:"待报价",category:"offer",time:"2017-05-02  17 : 50 : 15"},{id:2,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待付款",price:"￥4300.00",category:"pay",time:"2017-05-02  17 : 50 : 15"},{id:3,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待出单",price:"",category:"issue",time:"2017-05-02  17 : 50 : 15"},{id:4,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已出单",price:"",category:"issued",time:"2017-05-02  17 : 50 : 15"},{id:5,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已撤单",price:"￥0.00",category:"kill",time:"2017-05-02  17 : 50 : 15"},{id:6,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"报价失败",price:"暂无保费",category:"fail",time:"2017-05-02  17 : 50 : 15"}]},i={getOrderList:function(t){return t.orderList}};e.a={state:n,getters:i}},72:function(t,e,o){"use strict";var n={isLoading:!1},i={pageLoading:function(t){return t.isLoading}},a={updateLoadingStatus:function(t,e){t.isLoading=e}};e.a={state:n,getters:i,mutations:a}},73:function(t,e,o){"use strict";var n={incomeRecord:[{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"}]},i={getIncomeRecord:function(t){return t.incomeRecord}};e.a={state:n,getters:i}},74:function(t,e,o){"use strict";var n=o(34),i=o.n(n),a=o(17),s={logined:!1,userInfo:{}},c={checkAuthor:function(t){return t.logined},getUserInfo:function(t){return t.userInfo}},r={postEditPassword:function(t,e){console.log(e.form),e.form.tel?e.form.captcha?e.form.pwd&&e.pwd?e.form.pwd!==e.pwd?e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"两次输入的密码不同！",time:"1000"}):e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请勿重复提交！",time:"1000"}):e.$http({method:"jsonp",url:a.a,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(t){console.log(t),e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:t.body.msg,time:"1000"}),e.$router.replace("/login")}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请输入新密码！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"验证码必须填写！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},postLogout:function(t,e){e.$localStorage.remove("userInfo"),e.$localStorage.set("logined",!1),e.$router.replace("/login"),t.logined=!1,t.userInfo={}},postLogin:function(t,e){""===e.form.tel||""===e.form.pwd?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号码和密码不能为空！",time:"1000"}):e.$refs.tel.valid?e.loading?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在努力加载中，不要着急哦！",time:"1000"}):e.$http({method:"jsonp",url:a.b,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,pwd:e.form.pwd},before:function(){e.loading=!0}}).then(function(o){o.body.data?(e.loading=!1,e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"登录成功！",time:"1000"}),t.logined=!0,console.log(o.body.data.userInfo),t.userInfo=o.body.data.userInfo,e.$localStorage.set("userInfo",i()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),e.$localStorage.set("logined",!0),setTimeout(function(){e.$router.replace("/")},1e3)):(e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"用户名或者密码有误！",time:"1000"}))},function(t){e.loading=!1,e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"服务器正在维护中！",time:"1000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号格式不正确",time:"1000"})},postRegister:function(t,e){e.form.tel&&e.$refs.tel.valid?e.form.name?e.$refs.pwd.valid&&e.pwd===e.form.pwd?e.form.captcha?e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"正在提交注册！",time:"1000"}):e.$http({method:"jsonp",url:a.c,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(o){console.log(o),e.loading=!1,o&&(e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:o.body.msg,time:"1000"}),t.logined=!0,t.userInfo=o.body.data.userInfo,e.$localStorage.set("userInfo",i()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),e.$localStorage.set("logined",!0),setTimeout(function(){e.$router.replace("/")},1e3))}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"验证码必填！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"密码输入有误！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请填写您的姓名",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码！",time:"1000"})},postSMS:function(t,e){e.form.tel?e.$refs.tel.valid?e.getting?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在获取验证码，请稍后！",time:"1000"}):e.$http({method:"jsonp",url:a.d,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,type:e.smsType},before:function(){e.getting=!0,console.log(a.d)}}).then(function(t){console.log(t),t.body.status?(e.getting=!1,e.show=!0,e.start=!0):(e.getting=!1,e.isReg=!0),e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:t.body.msg,time:"3000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},getAuthorInfo:function(t,e){t.userInfo=JSON.parse(e.$localStorage.get("userInfo"))},editInformation:function(t,e){delete e.userInfo.userArea,delete e.userInfo.userBalance,delete e.userInfo.userCumulative,e.$http({method:"jsonp",url:a.e,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(t){var o=JSON.parse(e.$localStorage.get("userInfo"));t.body.status&&(o.userName=e.form.userName,o.userBirthday=e.form.birthday,o.userSex=e.form.userSex,e.$localStorage.set("userInfo",i()(o))),e.loading=!1,e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:t.body.msg,time:"1000"})})}};e.a={state:s,getters:c,mutations:r}},75:function(t,e,o){"use strict";var n={walletScore:[{id:1,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"},{id:2,score:199,balance:2345,status:"waiting",text:"等待审核",time:"2016-12-08 12:15:40"},{id:3,score:199,balance:2345,status:"error",text:"提现失败",time:"2016-12-08 12:15:40"},{id:4,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"}]},i={getWalletScore:function(t){return t.walletScore}},a={};e.a={state:n,getters:i,mutations:a}},76:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},77:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(79);e.default={mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},78:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(60),i=o.n(n),a=o(36),s=o(37),c=o.n(s);e.default={name:"app",components:{Loading:c.a},mounted:function(){},created:function(){this.getAuthorInfo(this)},computed:i()({},o.i(a.a)({pageLoading:"pageLoading",user:"getUserInfo"})),methods:i()({},o.i(a.b)({getAuthorInfo:"getAuthorInfo"}))}}},[66]);
//# sourceMappingURL=app.9c48d1c4df919a1a20c3.js.map