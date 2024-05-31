import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import setupRouter from './router';

const app = createApp(App);

app.use(setupRouter);

app.mount('#app');
