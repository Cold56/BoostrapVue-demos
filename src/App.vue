<template>
  <div id="app">
    <nav>
      <router-link to="/alert">Alert</router-link> |
      <router-link to="/aspect">Aspect</router-link> |
      <router-link to="/avatar">Avatar</router-link> |
      <router-link to="/badge">Badge</router-link> |
      <router-link to="/breadcrumb">Breadcrumb</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/calendar">Calendar</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/carousel">Carousel</router-link> |
      <router-link to="/collapse">Collapse</router-link> |
      <router-link to="/dropdown">Dropdown</router-link> |
      <router-link to="/embeded">Embeded</router-link><br>
      <router-link to="/form">Form</router-link> |
      <router-link to="/formcustom">FormCustom</router-link> |
      <router-link to="/jumbotron">Jumbotron</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/modal">Modal</router-link> |
      <router-link to="/nav">Nav</router-link> |
      <router-link to="/overlay">Overlay</router-link> |
      <router-link to="/pagination">Pagination</router-link> |
      <router-link to="/popover">Popover</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
