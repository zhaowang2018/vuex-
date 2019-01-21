<template>
  <div>
    <el-table :data="cartList" style="width: 100%">
      <el-table-column prop="name" label="商品名" width="180"></el-table-column>
      <el-table-column prop="price" label="单价" width="180"></el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.url" class="icon" alt>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num" :min="1" label="描述文字"></el-input-number>
        </template>
      </el-table-column>

      <el-table-column label="总价" width="180">
        <template slot-scope="scope">{{Math.floor(scope.row.num *scope.row.price)}}</template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="danger" @click="delOne(scope.row)" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>总价为:{{totalPrice}}</p>
    <el-button type="success" @click="playMoney()">结算</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: []
    };
  },
  computed: {
    totalPrice(data) {
      let sum = 0;
      this.cartList.forEach(v => {
        sum += v.num * v.price;
      });
      return parseInt(sum);
    }
  },
  methods: {
    delOne(data) {
      this.$confirm("是否删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //移除数组中的某个值 可以根据下标来删除
          let index = this.cartList.indexOf(data);
          this.cartList.splice(index, 1);
          //还要删除vuex中的数据 同步
          this.$store.commit("removerFriut", data);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    playMoney() {
      // 从前往后删除 数组的索引会变 所以需要全部删除 要从后往前
      for (let index = this.cartList.length-1; index >= 0; index--) {
        this.$store.commit("removerFruit", this.cartList[index]);
        this.cartList.splice(index, 1);
        console.log(this.cartList);
        
      }
    }
  },
  created() {
    //因为表格组件需要数组 而传过来的是对象 我们需要转
    let cartData = this.$store.state.cartData;
    for (const key in cartData) {
      this.cartList.push(cartData[key]);
    }
    // console.log(this.cartList);
  }
};
</script>
<style >
.icon {
  width: 150px;
  height: 150px;
}
</style>