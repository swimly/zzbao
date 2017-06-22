<template>
  <div class="page gray auto">
    <group gutter="0">
      <cell :title="'鄂A478445-张心仪'" :value="'太平洋车险'" value-align="right"></cell>
      <cell>
        <div slot="title">
          <h2 class="tip"><span class="iconfont icon-correct"></span>已出单</h2>
          <p style="padding:0.5rem 0;font-size:1.2rem;color:#8B8B8B;margin-bottom:0.5rem;">车险投保成功</p>
          <flexbox slot="inline-desc">
            <flexbox-item>
              <x-button type="warn" @click.native="jump('/pay/info/' + id)">支付详情</x-button>
            </flexbox-item>
            <flexbox-item>
            </flexbox-item>
            <flexbox-item>
            </flexbox-item>
          </flexbox>
        </div>
        <ul class="row w" slot="inline-desc">
          <li class="col v-m col-12 t-c">
            <router-link :to="'/track/' + id"><img style="width:2rem;vertical-align:middle" src="static/img/order.png" alt=""><span class="v-m">订单跟踪</span></router-link>
          </li>
          <li class="col v-m col-12 t-c">
            <router-link to=""><img style="width:2rem;vertical-align:middle" src="static/img/kefu.png" alt=""><span class="v-m">联系客服</span></router-link>
          </li>
        </ul>
      </cell>
    </group>
    <group gutter="5px">
      <cell title="保单信息" value="查看详情" is-link :link="'/policy/' + id"></cell>
      <cell title="商业险"></cell>
      <cell>
        <p slot="title">商业险<span>（含车船税）</span></p>
      </cell>
    </group>
    <group gutter="5px">
      <cell title="车辆信息"></cell>
      <cell title="车牌号" value="鄂A54125"></cell>
      <cell title="车主姓名" value="刘勇"></cell>
    </group>
    <group gutter="5px">
      <cell title="订单信息"></cell>
      <cell title="订单号" value="25412547854"></cell>
      <cell title="下单时间" value="2017-05-25 17：54"></cell>
    </group>
  </div>
</template>
<script>
  import {Group, Cell, XButton, Flexbox, FlexboxItem, Divider} from 'vux'
  export default {
    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      XButton,
      Divider
    },
    data () {
      return {
        id: 0
      }
    },
    created () {
      this.id = this.$route.params.id
    },
    methods: {
      jump (url) {
        this.$router.push(url)
      }
    }
  }
</script>
<style scoped>
.num{font-size:1.6rem;}
.tip{font-size:1.4rem;color:#333;}
.tip .iconfont{font-size:2.2rem;margin-right:0.5rem;vertical-align: middle;color:#EB3D00;}
.vux-label-desc img{margin-right:0.5rem;}
.vux-label-desc .row{margin-top:1rem;border-top:1px solid #ECECEC;}
.vux-label-desc .row .col{padding:1rem 0;position:relative;}
.vux-label-desc .row .col:first-child:after{content:"";display:inline-block;width:1px;height:1.4rem;background:#ECECEC;position:absolute;right:0;top:50%;transform:translateY(-50%);}
.vux-label-desc a{font-size:1.2rem;color:#2b2b2b;}
.vux-label-desc a span{display:inline-block;}
</style>
