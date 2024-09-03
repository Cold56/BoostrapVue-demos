<template>
  <b-container>
    <!-- 这里我添加了一个带图片的卡片，并设置图片在底部（如果把img-bottom变成overlay，就会变成背景） -->
    <b-card title="Card title" sub-title="Card sub-title" text-variant="info"
      img-src="https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0"
      img-bottom>
      <b-card-text>Hello, my 1st card</b-card-text>
      <b-card-text>Can you see the link blow?</b-card-text>
      <b-link href="#" class="card-link">Here</b-link>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.card img {
  /*保持长宽比*/
  object-fit: cover;
  height: 200px;
}
</style>
