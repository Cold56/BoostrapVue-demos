<template>
  <!-- 流动显示大屏 -->
  <b-container>
    <b-card-title>普通图片</b-card-title>
    <!-- 使用fluid-grow会强制放大图像，使用thumbnail可以自动添加边框（虽说是缩略图，但是大小不变，要用栅格系统变小），rounded设成circle可以产生最大的圆角 -->
    <b-img rounded="lg" fluid-grow cneter
      src="https://th.bing.com/th/id/OIP.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain"></b-img>
    <!-- 使用b-img-lazy实现异步加载图像 -->
    <!-- <b-img-lazy src="https://th.bing.com/th/id/OIP.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain"></b-img-lazy> -->
    <b-card-title>风景美图轮播</b-card-title>
    <!-- controls是左右滑动的控件，indicators是下方的指示条，同时设置停留时间为4s -->
    <b-carousel controls indicators :interval="4000" img-width="1024" img-height="480">
      <b-carousel-slide caption="第一张图片" text="落日余晖"
        img-src="https://th.bing.com/th/id/OIP.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain"></b-carousel-slide>
      <!-- 使用模板自动变换图片尺寸，d-block让元素开始于新行且宽度和父类一样，img-fluid设置图片自适应，w-100让图片与父级保持宽度相等 -->
      <b-carousel-slide caption="第二张图片" text="金日融雪">
        <!-- 自定义插槽，本质为img（不可省略） -->
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480"
            src="https://th.bing.com/th/id/R.0f21d191aff30c561c6d0c0bddecff14?rik=1pG9zUd9j2RVBw&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214937.jpg&ehk=3XfxBPble42NXL5kK6D7JWDBMU%2froqqu3uMXT9NGC5s%3d&risl=&pid=ImgRaw&r=0" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="第三张图片" text="日透绿荫"
        img-src="https://th.bing.com/th/id/OIP.TNE2gqvkCP38r1nda89iagHaEo?rs=1&pid=ImgDetMain"></b-carousel-slide>
      <b-carousel-slide caption="第四张图片" text="山脊独行"
        img-src="https://th.bing.com/th/id/R.bdef383b9fb5af0b62f454ea314cacce?rik=S01goa4cA%2fTZJw&riu=http%3a%2f%2fuploadfile.bizhizu.cn%2f2014%2f0121%2f20140121050328911.jpg&ehk=Xw780Q%2bnPwUc4Qf3LLg%2fVZHhDZD14vVevMVbC1L1NZY%3d&risl=&pid=ImgRaw&r=0"></b-carousel-slide>
      <b-carousel-slide caption="第五张图片" text="五光十色"
        img-src="https://th.bing.com/th/id/R.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0"></b-carousel-slide>
    </b-carousel>
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