import { createApp } from 'vue';
import App from './App.vue';
import Vuely from '@vuely/core';
import '@vuely/core/style.css';

const app = createApp(App);
app.use(Vuely);
app.mount('#app'); 