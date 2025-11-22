import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvMenu from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-search/style.css'
import './style.scss'

const app = createApp(TvMenu)
app.component('TvDemo', TvDemo)
app.mount('#tv-menu')
