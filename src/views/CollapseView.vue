<template>
  <!-- 下拉框 -->
  <b-container>
    <!-- v-b-toggle用来连接下拉内容（比如下面的，连接的为id为collapse-1的内容） -->
    <b-button size="lg" v-b-toggle.collapse-1 variant="primary"> 查看问题</b-button>
    <b-collapse id="collapse-1">
      <b-card>
        <p class="card-text">
          1+1=?
        </p>
        <b-button size="lg" v-b-toggle.collapse-2 variant="info">查看答案</b-button>
        <b-collapse id="collapse-2">
          <b-card>
            <p>答案为2</p>
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
