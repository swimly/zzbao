<template>
  <scroller class="page gray row w feedback">
    <div class="col v-t t-l p-1" style="padding-top:0;">
      <group title="反馈意见">
        <x-textarea v-model="form.content"></x-textarea>
      </group>
      <group title="联系方式">
        <x-input is-type="china-mobile" v-model="form.phone"></x-input>
      </group>
      <x-button type="warn" style="margin-top:2rem;" :show-loading="loading" @click.native="handleSubmit">提交</x-button>
    </div>
  </scroller>
</template>
<script>
  import {Group, Cell, XInput, XTextarea, XButton} from 'vux'
  import {feedback} from '../config'
  export default {
    head: {
      title: {
        inner: '意见反馈'
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      XTextarea,
      XButton
    },
    data () {
      return {
        loading: false,
        form: {
          userId: '',
          content: '',
          phone: ''
        }
      }
    },
    mounted () {
      this.form.userId = JSON.parse(this.$localStorage.get('userInfo')).userId
    },
    methods: {
      handleSubmit () {
        this.$http({
          method: 'jsonp',
          url: feedback,
          jsonp: 'callback',
          jsonpCallback: 'json',
          params: this.form,
          before: () => {
            this.loading = true
          }
        })
        .then(res => {
          console.log(res)
          this.loading = false
          this.form.content = this.form.phone = ''
          if (res.body.status) {
            this.$vux.toast.show({
              type: 'text',
              width: '12em',
              position: 'bottom',
              text: '已收到您的反馈！',
              time: '1000'
            })
          } else {
            this.$vux.toast.show({
              type: 'text',
              width: '12em',
              position: 'bottom',
              text: res.body.msg,
              time: '1000'
            })
          }
        })
      }
    }
  }
</script>
<style>
.feedback .weui-cells{border-left:1px solid #eee;border-right:1px solid #eee;}
</style>
