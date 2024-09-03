<template>
  <!-- 用于创建词条 -->
  <b-container>
    <b-media no-body>
      <b-media-aside><b-img blank blank-color="#ccc" width="64" alt="My placeholder"></b-img></b-media-aside>
      <b-media-body>
        <h2>Media body</h2>
        <p>Some text here</p>
      </b-media-body>
    </b-media>
    <hr />
    <ul class="list-unstyled">
      <b-media tag="li" class="my-4">
        <template v-slot:aside>
          <b-img blank blank-color="#abc" width="64" alt="My place holder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">List-based media object</h5>
        <p class="mb-0">area 1</p>
      </b-media>
      <b-media tag="li" class="my-4">
        <template v-slot:aside>
          <b-img blank blank-color="#bac" width="64" alt="My place holder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">List-based media object</h5>
        <p class="mb-0">area 2</p>
      </b-media>
    </ul>
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