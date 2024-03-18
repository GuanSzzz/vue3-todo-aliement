import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'


const app=createApp(App)
app.config.globalProperties.$ALIEMENTS={
    size:'large',
}
app.use(ElContainer).mount('#app')