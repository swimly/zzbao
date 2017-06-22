<template>
  <div class="page gray h">
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" v-if="list.length > 0">
       <div class="safe-list white">
        <router-link class="row w" :to="'/offer/' + item.id"  v-for="(item, index) in list" :key="index">
          <span class="col v-m col-9 t-l p-5">
            <span class="img large">
              <img v-lazy="{src: item.listPic, error: 'static/img/err1.png', loading: 'static/img/loading1.gif'}" alt=""/>
            </span>
          </span>
          <span class="col v-m col-15" style="padding-left:1rem;">
            <b class="name mb-10">{{item.name}}</b>
            <span class="row w">
              <span class="col v-m t-l c-red"><span class="num">{{item.score}}</span>积分</span>
              <span class="col v-m t-r status">已兑换</span>
            </span>
          </span>
        </router-link>
      </div>
    </v-scroll>
    <div class="row w h tip" v-if="list.length === 0">
      <div class="col v-m t-c">
        <img v-lazy="'static/img/sorry.png'" alt="">
        <p>没有兑换奖品记录哦！</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {XImg} from 'vux'
  import {exchangeLog} from '../config'
  import VScroll from '../components/VScroll'
  export default {
    head: {
      title: {
        inner: '兑换记录'
      }
    },
    data () {
      return {
        height: '',
        loading: false,
        form: {
          userId: 0,
          limit: 5,
          pageIndex: 0
        },
        list: [], // 下拉更新数据存放数组
        more: []  // 上拉更多的数据存放数组
      }
    },
    components: {
      XImg,
      VScroll
    },
    mounted () {
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
      this.getList(() => {}, null)
    },
    methods: {
      getList (done, status) {
        const This = this
        this.$http({
          method: 'jsonp',
          url: exchangeLog,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: this.form,
          before: () => {
            if (status) {
              this.list = []
            }
          }
        })
        .then(res => {
          console.log(res.body.data)
          res.body.data.productList.forEach(el => {
            This.list.push(el)
          })
          if (res.body.data.productList.length < This.form.limit) {
            this.$el.querySelector('.load-more').innerHTML = '我是有底线的！'
          }
          done()
        })
      },
      onRefresh (done) {
        this.form.pageIndex = 0
        this.getList(done, 1)
      },
      onInfinite (done) {
        this.form.pageIndex ++
        this.getList(done, 0)
        // this.$http({
        //   method: 'jsonp',
        //   url: exchangeLog,
        //   jsonp: 'callback',
        //   jsonpCallback: 'json',
        //   params: this.form,
        //   before: () => {
        //     this.loading = true
        //   }
        // })
        // .then(res => {
        //   console.log(res)
        //   let vm = this
        //   let arr = res.body.data.productList
        //   arr.forEach(function (el) {
        //     This.list.push(el)
        //   })
        //   if (arr.length < vm.form.limit) {
        //     this.$el.querySelector('.load-more').innerHTML = '我是有底线的！'
        //     return
        //   }
        //   done()
        // })
      }
    }
  }
</script>
<style>
.tip img{width:8rem;}
.tip p{font-size:1.2rem;color:#3c3c3c;margin-top:2rem;}
</style>
