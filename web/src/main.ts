import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import iconLogo from '@/assets/logo.svg'

document.title = `ZikStudios`;
const link = document.querySelector("[rel='icon']")
link?.setAttribute('href',iconLogo)
    

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
