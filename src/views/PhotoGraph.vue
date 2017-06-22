<template>
  <div class="page has-btn">
    <div class="content">
      <h3 class="module-title">车主信息</h3>
      <h4 class="sub-module-title sub-line">身份证</h4>
      <div class="plr-10">
        <h4 class="sub-module-title sub-line">身份正面照<span class="info">（请与证件类型保持一致，照片以身份证为例）</span></h4>
        <div class="tips icon" style="margin-top:0.8rem;">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>1.请用手机横向拍摄以保证图片正常显示</p>
              <p>2.请保证姓名、证件号码清晰可见</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img v-if="form.idCard" v-lazy="form.idCard" alt="">
          <img v-if="!form.idCard" v-lazy="{src: 'static/img/sfz.png', error: 'static/img/err1.png', loading: 'static/img/loading3.gif'}" alt="">
          <span class="iconfont icon-add" @click="handleTakePhoto">
            <input name="idcard" type="file" @change="handleFileChange" capture="camera" accept='image/*'>
          </span>
        </div>
      </div>
      <h3 class="module-title">车辆信息</h3>
      <h4 class="sub-module-title sub-line">行驶证</h4>
      <div class="plr-10">
        <h4 class="sub-module-title sub-line">行驶证件正面照</span></h4>
        <div class="tips icon" style="margin-top:0.8rem;">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>1.请用手机横向拍摄以保证图片正常显示；</p>
              <p>2.请保证车牌号码、品牌型号、车辆识别代号、发动机号、注册日期清晰可见</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img v-if="form.drivingLicense" v-lazy="form.drivingLicense" alt="">
          <img v-if="!form.drivingLicense" v-lazy="{src: 'static/img/jszf.png', error: 'static/img/err1.png', loading: 'static/img/loading3.gif'}" alt="">
          <span class="iconfont icon-add" @click="handleTakePhoto">
            <input name="license" type="file" @change="handleFileChange" capture="camera" accept='image/*'>
          </span>
        </div>
        <h4 class="sub-module-title sub-line">行驶证副本照</span></h4>
        <div class="tips icon" style="margin-top:0.8rem;">
          <ul class="row w">
            <li class="col v-m iconfont icon-zhuyi"></li>
            <li class="col v-m">
              <p>请用手机横向拍摄以保证图片正常显示</p>
            </li>
          </ul>
        </div>
        <div class="take-photo">
          <img v-if="form.subDrivingLicense" v-lazy="form.subDrivingLicense" alt="">
          <img v-if="!form.subDrivingLicense" v-lazy="{src: 'static/img/jsz.png', error: 'static/img/err1.png', loading: 'static/img/loading3.gif'}" alt="">
          <span class="iconfont icon-add" @click="handleTakePhoto">
            <input name="sublicense" type="file" @change="handleFileChange" capture="camera" accept='image/*'>
          </span>
        </div>
      </div>
    </div>
    <div class="btn-area row w">
      <div class="col v-m">
        <x-button type="warn" @click.native="handleSubmit">下一步</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import lrz from 'lrz/dist/lrz.all.bundle.js'
  import {XButton} from 'vux'
  export default {
    head: {
      title: {
        inner: '拍照上传'
      }
    },
    data () {
      return {
        form: {
          idCard: '',
          drivingLicense: '',
          subDrivingLicense: ''
        }
      }
    },
    components: {
      XButton
    },
    methods: {
      handleTakePhoto () {
      },
      handleFileChange (file) {
        let files = file.target.files
        const _this = this
        lrz(files[0]).then(rst => {
          switch (file.target.name) {
            case 'idcard':
              _this.form.idCard = rst.base64
              break
            case 'license':
              _this.form.drivingLicense = rst.base64
              break
            case 'sublicense':
              _this.form.subDrivingLicense = rst.base64
              break
          }
          console.log(rst)
        })
      },
      handleSubmit () {
        const id = this.$route.params.id
        if (!this.form.idCard || !this.form.drivingLicense || !this.form.subDrivingLicense) {
          this.$vux.toast.show({
            type: 'text',
            width: '10em',
            position: 'bottom',
            text: '请上传图片！',
            time: '1000'
          })
        } else {
          this.$localStorage.set('orderPic', JSON.stringify({
            idCard: this.form.idCard,
            drivingLicense: this.form.drivingLicense,
            subDrivingLicense: this.form.subDrivingLicense
          }))
          this.$router.push('/offer/select/' + id)
        }
      }
    }
  }
</script>
<style>
.iconfont input{width:100%;height:5rem;font-size:5rem;position:absolute;left:0;top:0;z-index:100;opacity:0;}
</style>
