<template>
  <!-- 带有标题、内容以及选项的弹窗 -->
  <b-container>
    <!-- v-b-modal用于绑定modal -->
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <b-modal id="modal-1" title="Boostrap Vue - modal">
      <p>Hello World!</p>
    </b-modal>
    <hr />
    <!-- bvmodal -->
    <b-button @click="$bvModal.show('bv-modal-sample')">Open Modal with $bvModal</b-button>
    <b-modal id="bv-modal-sample" hide-footer>
      <template v-slot:modal-title>
        Using <code>$bvModal</code> method
      </template>
      <div class="d-block text-center">
        Hello world, its coming from $bvModal method
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-sample')">
        Close me
      </b-button>
    </b-modal>
    <hr />
    <!-- 额外输入框 -->
    <b-button variant="info" @click="$bvModal.show('bv-modal-input')">Input with $bvModal</b-button>
    <!-- 添加centered让他出现在中间 -->
    <b-modal id="bv-modal-input" @ok="handleInputOk" centered>
      <template v-slot:modal-title>
        Input your name here
      </template>
      <b-input class="mt-3" block v-model="bvInput" @focus="showInput = false"></b-input>
    </b-modal>
    <p v-if="showInput">{{ bvInput }}</p>
    <hr />
    <!-- style_modal -->
    <label>style-modal</label>
    <b-button block v-b-modal.styleModal variant="primary">Show style modal</b-button>
    <!-- no-close-on-backdrop no-close-on-esc取消了两种弹出modal的方法，hide-backdrop让周边背景不在灰暗，scrollable让modal有下拉条 -->
    <b-modal id="styleModal" no-close-on-backdrop no-close-on-esc no-fade hide-backdrop scrollable centered
      title="Custon styled modal" header-bg-variant="primary" header-text-variant="danger"
      header-border-variant="warning" body-bg-variant="info" body-text-variant="light" footer-bg-variant="dark"
      footer-text-variant="warning" footer-border-variant="primary">
      <p v-for="i in 20" :key="i">This the content<br></p>
      <template v-slot:modal-footer="{ ok, cancel }">
        <p style="font-size:large" class="mr-lg-5">what you can choose is here &raquo;</p>
        <b-button @click="ok()" variant="success">OK</b-button>
        <b-button @click="cancel()" variant="danger">Cancel</b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      bvInput: '',
      showInput: false,
    }
  },
  methods: {
    handleInputOk() {
      this.showInput = true; // 显示输入值
      this.bvInput = this.bvInput.trim(); // 去除输入两端的空格
    }
  },
}
</script>