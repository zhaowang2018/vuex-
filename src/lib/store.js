// 导入Vue
import Vue from 'vue';
// 导入Vuex
import Vuex from 'vuex'
// 注册插件
Vue.use(Vuex)

// 实例化仓库
const store = new Vuex.Store({
  // 仓库(数据)
  state: {
    //购物车的数据
    cartData: JSON.parse(window.localStorage.getItem('cartData'))||{}
  },
  //数据需要经过计算才能得到的数据可用vuex的计算属性getters
  getters: {
    //总数
    totalNum(state) {
      let num = 0;
      for (const key in state.cartData) {
        num += state.cartData[key].num;
      }
      return num;
    }
  },

  // 对外暴露的修改方法
  mutations: {
    add2Cart(state, fruit) {
      //添加到仓库中
      if (state.cartData[fruit.name]) {
        state.cartData[fruit.name].num++;

      } else {
        //购物车中没有这个字段  新增一个字段
        // state.cartData[fruit.name] = fruit;
        //额外增加的方法没有双向数据绑定;需用Vue.set方法增加响应式的属性
        Vue.set(state.cartData, fruit.name, fruit);
        //增加个数
        // state.cartData[fruit.name].num = 1;
        Vue.set(state.cartData[fruit.name], 'num', 1);
      }
    },
    //删除数据
    removerFruit(state,fruit){
      //官方文档里提供的删除APi 用原生的方法不会有双向数据绑定功能
      Vue.delete(state.cartData,fruit.name);

    }
  }
})

//当浏览器关闭时 把购物车的数据保存到本地存储中
window.onbeforeunload = function () {
  window.localStorage.setItem('cartData',JSON.stringify(store.state.cartData));

}
// 暴露出去
export default store;