import { createApp, VueElement } from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

//import store
import store from './store/index'

const app = createApp(App)

app.use(router)

app.use(store)

app.use(VueClipboard)

app.mount('#app')


