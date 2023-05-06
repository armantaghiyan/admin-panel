import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

/** install vue router **/
import router from './routes.js'
app.use(router)

/** import components **/
import pageLayout from './components/page-layout.vue'
import cart from './components/cart.vue'
import divider from './components/divider.vue'
import formInput from './components/form-input.vue'
import dataCart from './components/data-cart.vue'
app.component('page-layout', pageLayout)
app.component('cart', cart)
app.component('divider', divider)
app.component('form-input', formInput)
app.component('data-cart', dataCart)

app.mount('#app')
