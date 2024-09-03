<template>
  <!-- 悬浮详情框 -->
  <b-container>
    <!-- 使用button创建popover -->
    <!-- 方式一 -->
    <b-button v-b-popover.hover.top="'My first popover content'" title="Popover">First popover</b-button>
    <hr />
    <!-- 方式二 -->
    <b-button id="popover-target-1" variant="info">Hover me</b-button>
    <b-popover target="popover-target-1" triggers="hover" placement="top">
      <template v-slot:title>Popover title</template>
      I am popover <b>componet</b> content!
    </b-popover>
    <hr />
    <!-- 创建按键控制的popover -->
    <b-badge id="popover-button-evt" variant="info">Button-event-popover</b-badge>
    <b-popover ref="popover1" target="popover-button-evt" title="popover"></b-popover>
    <br>
    <b-button class="px-1 mr-2" @click="onOpen">Open</b-button>
    <b-button class="px-1" @click="onClose">Close</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    click1(event) {
      event.preventDefault();
    },
    onOpen() {
      this.$refs.popover1.$emit('open');
    },
    onClose() {
      this.$refs.popover1.$emit('close');
    }
  },
}
</script>