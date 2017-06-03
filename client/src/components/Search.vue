<template lang="html">
  <el-row :gutter="24">
    <el-col :span="24">
      <div class="grid-content bg-purple">
        <div>
          <el-input placeholder="Search what you want">
            <el-select slot="prepend" placeholder="Select">
              <el-option label="Kebaya" value="1"></el-option>
              <el-option label="Songket" value="2"></el-option>
              <el-option label="Produk" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style lang="css">
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
