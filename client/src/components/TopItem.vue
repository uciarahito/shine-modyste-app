<template lang="html">
  <el-row>
    <el-col>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Top Item in This Month</span>
          <el-button style="float: right;" type="primary">All Products</el-button>
        </div>
        <el-row>
          <el-col :span="6" v-for="(item, index) in dataItems" :offset="index > 0 ? 1 : 0" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.image_url" class="image">
              <div style="padding: 8px;">
                <span>{{item.name}} - {{item.category.code_category}}</span>
                <span>Rp. {{item.price}}</span>
                <div class="bottom clearfix">
                  <time class="time">Size: {{item.size}} &nbsp;&nbsp; Stock: {{item.stock}}</time>
                </div>
              </div>
              <el-button-group style="width:100%;">
                <el-button type="primary" style="width:50%;" @click="addToCart(item)">Add to cart</el-button>
                <el-button type="primary" style="width:50%;">Add to wishlist</el-button>
              </el-button-group>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// let dataCarts = []
export default {
  methods: {
    addToCart(item){
      // dataCarts.push(item)
      // window.localStorage.setItem('cart', JSON.stringify(dataCarts))
      // this.$store.commit('dataCarts', JSON.parse(window.localStorage.getItem('cart')))
      console.log('data addtocart');
      console.log(item);
      this.$store.commit('dataCarts', item)
      // this.$store.commit('cart', item)
    }
  },
  created() {
    this.$store.dispatch("dataItems")
  },
  computed: {
    ...mapGetters({
      dataItems: 'dataItems',
      statusLogin: 'isLogin',
      dataCarts: 'dataCarts'
    })
  }
}
</script>

<style lang="css">
  .el-col-offset-1 {
    margin-left: 30px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .el-card {
    margin-top: 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
