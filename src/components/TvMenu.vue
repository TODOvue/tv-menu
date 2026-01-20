<script setup>
import { TvSearch } from "@todovue/tv-search";
import useMenu from "../composables/useMenu.js";

const props = defineProps({
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
  noResultsText: {
    type: String,
    default: "No results found for",
  },
  activeMenu: {
    type: [String, Number],
    default: null,
  }
})

const emit = defineEmits([
  'clickImageMenu',
  'clickMenuItem',
  'searchMenu',
  'update:activeMenu',
]);

const {
  manageViewMenu,
  showMenu,
  activeMenuInternal,
  handleClickImage,
  handleClickMenu,
  handleSearch,
} = useMenu(props, emit);
</script>

<template>
  <header class="tv-menu-container">
    <nav class="tv-menu-image tv-cursor-pointer">
      <slot name="logo">
        <img v-if="imageMenu" :src="imageMenu" alt="Logo" @click="handleClickImage" />
      </slot>
    </nav>
    <section class="tv-menu-items">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="tv-menu-item tv-cursor-pointer"
        :class="{ 'active': activeMenuInternal === menu.id }"
        @click="handleClickMenu(menu)"
      >
        <slot name="item" :menu="menu" :isActive="activeMenuInternal === menu.id">
          {{ menu.title }}
        </slot>
      </div>
      <i
        class="tv-icon tv-menu-icon tv-cursor-pointer"
        @click="manageViewMenu(true)"
      ></i>
      <tv-search
        :placeholder="placeholder"
        :titleButton="titleButton"
        :results="results"
        :no-results-text="noResultsText"
        @search="handleSearch"
      />
      <slot name="action-end"></slot>
      <div class="tv-menu-items-mobile" v-if="showMenu">
        <i
          class="tv-icon tv-menu-icon-cancel tv-cursor-pointer"
          @click="manageViewMenu(false)"
        ></i>
        <div
          v-for="menu in menus"
          :key="menu.id"
          class="tv-menu-item-mobile tv-cursor-pointer"
          :class="{ 'active': activeMenuInternal === menu.id }"
          @click="handleClickMenu(menu)"
        >
          <slot name="item" :menu="menu" :isActive="activeMenuInternal === menu.id">
            {{ menu.title }}
          </slot>
        </div>
      </div>
    </section>
  </header>
</template>

<style></style>
