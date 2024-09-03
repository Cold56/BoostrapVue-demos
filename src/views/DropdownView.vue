<template>
  <!-- 硬邦邦的下拉框 -->
  <b-container>
    <!-- 定义为紧贴右边生成下拉 -->
    <b-dropdown size="lg" right variant="success">
      <!-- 使用插槽自定义按键文字类型 -->
      <template v-slot:button-content>
        The <strong>Dropdown</strong> button
      </template>
      <b-dropdown-item>First item</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Second item</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Third item</b-dropdown-item>
    </b-dropdown>
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
