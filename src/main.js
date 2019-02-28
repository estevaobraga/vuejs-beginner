import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloJs from 'hellojs/dist/hello.all.min.js'

HelloJs.init({}, {
  redirect_uri: 'localhost/about'
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
Vue.use(HelloJs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
