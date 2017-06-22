<template>
  <div>
    <group gutter="0">
      <cell :title="title" is-link :value="selected" @click.native="show = true" class="address"></cell>
    </group>
    <div v-transfer-dom>
      <popup v-model="show" position="bottom" height="60%" class="bg-f select">
        <tab active-color='#EB3D00' v-model="index" class="select-tab">
          <tab-item :selected="index === active" v-for="(item, index) in tab" @click.native="active = index" :key="index">{{item}}</tab-item>
        </tab>
        <swiper v-model="active" class="select-list" :show-dots="false" height="100%" :threshold="100">
          <swiper-item>
            <ul class="list" id="list">
              <li v-for="(item, index) in areaList" :key="index" @click="findCity(item.id, item.text)">{{item.text}}</li>
            </ul>
          </swiper-item>
          <swiper-item>
            <ul class="list">
              <li v-for="(item, index) in cityList" :key="index" @click="findDist(item.id, item.text)">{{item.text}}</li>
            </ul>
          </swiper-item>
          <swiper-item>
            <ul class="list">
              <li v-for="(item, index) in distList" :key="index" @click="showDist(item.id, item.text)">{{item.text}}</li>
            </ul>
          </swiper-item>
        </swiper>
        <div class="row w pd-10 select-btn">
          <div class="col v-m w-30">
            <x-button @click.native="show = false" type="primary">取消</x-button>
          </div>
          <div class="col v-m w-70">
            <x-button @click.native="submit()" type="warn">确定</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Group, Popup, Tab, TabItem, XButton, Swiper, Cell, SwiperItem, TransferDom, XSwitch} from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      tab: ['省', '市', '区'],
      selected: '请选择',
      show: false,
      index: 0,
      active: 0,
      areaList: [],
      cityList: [],
      distList: []
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  directives: {
    TransferDom
  },
  components: {
    Group,
    Popup,
    Cell,
    Tab,
    TabItem,
    XButton,
    Swiper,
    SwiperItem,
    XSwitch
  },
  methods: {
    // 获取一级列表
    getAreaList (id) {
      this.$http({
        method: 'jsonp',
        url: 'http://liuwbox.com/zzbao/app/insurance/area.htm?id=' + id,
        jsonp: 'callback',
        jsonpCallback: 'json'
      })
      .then(res => {
        this.areaList = res.body.data.areaList
      })
      this.getArea(id)
    },
    // 获取二级列表
    findCity (id, text) {
      this.index = this.active = 1
      this.$http({
        method: 'jsonp',
        url: 'http://liuwbox.com/zzbao/app/insurance/area.htm?id=' + id,
        jsonp: 'callback',
        jsonpCallback: 'json'
      })
      .then(res => {
        this.cityList = res.body.data.areaList
      })
      this.tab[0] = text
      this.getArea(id)
    },
    // 获取三级列表
    findDist (id, text) {
      this.index = this.active = 2
      this.$http({
        method: 'jsonp',
        url: 'http://liuwbox.com/zzbao/app/insurance/area.htm?id=' + id,
        jsonp: 'callback',
        jsonpCallback: 'json'
      })
      .then(res => {
        this.distList = res.body.data.areaList
      })
      this.tab[1] = text
      this.getArea(id)
    },
    // 显示区域
    showDist (id, text) {
      this.tab[2] = text
      this.show = false
      this.selected = this.tab.join(' ')
      this.getArea(id)
    },
    // 提交数据
    submit () {
      this.show = false
      this.selected = this.tab.join(' ')
      this.getArea(this.selected)
      console.log(this.tab)
    },
    ...mapMutations({
      getArea: 'getInsuranceArea'
    })
  },
  created () {
    this.getAreaList(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{display:table;}
.col{display:table-cell;}.v-m{vertical-align:middle;}
.w-30{width:30%;}.w-70{width:70%;}.w{width:100%;}.bg-f{background:#fff;}

.select{padding-top:44px;padding-bottom:50px;box-sizing:border-box;overflow:hidden;}
.select-tab{margin-top:-44px;}
.select-list{height:100%;}
.select-btn{margin:10px 0;}
.select-btn button{display:inline-block;font-size:14px;}
.select-btn .col:first-child{padding:0 5px 0 10px;}
.select-btn .col:last-child{padding:0 10px 0 5px;}
.select-btn .col:first-child button{background:#ddd;color:#333;}

.list{padding:0 10px;}
.list li{font-size:14px;color:#333;padding:15px 10px;border-bottom:1px solid #e9e9e9;}
</style>
<style>
.select-text{font-size:14px;}
.vux-slider > .vux-swiper > .vux-swiper-item{overflow-y:auto;}
.vux-tab.select-tab .vux-tab-item{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
</style>
