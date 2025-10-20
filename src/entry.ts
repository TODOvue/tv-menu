import TvMenu from './components/TvMenu.vue'

(TvMenu as any).install = (app: any) => {
  app.component('TvMenu', TvMenu)
};

export const TvMenuPlugin = {
  install(app: any) {
    app.component('TvMenu', TvMenu)
  }
}

export { TvMenu }
export default TvMenu
