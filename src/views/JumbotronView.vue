<template>
  <!-- 超大屏幕 -->
  <b-container>
    <!-- 写法一 -->
    <b-jumbotron header="BoostrapVue" lead="content inside our jumbotron sample"></b-jumbotron>
    <!-- 写法二 -->
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="black">
      <template v-slot:header>BoostrapVue</template>
      <template v-slot:lead>content inside our jumbotron sample</template>
      <hr />
      <p>Here is the main content</p>
      <b-button variant="success" class="mr-2"
        @click="feedback = 'Thanks for your upvote'; variant1 = 'success'">Upvote</b-button>
      <b-button variant="outline-danger"
        @click="feedback = 'Sorry for your downvote'; variant1 = 'danger'">Downvote</b-button>
      <b-alert dismissible :variant="variant1" @dismissed="feedback = ''" :show="feedback !== ''">{{ feedback
        }}</b-alert>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      feedback: '',
      variant1: '',
    }
  },
  methods: {
  },
}
</script>