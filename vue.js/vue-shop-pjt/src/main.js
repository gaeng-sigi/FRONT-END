import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App)
.mixin(mixins)
.use(store)
.use(router)
.mount('#app')

window.Kakao.init("c4bab976007a46fb60430c8c25bd5a16");
