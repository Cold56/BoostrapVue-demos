<template>
  <b-container>
    <!-- 默认为vertical，使用horizontal调整为水平排布 -->
    <b-list-group>
      <b-list-group-item v-for="( item, index ) in listItems" :key="index" :active="item.active"
        :disabled="item.disabled" :href="item.href" :variant="item.variant"
        class="d-flex justify-content-between align-content-baseline">{{ item.value
        }}<b-badge variant="info" pill>{{ item.num }}</b-badge></b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      listItems: [{
        value: 'I1',
        active: true,
        num: 10,
      }, {
        value: 'I2',
        active: null,
        disabled: true,
        num: 11,
      }, {
        value: 'I3',
        active: null,
        href: 'https://www.baidu.com',
        num: 22,
      }, {
        value: 'I4',
        active: null,
        variant: 'success',
        num: 12,
      }]
    }
  },
  methods: {
  },
}
</script>