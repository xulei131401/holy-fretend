import Vue from 'vue'
import App from './App.vue'
import XL from '../base/util/saba.js'
import AJAX from '../base/util/ajax.js'

Vue.config.productionTip = false
//工具对象挂载到全局Vue实例
Vue.prototype.XL = XL
Vue.prototype.AJAX = AJAX


new Vue({
  render: h => h(App)
}).$mount('#app');
