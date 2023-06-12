import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import confirmPopup from './plugins/confirmPopup'
import clickOutSide from './plugins/clickOutSide'
const app = createApp(App)

app.use(router)
app.use(confirmPopup);
app.use(clickOutSide)
app.mount('#app')
