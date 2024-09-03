<!-- avatar用来制作头像 -->
<template>
  <b-container>
    <b-avatar src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
    <b-avatar src="https://placekitten.com/310/310" size="24px" class="mr-2"></b-avatar>
    <b-avatar src="https://placekitten.com/320/320" :size="42" class="mr-2"></b-avatar>
    <b-avatar src="https://placekitten.com/330/330" size="6rem" class="mr-2"></b-avatar>
    <hr />
    <!-- 下面的是内置头像 -->
    <b-avatar icon="star-fill" class="mr-2"></b-avatar>
    <!-- 用文字作为头像，同时所有头像都可以使用variant变换成预制颜色的头像，还可以传入图形来改变形状 -->
    <b-avatar variant="warning" square class="mr-2">hh</b-avatar>
    <b-avatar variant="info" rounded="sm" class="mr-2">hh</b-avatar>
    <b-avatar variant="danger" rounded="lg" class="mr-2">hh</b-avatar>
    <b-avatar variant="dark" rounded="top" class="mr-2">hh</b-avatar>
    <hr />
    <!-- 如果要加上名字，可以这样子。放进text的文字会进图片，但是变成全大写。align-baseline是基准线对齐 -->
    <b-avatar variant="primary" text="hh" class="align-baseline"></b-avatar>名字为hh
    <hr />
    <!-- 加上用户未读信息，并使用template显示数量等等内容 -->
    <b-avatar badge text="hh">
      <template v-slot:badge>
        4
      </template>
    </b-avatar>
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
  computed: {

  }
}
</script>
