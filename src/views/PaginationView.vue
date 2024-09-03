<template>
  <b-container>
    <!-- 分页pagination（用于页面下方来切换页面） -->
    <label>分页pagination</label>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
    </b-pagination>
    <!-- 更改各个位置的文本 -->
    <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" first-text="First"
      prev-text="Prev" next-text="Next" last-text="Last">
    </b-pagination>
    <!-- 不同位置 -->
    <b-pagination align="left" v-model="currentPage" :total-rows="rows" :per-page="perPage" first-text="First"
      prev-text="Prev" next-text="Next" last-text="Last">
    </b-pagination>
    <b-pagination align="right" v-model="currentPage" :total-rows="rows" :per-page="perPage" first-text="First"
      prev-text="Prev" next-text="Next" last-text="Last">
    </b-pagination>
    <!-- 铺满 -->
    <b-pagination align="fill" v-model="currentPage" :total-rows="rows" :per-page="perPage" first-text="First"
      prev-text="Prev" next-text="Next" last-text="Last">
    </b-pagination>
    <hr />
    <!-- pagination-nav -->
    <label>pagination-nav</label>
    <!-- link-gen用于改变网站 -->
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router>
    </b-pagination-nav>
    <!-- 用pagination-nav定位到不同本工程一部分不同页面 -->
    <b-pagination-nav :link-gen="linkPages" :number-of-pages="5" use-router align="center"></b-pagination-nav>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 5,
      //页数等于rows/perPage
      rows: 200,
      perPage: 20,
    }
  },
  methods: {
    // 这个会使链接改变
    linkGen(pageNum) {
      // 下面这种就是在初始的链接后面加上?page=num（num是非2的数字，因为有?，表示query，所以直接添加到后面）
      return pageNum === 1 ? '?' : `?page=${pageNum}`
      // 下面这种会把网址变成/hello-world-2?Pagenum（Pagenum是变量，规律是path直接替换掉/后面的，?直接添加到原先的链接后面）
      // return{
      //  path:'/hello-world-2',
      //  query:{
      //    page:pageNum
      //  }
      //}
    },
    linkPages(num) {
      const Pages = ['/alert', '/aspect', '/avatar', '/badge', '/breadcrumb']
      const index = num - 1
      return {
        path: Pages[index]
      }
    }
  },
}
</script>
