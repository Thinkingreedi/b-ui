import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import BUI from '../components/lib/index'

Vue.use(BUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
