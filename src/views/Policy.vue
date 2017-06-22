<template>
  <div class="page gray">
    <group gutter="0px">
      <cell>
        <p slot="title">保单城市：武汉市</p>
        <p slot="default">太平洋保险</p>
      </cell>
    </group>
    <group gutter="10px">
      <cell title="商业险"></cell>
      <cell-form-preview :list="insurance1"></cell-form-preview>
    </group>
    <group gutter="10px">
      <cell>
        <p slot="title">交强险<span class="c-9">（含车船费）</span></p>
      </cell>
      <cell-form-preview :list="insurance2"></cell-form-preview>
    </group>
  </div>
</template>
<script>
  import {Group, Cell, CellFormPreview} from 'vux'
  export default {
    head: {
      title: {
        inner: '保单信息'
      }
    },
    components: {
      Group,
      Cell,
      CellFormPreview
    },
    data () {
      return {
        insurance1: [{
          label: '车辆损失保险',
          value: '车辆损失保险'
        }, {
          label: '第三者责任保险',
          value: '50.00万元'
        }, {
          label: '司机座位险',
          value: '1.00万元'
        }, {
          label: '乘客座位险',
          value: '1万/座'
        }, {
          label: '盗抢险',
          value: '投保'
        }, {
          label: '不计免赔（车损）',
          value: '投保'
        }, {
          label: '不计免赔（三者）',
          value: '投保'
        }, {
          label: '不计免赔（司机）',
          value: '投保'
        }, {
          label: '不计免赔（乘客）',
          value: '投保'
        }, {
          label: '不计免赔（盗抢）',
          value: '投保'
        }],
        insurance2: [{
          label: '交强险',
          value: '投保'
        }, {
          label: '车船费',
          value: '缴纳'
        }]
      }
    }
  }
</script>
<style scoped>
.c-9{color:#999;font-size:1rem;}
</style>
