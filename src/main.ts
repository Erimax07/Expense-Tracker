import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useTransactionStore } from './stores/transactions';
import { useEdditStore } from './stores/transactions';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
export const userStore = useTransactionStore();
export const edditStore = useEdditStore();