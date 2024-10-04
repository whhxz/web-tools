import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from './router/index.js';
// prettier-ignore
createApp(App)
    .use(router)
    .mount('#app');
