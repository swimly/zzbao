webpackJsonp([38],{1026:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page h auto"},[o("div",{staticClass:"safe-list"},t._l(t.list,function(e,n){return o("router-link",{key:n,class:e.recommend?"row w rec":"row w",attrs:{to:"/offer/"+e.id+"/"+t.userId},nativeOn:{click:function(o){t.handleSaveData(e)}}},[o("span",{staticClass:"col v-m col-8 t-c ptb-10"},[o("span",{staticClass:"img"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.listPic,error:"static/img/err1.png",loading:"static/img/loading2.gif"},expression:"{src: item.listPic, error: 'static/img/err1.png', loading: 'static/img/loading2.gif'}"}],attrs:{alt:""}})])]),t._v(" "),o("span",{staticClass:"col v-m col-16"},[o("b",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("i",[t._v("承保地区："+t._s(e.insureArea))]),t._v(" "),o("i",[t._v("承保车辆："+t._s(e.insureCar))])])])}))])},staticRenderFns:[]}},144:function(t,e,o){var n=o(16)(o(565),o(1026),null,null);t.exports=n.exports},207:function(t,e,o){"use strict";e.a={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},276:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(285),i=o.n(n),s=o(290),r=o.n(s),a=o(207);e.default={mixins:[a.a],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var e=t,o="vux-ximg-"+t.uuid;t.$el.setAttribute("id",o),t.blazy=new i.a({scroller:t.scroller,container:t.container,selector:"#"+o,offset:e.offset,errorClass:e.errorClass,successClass:e.successClass,success:function(t){e.$emit("on-success",e.src,t)},error:function(t,o){e.$emit("on-error",e.src,t,o)}})},t.delay)})},computed:{currentSrc:function(){return r()()&&this.webpSrc?this.webpSrc:this.src}},props:{src:String,webpSrc:String,defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,defaut:100},scroller:Object,container:String,delay:{type:Number,default:100}},beforeDestroy:function(){this.blazy&&this.blazy.destroy()}}},278:function(t,e,o){e=t.exports=o(57)(),e.push([t.i,".b-lazy{-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out;max-width:100%;opacity:0}.b-lazy.b-loaded{opacity:1}","",{version:3,sources:["C:/Users/97974/Desktop/zzbao/node_modules/vux/src/components/x-img/index.vue"],names:[],mappings:"AACA,QACE,2CAA8C,AAC9C,mCAAsC,AACtC,eAAgB,AAChB,SAAW,CACZ,AACD,iBACE,SAAW,CACZ",file:"index.vue",sourcesContent:["\n.b-lazy {\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n  max-width: 100%;\n  opacity: 0;\n}\n.b-lazy.b-loaded {\n  opacity: 1;\n}\n"],sourceRoot:""}])},280:function(t,e,o){var n=o(278);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(128)("e2265154",n,!0)},284:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"vux-x-img",attrs:{src:t.defaultSrc,"data-src":t.currentSrc}})},staticRenderFns:[]}},285:function(t,e,o){var n,i;!function(s,r){n=r,void 0!==(i="function"==typeof n?n.call(e,o,e,t):n)&&(t.exports=i)}(0,function(){"use strict";function t(t){var o=t._util;if(o.elements=u(t.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,t.options.container&&p(t.options.container,function(t){f(t,"scroll",o.validateT)}),f(window,"resize",o.saveViewportOffsetT),f(window,"resize",o.validateT),f(window,"scroll",o.validateT),t.options.scroller)){var n=t.options.scroller._xscroll,i=n.userConfig.useOriginScroll?"scroll":"scrollend";n.on("afterrender",o.validateT,t),n.on(i,o.validateT,t)}e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var i=e.elements[n];(o(i)||l(i,t.options.successClass))&&(t.load(i),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function o(t){var e=t.getBoundingClientRect();return e.right>=g.left&&e.bottom>=g.top&&e.left<=g.right&&e.top<=g.bottom}function n(t,e,o){if(!l(t,o.successClass)&&(e||o.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(m)||t.getAttribute(o.src);if(n){var u=n.split(o.separator),A=u[C&&u.length>1?1:0],h=a(t,"img");if(h||void 0===t.src){var g=new Image,b=function(){o.error&&o.error(t,"invalid"),c(t,o.errorClass),d(g,"error",b),d(g,"load",w)},w=function(){if(h){s(t,A),r(t,y,o.srcset);var e=t.parentNode;e&&a(e,"picture")&&p(e.getElementsByTagName("source"),function(t){r(t,y,o.srcset)}),o.scroller&&o.scroller.reset()}else t.style.backgroundImage='url("'+A+'")';i(t,o),d(g,"load",w),d(g,"error",b)};f(g,"error",b),f(g,"load",w),s(g,A)}else s(t,A),i(t,o)}else a(t,"video")?(p(t.getElementsByTagName("source"),function(t){r(t,v,o.src)}),t.load(),i(t,o)):(o.error&&o.error(t,"missing"),c(t,o.errorClass))}}function i(t,e){c(t,e.successClass),e.success&&e.success(t),t.removeAttribute(e.src),p(e.breakpoints,function(e){t.removeAttribute(e.src)})}function s(t,e){t[v]=e}function r(t,e,o){var n=t.getAttribute(o);n&&(t[e]=n,t.removeAttribute(o))}function a(t,e){return t.nodeName.toLowerCase()===e}function l(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function c(t,e){l(t,e)||(t.className+=" "+e)}function u(t){for(var e=[],o=document.querySelectorAll(t),n=o.length;n--;e.unshift(o[n]));return e}function A(t){g.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,g.right=(window.innerWidth||document.documentElement.clientWidth)+t}function f(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,!1)}function d(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,!1)}function p(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);}function h(t,e,o){var n=0;return function(){var i=+new Date;i-n<e||(n=i,t.apply(o,arguments))}}var m,g,C,v="src",y="srcset";return function(o){if(!document.querySelectorAll){var i=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,s){for(s=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),o=t.length;o--;){for(i.addRule(t[o],"k:v"),n=s.length;n--;)s[n].currentStyle.k&&e.push(s[n]);i.removeRule(0)}return e}}var s=this,r=s._util={};r.elements=[],r.destroyed=!0,s.options=o||{},s.options.error=s.options.error||!1,s.options.offset=s.options.offset||100,s.options.success=s.options.success||!1,s.options.selector=s.options.selector||".b-lazy",s.options.separator=s.options.separator||"|",s.options.container=!!s.options.container&&document.querySelectorAll(s.options.container),s.options.errorClass=s.options.errorClass||"b-error",s.options.breakpoints=s.options.breakpoints||!1,s.options.loadInvisible=s.options.loadInvisible||!1,s.options.successClass=s.options.successClass||"b-loaded",s.options.validateDelay=s.options.validateDelay||25,s.options.saveViewportOffsetDelay=s.options.saveViewportOffsetDelay||50,s.options.srcset=s.options.srcset||"data-srcset",s.options.src=m=s.options.src||"data-src",C=window.devicePixelRatio>1,g={},g.top=0-s.options.offset,g.left=0-s.options.offset,s.revalidate=function(){t(this)},s.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):p(t,function(t){n(t,e,o)})},s.destroy=function(){var t=this,e=t._util;t.options.container&&p(t.options.container,function(t){d(t,"scroll",e.validateT)}),d(window,"scroll",e.validateT),d(window,"resize",e.validateT),d(window,"resize",e.saveViewportOffsetT),t.scroller&&t.scroller._xscroll&&t.scroller._xscroll.off("scroll scrollend afterrender",e.validateT,t.scroller._xscroll),e.count=0,e.elements.length=0,e.destroyed=!0},r.validateT=h(function(){e(s)},s.options.validateDelay,s),r.saveViewportOffsetT=h(function(){A(s.options.offset)},s.options.saveViewportOffsetDelay,s),A(s.options.offset),p(s.options.breakpoints,function(t){if(t.width>=window.screen.width)return m=t.src,!1}),setTimeout(function(){t(s)})}})},289:function(t,e,o){o(280);var n=o(16)(o(276),o(284),null,null);t.exports=n.exports},290:function(t,e){var o="can_use_webp";!function(){if(window.localStorage&&"object"==typeof localStorage&&(!localStorage.getItem(o)||"available"!==localStorage.getItem(o)&&"disable"!==localStorage.getItem(o))){var t=document.createElement("img");t.onload=function(){try{localStorage.setItem(o,"available")}catch(t){}},t.onerror=function(){try{localStorage.setItem(o,"disable")}catch(t){}},t.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}(),t.exports=function(){return!!window.localStorage&&"available"===window.localStorage.getItem(o)}},293:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vscroll",props:{offset:{type:Number,default:60},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1}},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.$el.querySelector(".load-more").style.display="flex",this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},297:function(t,e,o){e=t.exports=o(57)(),e.push([t.i,".yo-scroll .iconfont{color:#eb3d00}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background-color:#eee}.yo-scroll .inner{position:absolute;min-height:200px;top:-4rem;width:100%;-webkit-transition-duration:.3s;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:1.2rem;color:#666}.yo-scroll.touch .inner{-webkit-transition-duration:0ms;transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:1.2rem;color:#666;background:#eee}.yo-scroll .no-more{display:none}","",{version:3,sources:["C:/Users/97974/Desktop/zzbao/src/components/VScroll.vue"],names:[],mappings:"AACA,qBAAqB,aAAc,CAClC,AACD,WACE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,SAAU,AACV,OAAQ,AACR,cAAe,AACf,iCAAkC,AAClC,qBAAsB,CACvB,AACD,kBACE,kBAAmB,AACnB,iBAAiB,AACjB,UAAW,AACX,WAAY,AACZ,gCAAmC,AAC3B,uBAA2B,CACpC,AACD,yBACE,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,2BAA4B,AACpB,mBAAoB,AAC5B,wBAAyB,AACzB,+BAAgC,AACxB,uBAAwB,AAChC,iBAAiB,AACjB,UAAW,CACZ,AACD,wBACE,gCAAiC,AACzB,uBAAyB,CAClC,AAOD,gFACE,aAAe,CAChB,AACD,gEAGE,YAAc,CACf,AACD,sBACE,YAAa,AACb,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,2BAA4B,AACpB,mBAAoB,AAC5B,wBAAyB,AACzB,+BAAgC,AACxB,uBAAwB,AAChC,iBAAiB,AACjB,WAAW,AACX,eAAgB,CACjB,AACD,oBAAoB,YAAa,CAChC",file:"VScroll.vue",sourcesContent:["\n.yo-scroll .iconfont{color:#EB3D00;\n}\n.yo-scroll {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  background-color: #eee\n}\n.yo-scroll .inner {\r\n  position: absolute;\r\n  min-height:200px;\r\n  top: -4rem;\r\n  width: 100%;\r\n  -webkit-transition-duration: 300ms;\r\n          transition-duration: 300ms;\n}\n.yo-scroll .pull-refresh {\r\n  position: relative;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 4rem;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  font-size:1.2rem;\r\n  color:#666;\n}\n.yo-scroll.touch .inner {\r\n  -webkit-transition-duration: 0ms;\r\n          transition-duration: 0ms;\n}\n.yo-scroll.down .down-tip {\r\n  display: block;\n}\n.yo-scroll.up .up-tip {\r\n  display: block;\n}\n.yo-scroll.refresh .refresh-tip {\r\n  display: block;\n}\n.yo-scroll .down-tip,\r\n.yo-scroll .refresh-tip,\r\n.yo-scroll .up-tip {\r\n  display: none;\n}\n.yo-scroll .load-more {\r\n  height: 4rem;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  font-size:1.2rem;\r\n  color:#666;\r\n  background:#eee;\n}\n.yo-scroll .no-more{display:none;\n}\r\n"],sourceRoot:""}])},301:function(t,e,o){var n=o(297);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(128)("5989007b",n,!0)},303:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[o("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[o("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])],2),t._v(" "),t._t("default"),t._v(" "),o("footer",{staticClass:"load-more"},[t._t("load-more",[t._m(3),t._v(" "),o("span",{staticClass:"no-more"},[t._v("没有更多了哦！")])])],2)],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"down-tip"},[o("span",{staticClass:"iconfont icon-xiala",staticStyle:{"padding-right":"0.5rem"}}),t._v("下拉更新")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"up-tip"},[o("span",{staticClass:"iconfont icon-shangla",staticStyle:{"padding-right":"0.5rem"}}),t._v("松开更新")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"refresh-tip"},[o("img",{staticStyle:{width:"1.6rem","margin-right":"0.5rem"},attrs:{src:"static/img/331.svg",alt:""}}),t._v("更新中")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"load"},[o("img",{staticStyle:{width:"1.6rem","margin-right":"0.5rem"},attrs:{src:"static/img/331.svg",alt:""}}),t._v("加载中")])}]}},304:function(t,e,o){o(301);var n=o(16)(o(293),o(303),null,null);t.exports=n.exports},565:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(33),i=o.n(n),s=o(58),r=o.n(s),a=o(34),l=o(289),c=o.n(l),u=o(37),A=o.n(u),f=o(304),d=o.n(f),p=o(17);e.default={name:"offer",head:{title:{inner:"车险报价"}},components:{XImg:c.a,VScroll:d.a,Loading:A.a},created:function(){this.getOfferList(),"false"!==this.$localStorage.get("logined")&&(this.userId=JSON.parse(this.$localStorage.get("userInfo")).userId)},methods:r()({getOfferList:function(){var t=this;this.$http({method:"jsonp",url:p.k,jsonp:"callback",jsonpCallback:"json",before:function(){}}).then(function(e){t.list=e.body.data.companyList})},handleSaveData:function(t){this.$localStorage.set("orderCompany",i()({companyId:t.id,banner:t.bigPic,companyName:t.name}))}},o.i(a.b)({showLoading:"updateLoadingStatus"})),data:function(){return{list:[],userId:"null"}}}}});
//# sourceMappingURL=38.f279360677e43859adc5.js.map