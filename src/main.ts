import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/reset.css'
// import animated from 'animate.css'
import 'animate.css'

const app = createApp(App)

// app.use(animated)
app.use(store)
app.use(router)
app.mount('#app')
