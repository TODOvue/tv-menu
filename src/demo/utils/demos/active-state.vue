<script setup>
import { ref } from 'vue'
import { TvMenu } from '@todovue/tv-menu'

const activeMenuId = ref(1)

const menus = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'Services', url: '/services' },
  { id: 4, title: 'Contact', url: '/contact' }
]

const handleMenuClick = (menu) => {
  console.log('Clicked menu:', menu)
  activeMenuId.value = menu.id
  // Add navigation logic here
}
</script>

<template>
  <div class="demo-wrapper">
    <TvMenu
      v-model:activeMenu="activeMenuId"
      :menus="menus"
      placeholder="Search..."
      titleButton="Search"
      imageMenu="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png"
      @clickMenu="handleMenuClick"
    />
    <div class="active-info">
      <p>Active Menu ID: <strong>{{ activeMenuId }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.demo-wrapper {
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 8px;
}

.active-info {
  margin-top: 20px;
  color: #fff;
  text-align: center;
}
</style>
