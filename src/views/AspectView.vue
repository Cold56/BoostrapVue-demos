<template>
  <!-- 本页面用来演示boostrap的栅格系统 -->
  <b-container>
    <!-- 下面这些用来改变长宽比 -->
    <b-button @click="changeAspect('2:1')">2:1</b-button>
    <b-button @click="changeAspect('4:3')">4:3</b-button>
    <b-button @click="changeAspect('16:9')">16:9</b-button>

    <!-- 使用:aspect来改变长宽比 -->
    <b-aspect :aspect="aspect" style="border:1px solid black">
      My aspect:{{ aspect }}
    </b-aspect>
    <hr />
    <b-row>
      <b-col>
        <b-aspect :aspect="aspect" style="border:1px solid black">
          My aspect:{{ aspect }}
        </b-aspect>
      </b-col>
      <b-col>
        <b-aspect :aspect="aspect" style="border:1px solid black">
          My aspect:{{ aspect }}
        </b-aspect>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      aspect: '2:1'
    }
  },
  methods: {
    changeAspect(aspectVal) {
      this.aspect = aspectVal
    }
  },
}
</script>