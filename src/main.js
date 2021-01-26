import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseApp from './plugins/firebase'
import './styles/global.scss'
import './plugins/element-ui'

Vue.prototype.$firebase = firebaseApp
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
