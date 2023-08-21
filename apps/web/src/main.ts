import './index.css';
import '@/components';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

export const baseUrl = 'http://localhost:3001';

const app = createApp(App);
app.use(router);

app.mount('#app');
