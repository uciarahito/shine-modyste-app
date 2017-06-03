<template lang="html">
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
}
</script>

<style lang="css">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("../assets/bg4.jpg");
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../assets/bg6.jpg");
  }
</style>
