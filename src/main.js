import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import AboutMe from "./components/AboutMe.vue"
import PhotoGraphy from "./components/Photography.vue"
import MyWriting from "./components/Writing.vue"
import CV from "./components/CV.vue"

const routes = [
    { path: '/', component: AboutMe },
    { path: '/about', component: AboutMe },
    { path: '/photography', component: PhotoGraphy },
    { path: '/writing', component: MyWriting },
    { path: '/cv', component: CV }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

