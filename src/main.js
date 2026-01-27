import { createApp } from 'vue'
import TvMenu from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-search/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvMenu)
app.mount('#tv-menu')
