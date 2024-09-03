<template>
  <b-container>
    <!-- 单个按钮 -->
    <b-button variant="primary" class="mr-2" @click="Hi">default button</b-button>
    <!-- 第二个按钮设置为不可用，颜色变淡 -->
    <b-button variant="info" class="mr-2" disabled>disabled button</b-button>
    <!-- 第三个设置为超链接，并使用target设置为在新窗口打开页面 -->
    <b-button variant="link" href="https://www.baidu.com" target="_blank" class="mr-2">Href button</b-button>
    <!-- 大小按钮，同时设置为描边类型 -->
    <b-button size="lg" class="mr-2" variant="outline-primary">large button</b-button>
    <b-button size="sm" class="mr-2" variant="outline-info">Small button</b-button>
    <hr />
    <!-- 满区域按钮，并设置不同的形状 -->
    <b-button block variant="outline-warning">block button</b-button>
    <hr />
    <b-row>
      <b-col>
        <b-button pill block variant="outline-danger">left block button</b-button>
      </b-col>
      <b-col>
        <b-button squared block variant="outline-success">right block button</b-button>
      </b-col>
    </b-row>
    <hr />

    <!-- 按钮组 -->
    <!-- 不指定形状时，按钮组整体构成一个形状 -->
    <b-button-group class="mr-2">
      <b-button variant="primary">bt-1</b-button>
      <!-- 组内可以添加下拉框，同时设定紧贴右侧展开，并使用split把三角和按钮分开（但是不能再作为一个按键使用了） -->
      <b-dropdown right text="bt-2" variant="danger" split>
        <b-dropdown-item>op-1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>op-2</b-dropdown-item>
      </b-dropdown>
      <b-button variant="warning">bt-3</b-button>
    </b-button-group>
    <!-- 下面是竖直形状的按钮组 -->
    <b-button-group vertical class="mr-2">
      <b-button variant="primary">bt-1</b-button>
      <b-button variant="danger">bt-2</b-button>
      <b-button variant="warning">bt-3</b-button>
    </b-button-group>

    <!-- toolbar -->
    <b-button-toolbar>
      <b-button-group>
        <!-- 左双箭头和单箭头 -->
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="ml-2">
        <b-button>1</b-button>
        <b-button>2</b-button>
        <b-button>3</b-button>
      </b-button-group>
      <b-dropdown text="dp" right class="ml-2 mr-2">
        <b-dropdown-item>dp-1</b-dropdown-item>
        <b-dropdown-item>dp-2</b-dropdown-item>
      </b-dropdown>
      <b-button-group>
        <b-button>&raquo;</b-button>
        <b-button>&rsaquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    Hi() {
      console.log('Hi!')
    }
  }
}
</script>
