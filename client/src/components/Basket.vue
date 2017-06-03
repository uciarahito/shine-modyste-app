<template lang="html">
  <div>
    <el-table
      :data="dataCarts"
      border
      style="width: 100%"
      max-height="250">
      <el-table-column
        fixed
        prop="created_at"
        label="Date"
        width="150">
      </el-table-column>
      <el-table-column
        prop="category.name"
        label="Category"
        width="100">
      </el-table-column>
      <el-table-column
        prop="stock"
        label="Stock"
        width="80">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        width="100">
      </el-table-column>
      <el-table-column
        prop="color"
        label="Color"
        width="150">
      </el-table-column>
      <el-table-column
        prop="size"
        label="Size"
        width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Action"
        width="95">
        <template scope="scope">
          <el-button
            @click="deleteRow(scope.$index, dataCarts)"
            type="text"
            size="small">
            <el-icon name="delete"></el-icon>
          </el-button>
          <!-- <el-input-number size="small" v-model="stockItem" @change="handleChange(scope.$index)" :min="1"></el-input-number> -->
        </template>
      </el-table-column>
    </el-table>
    <hr>
    <div class="total">
      <p>Total: <b>Rp. {{total}}</b></p>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Basket',
  data() {
    return {
      num1: 1,
      stockItem: []
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {
      console.log('waktu delete');
      rows.splice(index, 1);
    },
    handleChange(index, value) {
      console.log(index, value)
      this.stockItem[index] = value
    }
  },
  computed: {
    ...mapGetters({
      statusLogin: "isLogin",
      cart: 'cart'
    }),
    dataCarts(){
      this.$store.state.dataCarts.forEach(dataCart => {
        let ind = 1
        console.log('sssss');
        this.stockItem.push(ind)
      })
      console.log('Hasil count: ');
      console.log(this.stockItem);
      return this.$store.state.dataCarts
    },
    total(){
      return this.$store.state.dataCarts.reduce((dataCart, value) => {
        // console.log('bbbbbbbbbbbb');
        // console.log(value.price);
        this.$store.commit('total', dataCart+value.price)
        return dataCart + value.price
      }, 0)
    }
  },
  created() {
    this.handleChange()
  }
}
</script>

<style lang="css">
</style>
