<template>
  <div class="page gray">
    <group gutter="0px">
      <cell>
        <p slot="title">保单城市：{{info.user.insuranceArea}}</p>
        <p slot="default">{{info.company.companyName}}</p>
      </cell>
    </group>
    <group gutter="10px">
      <cell title="商业险"></cell>
      <cell-form-preview :list="insurance"></cell-form-preview>
    </group>
    <group gutter="10px">
      <cell>
        <p slot="title">交强险<span class="c-9">（含车船费）</span></p>
      </cell>
      <cell-form-preview :list="force"></cell-form-preview>
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
        info: JSON.parse(this.$localStorage.get('order')),
        force: [],
        insurance: []
      }
    },
    created () {
      for (const key in this.info.insurance) {
        switch (parseInt(this.info.insurance[key].type)) {
          case 0:
            this.force.push({
              label: this.info.insurance[key].name,
              value: this.info.insurance[key].value
            })
            break
          case 1:
            this.insurance.push({
              label: this.info.insurance[key].name,
              value: this.info.insurance[key].value
            })
            break
          case 2:
            this.insurance.push({
              label: this.info.insurance[key].name,
              value: this.info.insurance[key].value
            })
            break
        }
      }
      console.log(this.force)
    }
  }
</script>
<style scoped>
.c-9{color:#999;font-size:1rem;}
</style>
