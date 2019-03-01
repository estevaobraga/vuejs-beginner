import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import HelloJs from 'hellojs'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)

// Vue.prototype.$HelloJs = HelloJs.init({
//   google: '252314890353-rlsn2a1t4rb76lvgvalivdv6r8snp8ot.apps.googleusercontent.com'
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
