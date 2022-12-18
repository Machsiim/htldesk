import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = createApp(App)

app.use(router)

app.mount('#app')
