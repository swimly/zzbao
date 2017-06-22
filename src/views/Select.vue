<template>
  <div class="page gray has-btn">
    <div class="h auto content">
      <group title="强制保险" class="select">
        <Cell v-for="(item, index) in forcedConfig" :key="index">
          <div class="checkbox full" slot="icon">
            <input type="radio" v-model="force.select" name="force" :id="'force' + index" value="1">
            <span class="iconfont icon-right1"></span>
            <label :for="'force' + index">{{item.text}}</label>
          </div>
        </Cell>
      </group>
      <group title="基本险" class="select">
        <Cell v-for="(item, index) in basicConfig" :key="index">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" v-model="basic[item.name].select" name="basic" :id="'basic' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'basic' + index">{{item.text}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.value">
            <select v-model="basic[item.name].value">
              <option v-for="(item, index) in item.value" v-bind:value="index">{{item}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.regardless" v-show="basic[item.name].select">
            <input type="checkbox" checked v-model="basic[item.name].regardless" name="basicReg" :id="'basicReg' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'basicReg' + index">不计免赔</label>
          </div>
        </Cell>
      </group>
      <group title="附加险" class="select">
        <Cell v-for="(item, index) in additionalConfig" :key="index" :class="item.value ? '' : 'long'">
          <div class="checkbox circle left" slot="icon">
            <input type="checkbox" v-model="additional[item.name].select" name="additional" :id="'additional' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'additional' + index">{{item.text}}</label>
          </div>
          <div class="form select" slot="title" v-if="item.value">
            <select v-model="additional[item.name].value">
              <option v-for="(item, index) in item.value" v-bind:value="index">{{item}}</option>
            </select>
          </div>
          <div class="checkbox circle right" slot="value" v-if="item.regardless" v-show="additional[item.name].select">
            <input type="checkbox" checked v-model="additional[item.name].regardless" name="additionalReg" :id="'additionalReg' + index">
            <span class="iconfont icon-dot"></span>
            <label :for="'additionalReg' + index">不计免赔</label>
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
  import SelectItem from '@/components/SelectItem'
  import {basic, additional, forced, submitOrder} from '../config'
  export default {
    data () {
      return {
        forcedConfig: forced,
        basicConfig: basic,
        additionalConfig: additional,
        forcedInsurance: '', // 强制保险
        lossInsurance: 0,
        force: {
          select: 1,
          name: '交通强险+车船税'
        },
        basic: {
          lossInsurance: {
            select: 0, // 车辆损失险
            name: '车辆损失保险',
            regardless: true // 不计免赔
          },
          thirdParty: {
            select: 0, // 第三者责任险
            name: '第三者责任险',
            value: '50万',
            regardless: true // 不计免赔
          },
          driverSeat: {
            select: 0, // 司机座位险
            name: '司机座位险',
            value: '6万/座',
            regardless: true // 不计免赔
          },
          passengerSeat: {
            select: 0, // 乘客座位险
            name: '乘客座位险',
            value: '1万/座',
            regardless: true // 不计免赔
          },
          robbery: {
            select: 0, // 盗抢险
            name: '盗抢险'
          }
        },
        additional: {
          glassCrushing: {
            select: 0, // 玻璃破碎险
            name: '玻璃破碎险',
            value: '国产',
            regardless: true
          },
          autoignition: {
            select: 0, // 自燃损失险
            name: '自燃损失险',
            regardless: true
          },
          wading: {
            select: 0, // 涉水险
            name: '涉水险',
            value: '1万/座',
            regardless: true
          },
          escape: {
            select: 0, // 三者逃逸险
            name: '无法找到第三方特约险',
            regardless: true
          },
          appointedSpecialist: {
            select: 0, // 指定专修厂特约险
            name: '指定专修厂特约险',
            regardless: true
          }
        }
      }
    },
    components: {
      Group,
      Cell,
      XButton,
      SelectItem
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
      handleSubmit () {
        let insurance = []
        let order = {}
        if (this.force.select) {
          insurance.push({
            name: this.force.name
          })
        }
        for (const i in this.basic) {
          if (this.basic[i].select) {
            insurance.push({
              name: this.basic[i].name,
              regardless: this.basic[i].regardless,
              value: this.basic[i].value || null
            })
          }
        }
        for (const i in this.additional) {
          if (this.additional[i].select) {
            insurance.push({
              name: this.additional[i].name,
              regardless: this.additional[i].regardless,
              value: this.additional[i].value || null
            })
          }
        }
        // this.$localStorage.set('orderInsurance', JSON.stringify(insurance))
        order = {
          company: JSON.parse(this.$localStorage.get('orderCompany')),
          user: JSON.parse(this.$localStorage.get('orderUser')),
          card: JSON.parse(this.$localStorage.get('orderPic')),
          insurance: JSON.parse(this.$localStorage.get('orderInsurance'))
        }
        // this.$localStorage.remove('orderCompany')
        // this.$localStorage.remove('orderInsurance')
        // this.$localStorage.remove('orderPic')
        // this.$localStorage.remove('orderUser')
        this.$localStorage.set('order', JSON.stringify(order))
        this.$http({
          method: 'jsonp',
          url: submitOrder,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: {
            userId: JSON.parse(this.$localStorage.get('userInfo')).userId,
            orderInfo: order
          },
          before: () => {
            this.loading = true
          }
        })
        .then(res => {
          console.log(res)
        })
        this.$router.push('/offer/success/' + this.$route.params.id)
      }
    }
  }
</script>
<style>
.select .weui-cell__hd{width:45%;}
.select .long .weui-cell__hd{width:70%;}
</style>
