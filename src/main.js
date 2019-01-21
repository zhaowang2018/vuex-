import Vue from 'vue'
import App from './App.vue'

//导入 Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

//引入store
import store from './lib/store'
import router from './lib/router(1).js'

new Vue({
  render: h => h(App),
  //挂载到Vue实例上
  store,
  router
}).$mount('#app')
