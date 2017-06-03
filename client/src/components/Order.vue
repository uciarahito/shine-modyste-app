<template lang="html">
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <div class="grid-content">
          <el-card class="box-card">
            <h2 style="text-align:center;">List of basket</h2>
            <el-table
              :data="listOrders"
              border
              style="width: 100%">
              <el-table-column
                prop="created_at"
                label="CreatedAt"
                sortable
                width="220">
              </el-table-column>
              <el-table-column
                prop="due_date"
                label="DueDate"
                sortable
                width="220">
              </el-table-column>
              <el-table-column
                prop="user.name"
                label="Name"
                width="160">
              </el-table-column>
              <el-table-column
                label="Action"
                width="160">
                <template scope="scope">
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">Cancel</el-button>
                  <el-button
                    size="small"
                    type="primary"
                    @click="view_cart">Detail</el-button>
                </template>
              </el-table-column>
            </el-table>
            <h3>Total: Rp. {{total}}</h3>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="Shipping" v-model="dialogFormVisibleViewCart">
      <el-card class="box-card">
        <Basket></Basket>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleViewCart = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Basket from './Basket'

export default {
  components: {
    Basket
  },
  data() {
    return {
      dialogFormVisibleViewCart: false
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleDelete(index, rows) {
      console.log('waktu delete');
      rows.splice(index, 1);
    },
    view_cart(){
      this.dialogFormVisibleViewCart = true
    }
  },
  computed: {
    ...mapGetters({
      orders: "orders",
      listOrders: "listOrders"
    }),
    orders(){
      return this.$store.state.orders
    },
    listOrders(){
      return this.$store.state.listOrders
    },
    total(){
      return this.$store.state.total
    }
  },
  created() {
    this.$store.dispatch("listOrders")
  },
}
</script>

<style lang="css">
  .el-card{
    text-align: left;
  }
</style>
