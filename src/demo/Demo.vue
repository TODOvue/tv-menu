<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'
import { TvDemo } from '@todovue/tv-demo';

const TvMenu = defineAsyncComponent(/* webpackChunkName: "TvMenu" */() => import('../components/TvMenu.vue'))

</script>

<template>
  <TvDemo
    :component="TvMenu"
    :variants="demos"
    :manual-emits="['clickImageMenu', 'clickMenuItem', 'searchMenu', 'update:activeMenu']"
    hide-background
    component-name="TvMenu"
    npm-install="@todovue/tv-menu"
    source-link="https://github.com/TODOvue/tv-menu"
    url-clone="https://github.com/TODOvue/tv-menu.git"
    version="1.1.4"
  />
</template>

<style scoped>

</style>
