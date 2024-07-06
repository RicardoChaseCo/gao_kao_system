// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.use(VueSidebarMenu);
app.mount('#app');
