<template>
  <b-container>
    <b-row>
      <b-col md="auto">
        <b-calendar v-model="selectedDate" @context="onContext" locale="zh-CN"></b-calendar>
      </b-col>
      <b-col>
        <p>Value:<code>{{ selectedDate }}</code></p>
        <p class="mb-0">Context</p>
        <pre class="small">
          {{ context }}
        </pre>
      </b-col>
    </b-row>
    <hr />
    <!-- 日历可以设置为只读或者禁用 -->
    <b-row>
      <b-col>
        <b-calendar readonly locale="zh-CN"></b-calendar>
      </b-col>
      <b-col>
        <b-calendar disabled locale="zh-CN"></b-calendar>
      </b-col>
    </b-row>
    <hr />
    <!-- 也可以限制日期数等等，date-disabled-fn用来连接限制日期的函数 -->
    <b-row>
      <b-col>
        <b-calendar :min="min" :max="max" :date-disabled-fn="dateDisabledFn" locale="zh-CN"></b-calendar>
      </b-col>
    </b-row>
    <hr />
    <!-- 为日历设置样式以及交互，date-info-fn用来连接对于不同条件指定不同样式的函数 -->
    <b-calendar block locale="zh-CN" v-model="val" :date-info-fn="dayClass">
    </b-calendar>
    <b-button-group class="d-flex">
      <b-button size="sm" variant="outline-danger" v-if="val" @click="cleanDate">Clear date</b-button>
      <b-button size="sm" variant="outline-info" @click="setToday">Set today</b-button>
    </b-button-group>
  </b-container>
</template>

<script>
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const minDate = new Date(today);
minDate.setMonth(minDate.getMonth() - 2);
minDate.setDate(15);

const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 2);
maxDate.setDate(15);

export default {
  data() {
    return {
      min: minDate,
      max: maxDate,
      selectedDate: '',
      context: null,
      val: null,
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
    dateDisabledFn(ymd, date) {
      // 获取所有的星期几
      const weekday = date.getDay()
      // 获取所有的几号
      const day = date.getDate()
      // 禁用每周周六日以及每月13号
      return weekday === 0 || weekday === 6 || day === 13
    },
    cleanDate() {
      this.val = null
    },
    setToday() {
      this.val = today
    },
    dayClass(ymd, date) {
      const day = date.getDate()
      let classText = ''
      if (day > 1 && day <= 10) {
        classText = 'table-warning'
      } else if (day > 10 && day <= 20) {
        classText = 'table-info'
      }
      return classText
    }
  }
}
</script>
