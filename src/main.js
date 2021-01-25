import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseApp from './plugins/firebase'
import './plugins/element-ui'
import './styles/global.scss'

Vue.prototype.$firebase = firebaseApp
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
