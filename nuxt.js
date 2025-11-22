import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-menu',
    configKey: 'tvMenu'
  },
  setup(_options, nuxt) {
    const menuCss = '@todovue/tv-menu/style.css';
    const searchCss = '@todovue/tv-search/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(menuCss);
    pushUnique(searchCss);
    pushUnique(buttonCss);
  }
})
