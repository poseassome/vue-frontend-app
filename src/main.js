import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import '@fortawesome/fontawesome-free/js/all';

const app = createApp(App);
app.use(router).mount('#app');
