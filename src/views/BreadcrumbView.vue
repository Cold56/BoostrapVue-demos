<template>
  <b-container>
    <!-- 其实就是超链接 -->
    <b-breadcrumb>
      <b-breadcrumb-item href="#Home">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="#Blog">Blog</b-breadcrumb-item>
      <b-breadcrumb-item active>Hello world!</b-breadcrumb-item>
    </b-breadcrumb>
    <hr />
    <!-- 如果要读入数组，这样子写 -->
    <b-breadcrumb :items="bcItems"></b-breadcrumb>
    <hr />
    <!-- 也可以这样子写 -->
    <b-breadcrumb>
      <b-breadcrumb-item v-for="(val, index) of bcItems" :key="index" :active="val.active" :href="val.href">
        <!-- 这里做一个小小的条件判断来展示diy的可能性 -->
        <span style="color:pink" v-if="val.text === 'Blog'">
          {{ val.text }}
        </span>
        <template v-else>
          {{ val.text }}
        </template>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      bcItems: [{
        text: 'Home',
        href: "#Home",
      }, {
        text: 'Blog',
        href: "#Blog",
      }, {
        text: 'Hello world!',
        active: true,
      }]
    }
  },
  methods: {

  }
}
</script>
