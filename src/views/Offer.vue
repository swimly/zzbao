<template>
  <div class="page h">
    <Scroller lock-x :height="height">
      <div class="safe-list">
        <router-link :to="'/offer/' + item.id" :class="item.recommend ? 'row w rec' : 'row w'" v-for="(item, index) in list" :key="index" @click.native="handleSaveData(item)">
            <span class="col v-m col-8 t-c ptb-10">
              <span class="img">
                <img v-lazy="{src: item.listPic, error: 'static/img/err1.png', loading: 'static/img/loading2.gif'}" alt=""/>
              </span>
            </span>
            <span class="col v-m col-16">
              <b class="name">{{item.name}}</b>
              <i>承保地区：{{item.insureArea}}</i>
              <i>承保车辆：{{item.insureCar}}</i>
            </span>
          </router-link>
      </div>
    </Scroller>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import {XImg, Scroller, Loading} from 'vux'
export default {
  head: {
    title: {
      inner: '车险报价'
    }
  },
  components: {
    XImg,
    Scroller,
    Loading
  },
  created () {
    this.getOfferList(this)
  },
  mounted () {
    this.height = document.querySelector('.content').clientHeight + 'px'
  },
  methods: {
    handleSaveData (item) {
      this.$localStorage.set('orderCompany', JSON.stringify({
        companyId: item.id,
        banner: item.bigPic,
        companyName: item.name
      })) // 存储订单公司信息
    },
    ...mapMutations({
      showLoading: 'updateLoadingStatus',
      getOfferList: 'getOfferList'
    })
  },
  data () {
    return {
      height: '0px'
    }
  },
  computed: {
    ...mapGetters({
      list: 'getOfferList'
    })
  }
}
</script>
