import type { App, Plugin } from 'vue';
import _TvMenu from './components/TvMenu.vue';
import './style.scss';

const TvMenu = _TvMenu as typeof _TvMenu & Plugin;
TvMenu.install = (app: App) => {
  app.component('TvMenu', TvMenu);
};

export { TvMenu };

export const TvMenuPlugin: Plugin = {
  install: TvMenu.install
};
export default TvMenu;

declare module 'vue' {
  export interface GlobalComponents {
    TvMenu: typeof TvMenu;
  }
}
