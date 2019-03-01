# vuejs-beginner
## Vuejs para iniciantes

## Rodar o projeto
```
npm install
npm run serve
```

## Instalando o Vuejs
`npm install -g @vue/cli`  
   _Requer [node e npm](https://nodejs.org/en/) instalado_

## Criando um projeto Vue
`vue create <nome_projeto>`  

Configuracões usadas
```
Vue CLI v3.4.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter, E2E
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```

## Visual Studio Code - Extensões
- Vetur

## Instalando bibliotecas utilizadas

`npm install --save bootstrap-vue`  
`npm install --save axios`  

- Configurando
No arquivo _../srv/main.js_ importar _bootstrap-vue_ e _axios_

```
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
```

```
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
```

- Usando BootStrap-Vue  
Sobre espaçamento, [veja mais.](https://bootstrap-vue.js.org/docs/reference/spacing-classes/)  
Sobre components, [veja mais.](https://br.vuejs.org/v2/guide/)  

## Authenticando com Google - hello.js

- Instalação da biblioteca hello.js  
`npm install hellojs`  

- Configurando para uso

main.js  
`import Vue from 'vue'`  

```
HelloJs.init({}, {
  redirect_uri: 'localhost/about'
})
```

`Vue.use(HelloJs)`  