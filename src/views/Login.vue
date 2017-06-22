<template>
  <div class="page row gray login">
    <div class="col v-m t-c">
      <img src="static/img/logo.png" alt="" class="logo">
      <div class="form-panel login">
        <group gutter="10px">
          <x-input placeholder="请输入手机号码" v-model="form.tel" type="tel" ref="tel" is-type="china-mobile" required @on-blur="handleCheckPhone">
            <span class="iconfont icon-shouji" slot="label"></span>
          </x-input>
        </group>
        <group gutter="10px">
          <x-input placeholder="请输入密码" ref="pwd" required v-model="form.pwd" type="password">
            <span class="iconfont icon-mima" slot="label"></span>
          </x-input>
        </group>
        <group gutter="10px">
          <x-button type="warn" @click.native="handleSubmit" :show-loading="loading">登录</x-button>  <!--show-loading-->
        </group>
      </div>
      <ul class="row w devision">
        <li class="col v-m item t-r">
          <router-link to="/register" class="link c-n">立即注册</router-link>
        </li>
        <li class="col v-m item t-l">
          <router-link to="password" class="link c-n">忘记密码？</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  import {XButton, Group, Cell, XInput} from 'vux'
  export default {
    head: {
      title: {
        inner: '用户登录'
      }
    },
    data () {
      return {
        loading: false,
        form: {
          tel: '', // 13164620282
          pwd: ''
        }
      }
    },
    created () {
      if (this.$localStorage.get('logined') === 'true') {
        this.$router.replace('/offer')
      }
    },
    computed: {
      ...mapGetters({
        checkAuthor: 'checkAuthor'
      })
    },
    components: {
      XButton,
      Group,
      Cell,
      XInput
    },
    methods: {
      ...mapMutations({
        postLogin: 'postLogin'
      }),
      handleSubmit () {
        this.postLogin(this)
      },
      handleCheckPhone () {
        if (!this.$refs.tel.valid) {
          this.$vux.toast.show({
            type: 'text',
            width: '20em',
            position: 'top',
            text: '手机号码有误，请确认后填写！',
            time: '1000'
          })
        }
      }
    }
  }
</script>
<style>
.form-panel .weui-cells{border-left:1px solid #eee;border-right:1px solid #eee;}
.form-panel .iconfont{color:#959595;font-size:1.8rem;padding-right:0.5rem;}
</style>

