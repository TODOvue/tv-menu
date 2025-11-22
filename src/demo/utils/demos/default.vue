<template>
  <TvMenu
    :menus="configMenu.menus"
    :placeholder="configMenu.placeholder"
    :titleButton="configMenu.titleButton"
    :imageMenu="configMenu.imageMenu"
  />
</template>

<script setup>
import { TvMenu } from '@todovue/tv-menu';
import '@todovue/tv-menu/style.css';
import '@todovue/tv-search/style.css';
import '@todovue/tv-button/style.css';

const configMenu = {
  menus: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Blogs",
      url: "/blogs",
    },
    {
      id: 5,
      title: "Projects",
      url: "/projects",
    },
  ],
  placeholder: "Search...",
  titleButton: "Search",
  imageMenu: "https://todovue.com/logo.png",
  results: [
    {
      id: 1,
      title: 'How to use Vue 3',
      description: 'Vue 3 is the latest version of Vue.js',
      url: 'https://todovue.com/blog/how-to-use-vue-3',
    },
    {
      id: 2,
      title: 'How to use Vite',
      description: 'Vite is a build tool for modern web development',
      url: 'https://todovue.com/blog/how-to-use-vite',
    },
    {
      id: 3,
      title: 'How to use Pinia',
      description: 'Pinia is a modern store for Vue 3',
      url: 'https://todovue.com/blog/how-to-use-pinia',
    },
    {
      id: 4,
      title: 'How to use Windi CSS',
      description: 'Windi CSS is a utility-first CSS framework',
      url: 'https://todovue.com/blog/how-to-use-windi-css',
    },
    {
      id: 5,
      title: 'How to use Vitesse',
      description: 'Vitesse is a Vue 3 starter template',
      url: 'https://todovue.com/blog/how-to-use-vitesse',
    }
  ]
};
</script>
