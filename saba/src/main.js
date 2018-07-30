import Vue from 'vue'
import App from './App.vue'
import config from '../libs/conf/config.js'

// 引入mockjs
require('../libs/mock/index.js')

Vue.config.productionTip = false

//全局常量挂载
Vue.use(config);

new Vue({
  render: h => h(App)
}).$mount('#app');
