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
};
</script>
