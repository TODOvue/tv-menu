<script setup>
import { ref } from 'vue'
import { TvMenu } from '@todovue/tv-menu'

const activeMenuId = ref(1)

const menus = [
  { id: 1, title: 'Dashboard', icon: 'fas fa-home' },
  { id: 2, title: 'Settings', icon: 'fas fa-cog' },
  { id: 3, title: 'Profile', icon: 'fas fa-user' }
]

const handleMenuClick = (menu) => {
  activeMenuId.value = menu.id
}
</script>

<template>
  <div class="demo-wrapper">
    <TvMenu
      v-model:activeMenu="activeMenuId"
      :menus="menus"
      placeholder="Find..."
    >
      <template #logo>
        <div class="custom-logo">
          <span>🚀 MyApp</span>
        </div>
      </template>

      <template #item="{ menu, isActive }">
        <div class="custom-item" :class="{ 'is-active': isActive }">
          <span class="icon">{{ menu.icon }}</span> <!-- Simulating icon -->
          <span>{{ menu.title }}</span>
          <span v-if="isActive" class="badge">•</span>
        </div>
      </template>

      <template #action-end>
        <div class="user-actions">
          <button class="btn-profile">User</button>
        </div>
      </template>
    </TvMenu>
  </div>
</template>

<style scoped>
.demo-wrapper {
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
}

.custom-logo {
  color: #42b883;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 1rem;
}

.custom-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 4px;
}

.custom-item.is-active {
  color: #42b883;
}

.badge {
  color: #42b883;
  font-size: 1.2rem;
}

.user-actions {
  margin-left: 10px;
}

.btn-profile {
  background: #42b883;
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}
</style>
