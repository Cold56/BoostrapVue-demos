<template>
  <b-container>
    <b-form-tags v-model="tagVal1" no-outer-focus="mb-2">
      <template v-slot="{ inputAttrs, inputHandlers, addTag, removeTag }">
        <b-form-group>
          <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="New tag, press enter to add"
            class="form-control mb-2"></b-form-input>
          <b-input-group-append>
            <!-- 自定义模板调用内置函数需要加括号 -->
            <b-button @click="addTag()" variant="primary">Add</b-button>
          </b-input-group-append>
        </b-form-group>

        <div class="d-inline-block" style="font-size:1.5rem">
          <b-form-tag v-for="tag in tagVal1" :key="tag" @remove="removeTag(tag)" :title="tag" class="mr-1"
            variant="primary">{{ tag }}</b-form-tag>
        </div>
      </template>
    </b-form-tags>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      tagVal1: null,
    }
  },
  methods: {
  },
}
</script>
