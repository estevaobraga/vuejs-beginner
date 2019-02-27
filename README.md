## Instalando bibliotecas utilizadas

´npm install --save bootstrap-vue´
´npm install --save axios´

- Configurando
No arquivo _../srv/main.js_ importar _bootstrap-vue_ e _axios_

´´
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
´´

´´
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
´´

- Usando BootStrap-Vue
´<b-input/>´
´<b-button>´
[Veja mais](https://br.vuejs.org/v2/guide/)