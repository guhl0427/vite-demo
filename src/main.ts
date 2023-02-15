import { createApp } from 'vue'

import lodashES from 'lodash-es'
import App from './App.vue'
import router from './router'

console.log('lodash', lodashES.add)
const app = createApp(App)
app.use(router)
app.mount('#app')
