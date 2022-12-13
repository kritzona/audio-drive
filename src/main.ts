import { createApp } from 'vue';
import App from '@/app/App.vue';
import * as providers from '@/app/providers';

const app = createApp(App);

app.use(providers.pinia);
app.use(providers.vuetify);
app.use(providers.router);

app.mount('#app');
