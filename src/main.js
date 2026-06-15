import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import i18n from './i18n'

// Import Font
import '@fontsource/inter'
import '@fontsource/kantumruy-pro'
// English font 
import '@fontsource/fira-sans'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')