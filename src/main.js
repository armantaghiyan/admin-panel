import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

/** import components **/
import pageLayout from './components/page-layout.vue'
import cart from './components/cart.vue'
import divider from './components/divider.vue'
app.component('page-layout', pageLayout)
app.component('cart', cart)
app.component('divider', divider)

app.mount('#app')
