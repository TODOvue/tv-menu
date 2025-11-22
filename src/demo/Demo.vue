<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvMenu = defineAsyncComponent(/* webpackChunkName: "TvMenu" */() => import('../components/TvMenu.vue'))

</script>

<template>
  <TvDemo
    :component="TvMenu"
    :variants="demos"
    component-name="TvMenu"
    npm-install="@todovue/tv-menu"
    source-link="https://github.com/TODOvue/tv-menu"
    url-clone="https://github.com/TODOvue/tv-menu.git"
    version="1.1.0"
  />
</template>

<style scoped>

</style>
