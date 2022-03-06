import { createApp } from 'vue';
// import axios from 'axios';
import App from './App.vue';
import router from './router';
import './index.css';
import '@fortawesome/fontawesome-free/js/all';

const app = createApp(App);
// app.config.globalProperties.axios = axios;
// axios.defaults.baseURL = 'https://taling.projectlion.lkaybob.pe.kr/api';
app.use(router).mount('#app');
