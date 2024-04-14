import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import MyPreset from './preset'
import StyleClass from 'primevue/styleclass'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true,
  pt: MyPreset
})
app.directive('styleclass', StyleClass)
app.use(router)
app.mount('#app')
