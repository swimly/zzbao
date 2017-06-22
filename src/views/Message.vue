<template>
  <div class="page gray">
    <group gutter="0px" v-if="list.length > 0">
      <cell value-align="left" v-for="(item, index) in list" :key="index">
        <h2 class="time">{{item.time}}</h2>
        <p class="text">{{item.title}}<badge v-if="!item.read"></badge></p>
      </cell>
    </group>
    <h2 class="tip" v-if="list.length === 0">您暂时没有任何消息！</h2>
  </div>
</template>
<script>
  import {Group, Cell, Badge} from 'vux'
  import {message} from '../config'
  export default {
    components: {
      Group,
      Cell,
      Badge
    },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.$http({
        method: 'jsonp',
        url: message,
        jsonp: 'callback',
        jsonpCallback: 'json',
        params: {
          userId: JSON.parse(this.$localStorage.get('userInfo')).userId,
          limit: 10,
          pageIndex: 0
        }
      })
      .then(res => {
        console.log(res)
        if (res.body.status) {
          this.list = res.body.data.messageList
        } else {
          this.$vux.toast.show({
            type: 'text',
            width: '10em',
            position: 'bottom',
            text: res.body.msg,
            time: '1000'
          })
        }
      })
    }
  }
</script>
<style scoped>
.time{font-size:1rem;}
.text{font-size:1.1rem;color:#5B5B5B;line-height:2;}
.tip{font-size:1.2rem;color:#999;text-align:center;padding:3rem 0;}
</style>
