webpackJsonp([39],{116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("loading",{model:{value:t.pageLoading,callback:function(e){t.pageLoading=e},expression:"pageLoading"}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},122:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},125:function(t,e){},17:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return r}),n.d(e,"j",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"g",function(){return p}),n.d(e,"f",function(){return l}),n.d(e,"p",function(){return d}),n.d(e,"q",function(){return h}),n.d(e,"C",function(){return f}),n.d(e,"m",function(){return m}),n.d(e,"y",function(){return g}),n.d(e,"u",function(){return v}),n.d(e,"v",function(){return b}),n.d(e,"s",function(){return w}),n.d(e,"r",function(){return y}),n.d(e,"n",function(){return x}),n.d(e,"A",function(){return $}),n.d(e,"w",function(){return I}),n.d(e,"x",function(){return j}),n.d(e,"t",function(){return L}),n.d(e,"o",function(){return S}),n.d(e,"B",function(){return _}),n.d(e,"z",function(){return k}),n.d(e,"l",function(){return C}),n.d(e,"D",function(){return N}),n.d(e,"E",function(){return A}),n.d(e,"i",function(){return O}),n.d(e,"k",function(){return M}),n.d(e,"e",function(){return P});var o="http://liuwbox.com/zzbao",a=o+"/app/user/login.htm",i=o+"/app/user/sms.htm",s=o+"/app/user/regist.htm",r=o+"/app/user/resetPwd.htm",c=o+"/app/insurance/company.htm",u=o+"/app/shop/product.htm",p=o+"/app/shop/type.htm",l=o+"/app/user/edit.htm",d=o+"/app/user/editPwd.htm",h=o+"/app/user/resetPay.htm",f=o+"/app/order/submit.htm",m=o+"/app/shop/exchange.htm",g=o+"/app/user/wallet.htm",v=o+"/app/user/donation.htm",b=o+"/app/user/precard.htm",w=o+"/app/user/message.htm",y=o+"/app/user/message/status.htm",x=o+"/app/user/questiones.htm",$=o+"/app/shop/exchange/log.htm",I=o+"/app/user/withdraw.htm",j=o+"/app/user/withdraw/log.htm",L=o+"/app/user/bills.htm",S=o+"/app/user/feedback.htm",_=o+"/app/insurance/list.htm",k=o+"/app/order/list.htm",C=o+"/app/order/detail.htm",N=o+"/file/upload/image.htm",A=o+"/file/upload/image64.htm",O=o+"/app/index/adver.htm",M=o+"/app/order/cancel.htm",P=120},31:function(t,e,n){"use strict";var o=n(15),a=n(35),i=n(75),s=n(73),r=n(71),c=n(70),u=n(74),p=n(78),l=n(76),d=n(72),h=n(77);o.a.use(a.c),e.a=new a.c.Store({modules:{pageLoad:i.a,offer:s.a,mall:r.a,exchange:c.a,order:u.a,wallet:p.a,score:l.a,message:d.a,user:h.a}})},37:function(t,e,n){n(116);var o=n(16)(n(79),n(120),null,null);t.exports=o.exports},48:function(t,e,n){"use strict";var o=n(15),a=n(123),i=n(31);o.a.use(a.a);var s=new a.a({routes:[{path:"/",name:"Main",redirect:"/offer",component:function(t){n.e(23).then(function(){var e=[n(156)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/offer",components:{tab:function(t){n.e(35).then(function(){var e=[n(139)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/mall",components:{tab:function(t){n.e(24).then(function(){var e=[n(137)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/personer",components:{tab:function(t){n.e(12).then(function(){var e=[n(148)];t.apply(null,e)}.bind(this)).catch(n.oe)}}}]},{path:"/offer/:id",components:{default:function(t){n.e(2).then(function(){var e=[n(64)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/:id/:userId",components:{default:function(t){n.e(2).then(function(){var e=[n(64)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/photograph/:id",components:{default:function(t){n.e(7).then(function(){var e=[n(65)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/photograph/:id/:userId",components:{default:function(t){n.e(7).then(function(){var e=[n(65)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/select/:id",components:{default:function(t){n.e(5).then(function(){var e=[n(66)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offer/select/:id/:userId",components:{default:function(t){n.e(5).then(function(){var e=[n(66)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/offersuccess/:orderId/:userId",components:{default:function(t){n.e(26).then(function(){var e=[n(140)];t.apply(null,e)}.bind(this)).catch(n.oe)}}},{path:"/login",name:"Login",component:function(t){n.e(16).then(function(){var e=[n(136)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/setting",name:"Setting",component:function(t){n.e(31).then(function(){var e=[n(155)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/exchange",name:"exchange",component:function(t){n.e(6).then(function(){var e=[n(63)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/exchange/:userId",name:"exchangeId",component:function(t){n.e(6).then(function(){var e=[n(63)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order",name:"order",component:function(t){n.e(0).then(function(){var e=[n(36)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order/:id",name:"orders",component:function(t){n.e(0).then(function(){var e=[n(36)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order/:id/:userId",name:"ordersId",component:function(t){n.e(0).then(function(){var e=[n(36)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wallet",name:"wallet",component:function(t){n.e(1).then(function(){var e=[n(67)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wallet/:userId",name:"walletId",component:function(t){n.e(1).then(function(){var e=[n(67)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/record",name:"record",component:function(t){n.e(28).then(function(){var e=[n(152)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/record/:id",name:"recordDetail",component:function(t){n.e(32).then(function(){var e=[n(153)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/cash",name:"cash",component:function(t){n.e(17).then(function(){var e=[n(130)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/donation",name:"donation",component:function(t){n.e(10).then(function(){var e=[n(131)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",name:"detail",component:function(t){n.e(3).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail/:userId",name:"detail",component:function(t){n.e(3).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/balanceDetail",name:"balanceDetail",component:function(t){n.e(4).then(function(){var e=[n(61)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/balanceDetail/:userId",name:"balanceDetail",component:function(t){n.e(4).then(function(){var e=[n(61)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/message",name:"message",component:function(t){n.e(29).then(function(){var e=[n(138)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/information",name:"information",component:function(t){n.e(11).then(function(){var e=[n(135)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/edit/passwordBypay",name:"passwordBypay",component:function(t){n.e(18).then(function(){var e=[n(144)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/edit/passwordBylogin",name:"passwordBylogin",component:function(t){n.e(20).then(function(){var e=[n(143)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/edit/phone",name:"editPhone",component:function(t){n.e(15).then(function(){var e=[n(149)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/aboutUs",name:"aboutUs",component:function(t){n.e(33).then(function(){var e=[n(128)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(t){n.e(13).then(function(){var e=[n(132)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/question",name:"question",component:function(t){n.e(27).then(function(){var e=[n(151)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/goods/:id",name:"goods",component:function(t){n.e(8).then(function(){var e=[n(133)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/mall/:type",name:"goodsCategory",component:function(t){n.e(9).then(function(){var e=[n(134)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",component:function(t){n.e(14).then(function(){var e=[n(154)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/password",name:"password",component:function(t){n.e(19).then(function(){var e=[n(142)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/pay/:userId/:orderId",name:"pay",component:function(t){n.e(22).then(function(){var e=[n(145)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/paysuccess/:userId/:orderId",name:"paysuccess",component:function(t){n.e(25).then(function(){var e=[n(147)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/pay/info/:id",name:"payInfo",component:function(t){n.e(34).then(function(){var e=[n(146)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/policy/:userId/:orderId",name:"policy",component:function(t){n.e(30).then(function(){var e=[n(150)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/orderdetail/:userId/:orderId",name:"orderDetail",component:function(t){n.e(21).then(function(){var e=[n(141)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wrong",name:"wrong",component:function(t){n.e(37).then(function(){var e=[n(129)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/track/:userId/:orderId",name:"track",component:function(t){n.e(36).then(function(){var e=[n(157)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});s.beforeEach(function(t,e,n){i.a.commit("updateLoadingStatus",!0),n()}),s.afterEach(function(t){i.a.commit("updateLoadingStatus",!1)}),e.a=s},56:function(t,e,n){n(117),n(118);var o=n(16)(n(81),n(121),null,null);t.exports=o.exports},68:function(t,e,n){n(119);var o=n(16)(n(80),n(122),null,null);t.exports=o.exports},69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),a=n(51),i=n.n(a),s=n(56),r=n.n(s),c=n(48),u=n(31),p=n(49),l=n(50),d=n(53),h=n.n(d),f=n(52),m=n.n(f),g=n(55),v=n(54),b=n.n(v);o.a.use(b.a),o.a.use(p.a),i.a.attach(document.body),o.a.config.productionTip=!1,o.a.use(g.a),o.a.use(m.a),o.a.use(l.a),o.a.use(h.a),new o.a({router:c.a,store:u.a,render:function(t){return t(r.a)}}).$mount("#app-box")},70:function(t,e,n){"use strict";var o={exchangeList:[{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"},{id:1,cover:"static/img/score1.png",name:"香百年（Carori） 汽车香水座车载车用香水",score:1270,status:"已兑换"}]},a={getExchangeList:function(t){return t.exchangeList}},i={getExchangeList:function(t){},getExchange:function(t){}};e.a={state:o,getters:a,mutations:i}},71:function(t,e,n){"use strict";var o=n(33),a=n.n(o),i=n(17),s={mallNav:[],productList:[]},r={getMallNav:function(t){return t.mallNav},getProductList:function(t){return t.productList}},c={getProduct:function(t,e){e.$http({method:"jsonp",url:i.g,jsonp:"callback",jsonpCallback:"json"}).then(function(n){t.mallNav=n.body.data.typeList,e.$localStorage.set("goodsType",a()(t.mallNav)),e.$http({method:"jsonp",url:i.h,jsonp:"callback",jsonpCallback:"json",params:e.product,before:function(t){e.list=[],e.showLoading=!0}}).then(function(t){e.list=t.body.data.productList,e.showLoading=!1,e.$http({method:"jsonp",url:i.i,jsonp:"callback",jsonpCallback:"json",params:{position:1}}).then(function(t){e.recommend=t.body.data.aderList,e.$http({method:"jsonp",url:i.i,jsonp:"callback",jsonpCallback:"json",params:{position:2}}).then(function(t){e.advert=t.body.data.aderList,console.log(e.advert)})})})})}},u={};e.a={state:s,getters:r,mutations:c,actions:u}},72:function(t,e,n){"use strict";var o={messageList:[{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!1},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0},{title:"您的订单号为201602145745的订单报价成功！",content:"您的订单号为201602145745的订单报价成功！",time:"2017-12-12 17:34",read:!0}]},a={getMessageList:function(t){return t.messageList}};e.a={state:o,getters:a}},73:function(t,e,n){"use strict";var o=n(17),a={insuranceArea:"",offerList:[]},i={getOrder:function(t){return t.order},getOfferList:function(t){return t.offerList},getOffer:function(t){return t.offer},getInsuranceArea:function(t){return t.insuranceArea}},s={getInsuranceArea:function(t,e){t.insuranceArea=e},getOfferList:function(t,e){e.$http({method:"jsonp",url:o.j,jsonp:"callback",jsonpCallback:"json",before:function(){}}).then(function(e){t.offerList=e.body.data.companyList,console.log(e.body.data.companyList)})},getOffer:function(t){}};e.a={state:a,getters:i,mutations:s}},74:function(t,e,n){"use strict";var o={orderList:[{id:1,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待保险公司报价",price:"待报价",category:"offer",time:"2017-05-02  17 : 50 : 15"},{id:2,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待付款",price:"￥4300.00",category:"pay",time:"2017-05-02  17 : 50 : 15"},{id:3,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"待出单",price:"",category:"issue",time:"2017-05-02  17 : 50 : 15"},{id:4,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已出单",price:"",category:"issued",time:"2017-05-02  17 : 50 : 15"},{id:5,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"已撤单",price:"￥0.00",category:"kill",time:"2017-05-02  17 : 50 : 15"},{id:6,goods:{id:123,cover:"static/img/safe1.png"},carNumber:"鄂A78458",insured:"刘勇",status:"报价失败",price:"暂无保费",category:"fail",time:"2017-05-02  17 : 50 : 15"}]},a={getOrderList:function(t){return t.orderList}};e.a={state:o,getters:a}},75:function(t,e,n){"use strict";var o={isLoading:!1},a={pageLoading:function(t){return t.isLoading}},i={updateLoadingStatus:function(t,e){t.isLoading=e}};e.a={state:o,getters:a,mutations:i}},76:function(t,e,n){"use strict";var o={incomeRecord:[{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"},{score:200,resource:"车险订单201612241457",time:"2016-12-08 12:15:30"}]},a={getIncomeRecord:function(t){return t.incomeRecord}};e.a={state:o,getters:a}},77:function(t,e,n){"use strict";var o=n(33),a=n.n(o),i=n(17),s={logined:!1,userInfo:{}},r={checkAuthor:function(t){return t.logined},getUserInfo:function(t){return t.userInfo}},c={postEditPassword:function(t,e){console.log(e.form),e.form.tel?e.form.captcha?e.form.pwd&&e.pwd?e.form.pwd!==e.pwd?e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"两次输入的密码不同！",time:"1000"}):e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请勿重复提交！",time:"1000"}):e.$http({method:"jsonp",url:i.a,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(t){console.log(t),e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:t.body.msg,time:"1000"}),e.$router.replace("/login")}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请输入新密码！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"验证码必须填写！",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},postLogout:function(t,e){e.$localStorage.remove("userInfo"),e.$localStorage.set("logined",!1),e.$router.replace("/login"),t.logined=!1,t.userInfo={}},postLogin:function(t,e){""===e.form.tel||""===e.form.pwd?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号码和密码不能为空！",time:"1000"}):e.$refs.tel.valid?e.loading?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在努力加载中，不要着急哦！",time:"1000"}):e.$http({method:"jsonp",url:i.b,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,pwd:e.form.pwd},before:function(){e.loading=!0}}).then(function(n){n.body.data?(e.loading=!1,e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"登录成功！",time:"1000"}),t.logined=!0,console.log(n.body.data.userInfo),t.userInfo=n.body.data.userInfo,e.$localStorage.set("userInfo",a()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),e.$localStorage.set("logined",!0),setTimeout(function(){e.$router.replace("/personer")},1e3)):(e.loading=!1,e.$vux.toast.show({type:"text",width:"15em",position:"bottom",text:"用户名或者密码有误！",time:"1000"}))},function(t){e.loading=!1,e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"服务器正在维护中！",time:"1000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"手机号格式不正确",time:"1000"})},postRegister:function(t,e){e.form.tel&&e.$refs.tel.valid?e.form.name?e.$refs.pwd.valid&&e.pwd===e.form.pwd?e.form.captcha?e.loading?e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"正在提交注册！",time:"1000"}):e.$http({method:"jsonp",url:i.c,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(n){console.log(n),e.loading=!1,n&&(e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:n.body.msg,time:"1000"}),t.logined=!0,t.userInfo=n.body.data.userInfo,e.$localStorage.set("userInfo",a()(t.userInfo)),e.$localStorage.set("time",Date.parse(new Date)),e.$localStorage.set("logined",!0),setTimeout(function(){e.$router.replace("/")},1e3))}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"验证码必填！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"密码输入有误！",time:"1000"}):e.$vux.toast.show({type:"text",width:"10em",position:"bottom",text:"请填写您的姓名",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码！",time:"1000"})},postSMS:function(t,e){e.form.tel?e.$refs.tel.valid?e.getting?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"正在获取验证码，请稍后！",time:"1000"}):e.$http({method:"jsonp",url:i.d,jsonp:"callback",jsonpCallback:"json",params:{tel:e.form.tel,type:e.smsType},before:function(){e.getting=!0,console.log(i.d)}}).then(function(t){console.log(t),t.body.status?(e.getting=!1,e.show=!0,e.start=!0):(e.getting=!1,e.isReg=!0),t.body.status?e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"验证码获取成功，有效期"+i.e/60+"分钟",time:"3000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"验证码获取失败，请稍后重试！",time:"3000"})}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写正确的手机号码",time:"1000"}):e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:"请填写手机号码！",time:"1000"})},getAuthorInfo:function(t,e){t.userInfo=JSON.parse(e.$localStorage.get("userInfo"))},editInformation:function(t,e){delete e.userInfo.userArea,delete e.userInfo.userBalance,delete e.userInfo.userCumulative,e.$http({method:"jsonp",url:i.f,jsonp:"callback",jsonpCallback:"json",params:e.form,before:function(){e.loading=!0}}).then(function(t){var n=JSON.parse(e.$localStorage.get("userInfo"));t.body.status&&(n.userName=e.form.userName,n.userBirthday=e.form.birthday,n.userSex=e.form.userSex,e.$localStorage.set("userInfo",a()(n))),e.loading=!1,e.$vux.toast.show({type:"text",width:"20em",position:"bottom",text:t.body.msg,time:"1000"})})}};e.a={state:s,getters:r,mutations:c}},78:function(t,e,n){"use strict";var o={walletScore:[{id:1,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"},{id:2,score:199,balance:2345,status:"waiting",text:"等待审核",time:"2016-12-08 12:15:40"},{id:3,score:199,balance:2345,status:"error",text:"提现失败",time:"2016-12-08 12:15:40"},{id:4,score:199,balance:2345,status:"success",text:"提现成功",time:"2016-12-08 12:15:40"}]},a={getWalletScore:function(t){return t.walletScore}},i={};e.a={state:o,getters:a,mutations:i}},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(82);e.default={mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(58),a=n.n(o),i=n(35),s=n(37),r=n.n(s);e.default={name:"app",components:{Loading:r.a},mounted:function(){},created:function(){this.getAuthorInfo(this)},computed:a()({},n.i(i.a)({pageLoading:"pageLoading",user:"getUserInfo"})),methods:a()({},n.i(i.b)({getAuthorInfo:"getAuthorInfo"}))}}},[69]);
//# sourceMappingURL=app.96e16c951b8e6f921c56.js.map