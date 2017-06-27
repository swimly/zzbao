<template>
  <div class="page gray auto">
    <group gutter="0px">
      <cell>
        <p slot="title">保单城市：</p>
        <p slot="default"></p>
      </cell>
    </group>
    <!--<group gutter="10px">
      <cell title="商业险"></cell>
      <cell-form-preview :list="insurance"></cell-form-preview>
    </group>
    <group gutter="10px">
      <cell>
        <p slot="title">交强险<span class="c-9">（含车船费）</span></p>
      </cell>
      <cell-form-preview :list="force"></cell-form-preview>
    </group>-->
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
        order: JSON.parse(this.$localStorage.get('orderDetail')),
        force: [],
        insurance: [],
        regard: []
      }
    },
    created () {
      console.log(this.order)
      // const insurance = this.order.orderInfo.insurance
      // console.log(insurance)
      // for (const key in insurance) {
      //   switch (parseInt(insurance[key].type)) {
      //     case 0:
      //       this.force.push({
      //         label: insurance[key].name,
      //         value: insurance[key].value
      //       })
      //       break
      //     case 1:
      //       this.insurance.push({
      //         label: insurance[key].name,
      //         value: insurance[key].extra.split(',')[insurance[key].value]
      //       })
      //       if (insurance[key].regardless) {
      //         this.regard.push({
      //           label: '不计免赔（' + insurance[key].name + '）',
      //           value: '投保'
      //         })
      //       }
      //       break
      //     case 2:
      //       this.insurance.push({
      //         label: insurance[key].name,
      //         value: insurance[key].extra.split(',')[insurance[key].value]
      //       })
      //       if (insurance[key].regardless) {
      //         this.regard.push({
      //           label: '不计免赔（' + insurance[key].name + '）',
      //           value: '投保'
      //         })
      //       }
      //       break
      //   }
      // }
      // this.insurance.forEach(el => {
      //   if (el.value) {
      //     el.value = el.value.split(':')[1]
      //   }
      // })
      // for (const i in this.regard) {
      //   this.insurance.push(this.regard[i])
      // }
    }
  }
</script>
<style scoped>
.c-9{color:#999;font-size:1rem;}
</style>
