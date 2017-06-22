<template>
  <div class="page gray has-btn">
    <div class="h auto content">
      {{forceValue}}
      <group title="强制保险" class="select" v-if="force">
        <Cell class="long">
          <div class="checkbox full" slot="icon">
            <input type="checkbox" checked name="force" id="force" :value="forceValue">
            <span class="iconfont icon-right1"></span>
            <label for="force">{{forceName}}</label>
          </div>
        </Cell>
      </group>
      {{basic[1]}}
      <group title="基本险" class="select" v-if="basic">
        <Cell v-for="(item, index) in basic" :key="index">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" name="basic" v-model="item.value" :id="'b' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'b' + index">{{item.name}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.extra">
            <select v-model="item.sum">
              <option v-for="(item, index) in item.extra.split(',')" v-bind:value="item.split(':')[0]">{{item.split(':')[1]}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.value">
            <input type="checkbox" checked name="basicReg" :id="'bg' + index" v-model="item.regardless">
            <span class="iconfont icon-dot"></span>
            <label :for="'bg' + index">不计免赔</label>
          </div>
        </Cell>
      </group>
      {{additional[0]}}
      <group title="附加险" class="select" v-if="additional">
        <Cell v-for="(item, index) in additional" :key="index">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" name="basic" v-model="item.value" :id="'a' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'a' + index">{{item.name}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.extra">
            <select v-model="item.sum">
              <option v-for="(item, index) in item.extra.split(',')" v-bind:value="item.split(':')[0]">{{item.split(':')[1]}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.value">
            <input type="checkbox" checked name="basicReg" :id="'ag' + index" v-model="item.regardless">
            <span class="iconfont icon-dot"></span>
            <label :for="'ag' + index">不计免赔</label>
          </div>
        </Cell>
      </group>
    </div>
    <div class="btn-area row w">
      <div class="col v-m">
        <x-button type="warn" @click.native="handleSubmit">提交报价</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Group, Cell, XButton} from 'vux'
  import {mapGetters} from 'vuex'
  import {insurance} from '../config'
  // import {submitOrder, insurance} from '../config'
  export default {
    data () {
      return {
        force: [],
        basic: [],
        additional: [],
        forceName: '',
        forceValue: []
      }
    },
    components: {
      Group,
      Cell,
      XButton
    },
    mounted () {
      this.handleInsurance()
    },
    created () {
      console.log(this.$route.params.id)
    },
    computed: {
      ...mapGetters({
        order: 'getOrder'
      })
    },
    methods: {
      handleInsurance () {
        this.$http({
          method: 'jsonp',
          url: insurance,
          jsonp: 'callback',
          jsonpCallback: 'json'
        })
        .then(res => {
          const result = res.body.data.insuranceList
          result.forEach(item => {
            item.value = false
            item.sum = item.extra.split(',')[0].split(':')[0]
            switch (item.type) {
              case 0:
                this.force.push(item)
                break
              case 1:
                this.basic.push(item)
                break
              case 2:
                this.additional.push(item)
                break
            }
          })
          this.force.forEach(item => {
            this.forceValue.push(item.id)
            this.forceName += '+' + item.name
          })
        })
      },
      handleSubmit () {
        console.log(this.force, this.basic, this.additional)
      }
    }
  }
</script>
<style>
.select .weui-cell__hd{width:45%;}
.select .long .weui-cell__hd{width:70%;}
</style>
