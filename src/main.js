import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import store from './store';
// .use(store)

createApp(App).use(store).mount('#app');
