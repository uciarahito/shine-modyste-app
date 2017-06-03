<template lang="html">
  <div>

    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> All Produk</span>
          <el-col :span="6" v-for="(item, index) in dataItems" :key="index">
            <div class="grid-content">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.image_url" class="image">
                <div style="padding: 14px;">
                  <span>{{item.name}} - {{item.category.code_category}}</span>
                  <div class="bottom clearfix">
                    <time class="time">Size: {{item.size}} &nbsp;&nbsp; Color: {{item.color}}</time>
                  </div>
                </div>
                <el-button-group style="width:100%;">
                  <el-button type="primary" icon="arrow-left" style="width:50%;">Add to cart</el-button>
                  <el-button type="primary" style="width:50%;">Add to wishlist<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                </el-button-group>
              </el-card>
            </div>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="Kebaya">
          <el-col :span="6" v-for="(item, index) in dataItems" :key="index" v-if="item.category.name === 'kebaya'">
            <div class="grid-content">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.image_url" class="image">
                <div style="padding: 14px;">
                  <span @click="detailItem">{{item.name}} - {{item.category.code_category}}</span>
                  <div class="bottom clearfix">
                    <time class="time">Size: {{item.size}} &nbsp;&nbsp; Color: {{item.color}}</time>
                  </div>
                </div>
                <el-button-group style="width:100%;">
                  <el-button type="primary" icon="arrow-left" style="width:50%;">Add to cart</el-button>
                  <el-button type="primary" style="width:50%;">Add to wishlist<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                </el-button-group>
              </el-card>
            </div>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="Songket">
          <el-col :span="6" v-for="(item, index) in dataItems" :key="index" v-if="item.category.name === 'songket'">
            <div class="grid-content">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.image_url" class="image">
                <div style="padding: 14px;">
                  <span>{{item.name}} - {{item.category.code_category}}</span>
                  <div class="bottom clearfix">
                    <time class="time">Size: {{item.size}} &nbsp;&nbsp; Color: {{item.color}}</time>
                  </div>
                </div>
                <el-button-group style="width:100%;">
                  <el-button type="primary" icon="arrow-left" style="width:50%;">Add to cart</el-button>
                  <el-button type="primary" style="width:50%;">Add to wishlist<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                </el-button-group>
              </el-card>
            </div>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="Produk Jadi">
          <el-col :span="6" v-for="(item, index) in dataItems" :key="index" v-if="item.category.name === 'produk'">
            <div class="grid-content">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.image_url" class="image">
                <div style="padding: 14px;">
                  <span>{{item.name}} - {{item.category.code_category}}</span>
                  <div class="bottom clearfix">
                    <time class="time">Size: {{item.size}} &nbsp;&nbsp; Color: {{item.color}}</time>
                  </div>
                </div>
                <el-button-group style="width:100%;">
                  <el-button type="primary" icon="arrow-left" style="width:50%;">Add to cart</el-button>
                  <el-button type="primary" style="width:50%;">Add to wishlist<i class="el-icon-arrow-right el-icon-right"></i></el-button>
                </el-button-group>
              </el-card>
            </div>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </el-row>

    <el-dialog v-model="dialogFormVisibleDetail">
      <h1>Test muncul atau gak</h1>
    </el-dialog>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      dialogFormVisibleDetail: false
    }
  },
  methods: {
    detailItem() {
      this.dialogFormVisibleDetail = true
    }
  },
  created() {
    this.$store.dispatch("dataItems")
  },
  computed: {
    dataItems(){
      return this.$store.state.dataItems
    }
  }
}
</script>

<style lang="css">
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
    margin: 15px;
  }
  .el-row {
    margin-top: 20px;
  }
  .el-col{
    text-align: center;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .el-button-group {
    display: block;
  }
</style>
