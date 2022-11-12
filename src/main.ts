import { createApp } from 'vue'
import App from '@/App.vue'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const vuetify = createVuetify({
  components,
  directives,
})
app.use(vuetify)

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
app.use(router)

app.mount('#app')
