import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import './assets/fonts/Montserrat-Medium.ttf'
import router from './router'

const app = createApp(App)

const isFun = false;

// Provide the global property
app.provide('isFun', isFun);

app.use(createPinia()).use(router)

app.mount('#app')
