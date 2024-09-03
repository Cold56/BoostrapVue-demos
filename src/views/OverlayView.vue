<template>
  <b-container>
    <!-- 加载界面（覆盖层）overlay -->
    <h5>加载界面overlay</h5>
    <!-- opacity是透明度，越小越透；blur是模糊效果，越大越模糊；spinner用来控制旋转的指针 -->
    <b-overlay :show="show" rounded="sm" opacity="0.75" blur="0.5rem" variant="primary" spinner-variant="warning"
      spinner-type="grow">
      <!-- :aria-hidden用来告诉屏幕阅读器不需要读取这部分内容 -->
      <b-card title="Card with overlay" :aria-hidden="show ? true : null" bg-variant="info">
        <b-card-text>Card custom text here</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">Show overlay</b-button>
      </b-card>
    </b-overlay>
    <!-- 按钮用v-show出bug机率少 -->
    <b-button class="mt-3" v-show="show" variant="danger" @click="show = !show">Cancel</b-button>
    <hr />
    <h5>自定义加载页面</h5>
    <b-overlay :show="show2" rounded="sm" opacity="1">
      <b-card title="Card with overlay" :aria-hidden="show2 ? true : null">
        <b-card-text>Card custom text here</b-card-text>
        <b-button :disabled="show2" variant="primary" @click="show2 = true">Upload photo</b-button>
      </b-card>
      <template v-slot:overlay>
        <div class="text-center"><b-icon icon="image" font-scale="3" animation="cylon"></b-icon></div>
        <p>Uploading plz wait</p>
        <b-button class="mt-3" v-show="show2" variant="danger" @click="show2 = !show2">Cancel</b-button>
      </template>
    </b-overlay>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
    }
  },
  methods: {
  },
}
</script>