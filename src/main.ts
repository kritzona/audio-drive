import { createApp } from 'vue';
import App from '@/App.vue';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
app.use(vuetify);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);

app.mount('#app');
