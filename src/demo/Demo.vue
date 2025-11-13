<script setup>
import { defineAsyncComponent } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import { demos } from './utils/mocks.js'

const TvMenu = defineAsyncComponent(/* webpackChunkName: "TvMenu" */() => import('../components/TvMenu.vue'))

</script>

<template>
  <tv-demo
    :component="TvMenu"
    :variants="demos"
    nameComponent="TvMenu"
    npmInstall="@todovue/tv-menu"
    sourceLink="https://github.com/TODOvue/tv-menu"
    urlClone="https://github.com/TODOvue/tv-menu.git"
    version="1.0.2"
  ></tv-demo>
</template>

<style scoped>

</style>
