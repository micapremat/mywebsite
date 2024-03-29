import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import './assets/fonts/Montserrat-Medium.ttf'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
