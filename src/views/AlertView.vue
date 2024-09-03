<template>
  <b-container>
    <!-- 下面演示警告 -->
    <b-button variant="success" @click="showAlert()">
      Change Hello World
    </b-button>
    <b-alert :show="!isShow" variant="warning">
      this is HelloWorld's showing(warning)
    </b-alert>
    <b-alert :show="isShow" variant="danger">
      this is HelloWorld's showing(danger)
    </b-alert>
    <!-- cursor:pointer可以让鼠标在接触元素时变成手指 -->
    <span v-show="isShow" @click="toggle_alert" style="cursor:pointer">Success</span>
    <!-- 下面使用了fade来加入渐变，让页面效果更好看；同时使用dismissable让alert可以被关掉 -->
    <b-alert :show="sc" dismissible fade variant="success" @dismissed="dsCallback">
      U have successed
    </b-alert>

  </b-container>
</template>

<script>
export default {
  data() {
    return {
      sc: false,
      isshow: false
    }
  },
  methods: {
    showAlert() {
      this.isshow = !this.isshow
      this.sc = false
    },
    toggle_alert() {
      this.sc = !this.sc
    },
    dsCallback() {
      this.sc = false
      console.log('U have close it')
    }
  },
  computed: {
    isShow() {
      return this.isshow
    }
  }
}
</script>
