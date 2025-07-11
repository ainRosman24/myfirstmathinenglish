import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(createPinia())

Vue.config.ignoredElements = [/^ion-/]
