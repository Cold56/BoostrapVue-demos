<template>
  <b-container>
    <!-- 默认为灰色，长方形 -->
    <b-badge class="mr-1">
      Default badge
    </b-badge>
    <!-- badge也可以选择类型来变成不同的样式 -->
    <b-badge variant="success" class="mr-1">
      Success badge
    </b-badge>
    <b-badge variant="primary" class="mr-1">
      Primary badge
    </b-badge>
    <b-badge variant="danger" class="mr-1">
      Danger badge
    </b-badge>
    <hr />
    <!-- 下面使用pill让他变成药丸形状 -->
    <b-badge pill variant="info" class="mr-1">
      1.24
    </b-badge>
    <hr />
    <!-- 在实际中可以作为批量陈述的道具（气泡） -->
    <b-badge v-for="(val, index) of skills" :key="index" class="mr-1" style="cursor:pointer" variant="primary"
      @click="Deleteit(index)">
      {{ val }}
    </b-badge>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      skills: ['PHP', 'Python', 'Node', 'VueJS']
    }
  },
  methods: {
    Deleteit(index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>
