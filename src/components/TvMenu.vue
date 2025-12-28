<script setup>
import { TvSearch } from "@todovue/tv-search";
import useMenu from "../composables/useMenu.js";

defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  titleButton: {
    type: String,
    default: "",
  },
  menus: {
    type: Array,
    default: () => [],
  },
  imageMenu: {
    type: String,
    default: "",
  },
  results: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits([
  'clickImageMenu',
  'clickMenuItem',
  'searchMenu',
]);

const {
  manageViewMenu,
  showMenu,
  handleClickImage,
  handleClickMenu,
  handleSearch,
} = useMenu(emit);
</script>

<template>
  <header class="tv-menu-container">
    <nav class="tv-menu-image tv-cursor-pointer">
      <img :src="imageMenu" alt="Logo" @click="handleClickImage" />
    </nav>
    <section class="tv-menu-items">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="tv-menu-item tv-cursor-pointer"
        @click="handleClickMenu(menu)"
      >
        {{ menu.title }}
      </div>
      <i
          class="tv-icon tv-menu-icon tv-cursor-pointer"
          @click="manageViewMenu(true)"
      ></i>
      <tv-search
        :placeholder="placeholder"
        :titleButton="titleButton"
        :results="results"
        @search="handleSearch"
      />
      <div class="tv-menu-items-mobile" v-if="showMenu">
        <i
          class="tv-icon tv-menu-icon-cancel tv-cursor-pointer"
          @click="manageViewMenu(false)"
        ></i>
        <div
          v-for="menu in menus"
          :key="menu.id"
          class="tv-menu-item-mobile tv-cursor-pointer"
          @click="handleClickMenu(menu)"
        >
          {{ menu.title }}
        </div>
      </div>
    </section>
  </header>
</template>

<style></style>
