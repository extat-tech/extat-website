import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import MyPreset from "./preset";
import StyleClass from "primevue/styleclass";
import router from './router'
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Ripple from 'primevue/ripple'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true, pt: MyPreset});
app.component("Button", Button);
app.component('Sidebar', Sidebar);
app.directive('ripple', Ripple);
app.directive("styleclass", StyleClass);
app.use(router)
app.mount('#app')

