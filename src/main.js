import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import installSvgIcon from './icons/index'
import router from '@/router'

import './styles/index.scss' // global css

const app = createApp(App)
installElementPlus(app)
installSvgIcon(app)
app.use(router)
app.mount('#app')
