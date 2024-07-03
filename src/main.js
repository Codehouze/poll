import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import PollComponent from './PollPlugin.js'

import './assets/css/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(PollComponent);

app.mount('#app');
