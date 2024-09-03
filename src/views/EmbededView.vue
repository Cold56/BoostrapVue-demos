<template>
  <!-- 用于嵌入视频 -->
  <b-container>
    <!-- 嵌入方法一 -->
    <b-embed type="iframe" aspect="4by3" autoplay="false"
      src="http://player.bilibili.com/player.html?isOutside=true&aid=361686224&bvid=BV1494y1e7Bf&cid=1217918725&p=1"
      allowfullscreen>
    </b-embed>
    <hr />
    <!-- 嵌入方法二（一般用于本地视频和指导格式的网页视频），不会有原网页一些奇奇怪怪的插件（比如不会自动播放） -->
    <b-embed type="video" aspect="16by9" controls
      poster="https://img1.baidu.com/it/u=593047415,2808318622&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">
      <!-- 这种方法不推荐 -->
      <source src="../assets/boy青天.mp4" type="video/mp4">
    </b-embed>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
