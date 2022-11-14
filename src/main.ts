import { createApp } from 'vue';
import App from '@/App.vue';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createPinia } from 'pinia';
import { createVuetify, ThemeDefinition } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import { md3 } from 'vuetify/blueprints';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const appTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#80489C',
    'primary-darken-1': '#432C7A',
    secondary: '#FF8FB1',
    'secondary-darken-1': '#FCE2DB',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

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
  blueprint: md3,
  theme: {
    defaultTheme: 'appTheme',
    themes: {
      appTheme,
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
