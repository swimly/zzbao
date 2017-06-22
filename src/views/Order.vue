<template>
  <div class="page gray auto has-tab">
    <tab :line-width=2 active-color='#EB3D00' v-model="index">
      <tab-item class="vux-center" :selected="current === item.text" v-for="(item, index) in bar" @on-item-click="handleChange(item, index)" :key="index">{{item.text}}</tab-item>
    </tab>
    <swiper v-model="index" :show-dots="false" class="h" :height="height" @on-index-change="handleSwiper" :min-moving-distance="100">
      <swiper-item v-for="(item, index) in bar" :key="index" class="h">
        <div class="tab-swiper vux-center h auto">
          <order-item :list="lists"></order-item>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Tab, TabItem, Swiper, SwiperItem, Sticky} from 'vux'
  import OrderItem from '@/components/OrderItem'
  import {mapGetters} from 'vuex'
  import {orderList} from '../config'
  export default {
    head: {
      title: {
        inner: '我的订单'
      }
    },
    data () {
      return {
        loading: false,
        form: {
          userId: '',
          status: -1,
          limit: 10,
          pageIndex: 0
        },
        height: '0px',
        list: [],
        bar: [{
          text: '全部',
          key: '-1'
        }, {
          text: '待报价',
          key: '0'
        }, {
          text: '待付款',
          key: '3'
        }, {
          text: '待出单',
          key: '2'
        }, {
          text: '已出单',
          key: '4'
        }],
        current: '全部',
        index: 0
      }
    },
    mounted () {
      this.height = document.querySelector('.vux-slider').clientHeight + 'px'
    },
    created () {
      for (const i in this.bar) {
        if (this.bar[i].key === this.$route.params.id) {
          this.index = parseInt(i)
        }
      }
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
      this.form.status = this.$route.params.id
      if (this.form.status === '-1') {
        this.getList()
      }
    },
    computed: {
      ...mapGetters({
        lists: 'getOrderList'
      })
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Sticky,
      OrderItem
    },
    methods: {
      getList () {
        this.$http({
          method: 'jsonp',
          url: orderList,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: this.form
        })
        .then(res => {
          this.list = res.body.data.orderList
        })
      },
      handleChange (item, index) {
        this.index = index
        this.$router.replace(this.bar[this.index].key)
        this.form.status = this.bar[index].key
      },
      handleSwiper (index) {
        this.$router.replace(this.bar[index].key)
        this.form.status = this.bar[index].key
        this.getList()
      }
    }
  }
</script>
<style scoped>
.page.has-tab{padding-top:44px;}
.has-tab .vux-tab{margin-top:-44px;}
</style>
