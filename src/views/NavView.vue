<template>
  <b-container>
    <!-- 可以和Breadcrumb一样用于页面跳转，也可以作为单页面的选项卡，但是样式更加简朴 -->
    <!-- Navbar -->
    <h5>导航栏Navbar</h5>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- 大标志 -->
      <b-navbar-brand href="#">
        <b-avatar square src="https://placekitten.com/g/30/30" alt="Kitten"></b-avatar>
        NavBar
      </b-navbar-brand>
      <!-- 小标志，并使用toggle，让他在小屏幕时收到下拉框（is-nav不能省略，这个用于平衡大屏小屏的差距） -->
      <b-navbar-toggle target="navbarToggle"></b-navbar-toggle>
      <b-collapse id="navbarToggle" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/modal">Jump2modal</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item-dropdown right text="Dropdown">
            <b-dropdown-item>Op1</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Op2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Op3</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <hr />
    <!-- 普通nav -->
    <h5>普通nav</h5>
    <!-- tabs会产生一些方框，让页面更有动态 -->
    <label>带上tabs</label>
    <b-nav tabs>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Anothor Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    <hr />
    <!-- pills让被选中的选项有药丸形状 -->
    <label>带上pills</label>
    <b-nav pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Anothor Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    <hr />
    <!-- 长得很像collapse -->
    <label>变成垂直的</label>
    <b-nav vertical tabs>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Anothor Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    <hr />
    <!-- 正常形式 -->
    <label>常见形式</label>
    <b-nav tabs>
      <b-nav-item>Simple</b-nav-item>
      <b-nav-item-dropdown right text="Dropdown">
        <b-dropdown-item>Op1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Op2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Op3</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-form @submit.stop.prevent="submitForm">
        <b-form-input class="mr-1" v-model="searchQuery"></b-form-input>
        <b-button type="submit" variant="primary"><b-icon-search></b-icon-search></b-button>
      </b-nav-form>
    </b-nav>
    <b-alert :show="alertContent !== ''">{{ alertContent }}</b-alert>
    <hr />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      alertContent: ''
    }
  },
  methods: {
    submitForm() {
      if (this.searchQuery) {
        this.alertContent = 'What ever!';
      }
    }
  }
}
</script>