import { createApp } from 'vue'
import App from './App.vue'
import Pagination from './components/Pagination/index.vue'
createApp(App).component('Pagination',Pagination).mount('#app')
