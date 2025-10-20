<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Menu (TvMenu)
A flexible, responsive Vue 3 menu component with integrated search functionality, mobile-friendly navigation, and easy customization. Perfect for Single Page Apps or Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-menu.svg)](https://www.npmjs.com/package/@todovue/tv-menu)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-menu.svg)](https://www.npmjs.com/package/@todovue/tv-menu)
![License](https://img.shields.io/github/license/TODOvue/tv-menu)

> Demo: https://tv-menu-demo.netlify.app

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Usage Examples](#usage-examples)
- [Responsive Behavior](#responsive-behavior)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---
## Features
- Responsive navigation menu with desktop and mobile views
- Integrated search functionality powered by `@todovue/tv-search`
- Logo/image click support with custom event handling
- Menu item click events with data payload
- Automatic mobile menu toggle with hamburger icon
- Clean, modern design with customizable styling
- Works seamlessly in SPA and SSR (Nuxt 3) contexts
- Tree-shake friendly (Vue marked external in library build)

---
## Installation
Using npm:
```bash
npm install @todovue/tv-menu
```
Using yarn:
```bash
yarn add @todovue/tv-menu
```
Using pnpm:
```bash
pnpm add @todovue/tv-menu
```

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvMenu from '@todovue/tv-menu'

createApp(App)
  .use(TvMenu) // enables <TvMenu /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvMenu } from '@todovue/tv-menu'

const menuItems = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'Contact', url: '/contact' }
]

function handleMenuClick(menu) {
  console.log('Clicked:', menu)
  // Navigate to menu.url or perform custom action
}

function handleImageClick() {
  console.log('Logo clicked')
}

function handleSearch(searchTerm) {
  console.log('Search:', searchTerm)
}
</script>

<template>
  <TvMenu
    :menus="menuItems"
    placeholder="Search..."
    titleButton="Search"
    imageMenu="https://example.com/logo.png"
    @clickImage="handleImageClick"
    @clickMenu="handleMenuClick"
    @searchMenu="handleSearch"
  />
</template>
```

---
## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-menu.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvMenu from '@todovue/tv-menu'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvMenu)
})
```
Use anywhere in your Nuxt app:
```vue
<template>
  <TvMenu
    :menus="navigationItems"
    placeholder="Search..."
    imageMenu="/logo.png"
    @clickMenu="navigateTo"
  />
</template>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvMenu } from '@todovue/tv-menu'
</script>
```

---
## Component Registration Options
| Approach                                                        | When to use                                    |
|-----------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvMenu)`                                    | Many usages across app / design system install |
| Local named import `{ TvMenu }`                                 | Isolated / code-split contexts                 |
| Direct default import `import TvMenu from '@todovue/tv-menu'`   | Single usage or manual registration            |

---
## Props
| Prop        | Type   | Default | Description                                              |
|-------------|--------|---------|----------------------------------------------------------|
| menus       | Array  | []      | Array of menu items with `{ id, title, url }` structure. |
| placeholder | String | ''      | Placeholder text for the search input.                   |
| titleButton | String | ''      | Label for the search button.                             |
| imageMenu   | String | ''      | URL of the logo/image to display in the menu header.     |

### Menu Item Structure
Each item in the `menus` array should have this structure:
```js
{
  id: Number,      // unique identifier
  title: String,   // display text
  url: String      // navigation path or identifier
}
```

---
## Events
| Event name (kebab) | Payload     | Description                                        |
|--------------------|-------------|----------------------------------------------------|
| `clickImage`       | —           | Emitted when the logo/image is clicked.            |
| `clickMenu`        | menu object | Emitted when a menu item is clicked.               |
| `searchMenu`       | search term | Emitted when search is performed (string value).   |

Usage examples:
```vue
<TvMenu
  @clickImage="handleLogoClick"
  @clickMenu="handleNavigation"
  @searchMenu="performSearch"
/>
```

---
## Usage Examples

### Basic Navigation Menu
```vue
<script setup>
import { TvMenu } from '@todovue/tv-menu'
import { useRouter } from 'vue-router'

const router = useRouter()

const menus = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About', url: '/about' },
  { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'Contact', url: '/contact' }
]

function navigateToPage(menu) {
  router.push(menu.url)
}
</script>

<template>
  <TvMenu
    :menus="menus"
    placeholder="Search pages..."
    titleButton="Go"
    imageMenu="/logo.png"
    @clickMenu="navigateToPage"
  />
</template>
```

### With Search Functionality
```vue
<script setup>
import { TvMenu } from '@todovue/tv-menu'
import { ref } from 'vue'

const searchResults = ref([])

function handleSearch(term) {
  // Perform search logic
  fetch(`/api/search?q=${term}`)
    .then(res => res.json())
    .then(data => searchResults.value = data)
}
</script>

<template>
  <TvMenu
    :menus="navigationItems"
    placeholder="Search our site..."
    titleButton="Search"
    imageMenu="/brand-logo.png"
    @searchMenu="handleSearch"
  />
</template>
```

### E-commerce Navigation
```vue
<script setup>
import { TvMenu } from '@todovue/tv-menu'

const categories = [
  { id: 1, title: 'Shop', url: '/shop' },
  { id: 2, title: 'New Arrivals', url: '/new' },
  { id: 3, title: 'Sale', url: '/sale' },
  { id: 4, title: 'My Account', url: '/account' }
]

function onLogoClick() {
  window.location.href = '/'
}

function navigateTo(menu) {
  window.location.href = menu.url
}

function searchProducts(query) {
  // Product search logic
  console.log('Searching products:', query)
}
</script>

<template>
  <TvMenu
    :menus="categories"
    placeholder="Search products..."
    titleButton="Find"
    imageMenu="https://example.com/store-logo.png"
    @clickImage="onLogoClick"
    @clickMenu="navigateTo"
    @searchMenu="searchProducts"
  />
</template>
```

---
## Responsive Behavior
- **Desktop view**: Full horizontal menu with all items visible + integrated search
- **Mobile view**: Hamburger icon that toggles a slide-in menu overlay
- **Automatic breakpoint**: Menu adapts automatically using CSS media queries
- **Touch-friendly**: All interactive elements are optimized for touch devices

---
## Customization (Styles / Theming)
The component uses SCSS with a modular structure. You can override styles by targeting the following CSS classes:

### Main Classes
- `.tv-menu-container` - Main menu wrapper
- `.tv-menu-image` - Logo container
- `.tv-menu-items` - Desktop menu items container
- `.tv-menu-item` - Individual menu item (desktop)
- `.tv-menu-icon` - Hamburger menu icon
- `.tv-menu-items-mobile` - Mobile menu overlay
- `.tv-menu-item-mobile` - Individual menu item (mobile)

### Example Custom Styling
```css
/* Custom menu colors */
.tv-menu-container {
  background-color: #0f2e5b;
}

.tv-menu-item {
  color: #ffffff;
  font-weight: 600;
}

.tv-menu-item:hover {
  color: #ff4081;
}

/* Custom logo size */
.tv-menu-image img {
  width: 200px;
  height: auto;
}
```

---
## Accessibility
- Semantic HTML5 elements (`<header>`, `<nav>`, `<ul>`, `<li>`)
- Keyboard navigation support for all interactive elements
- Alt text support for logo image
- Click events work with keyboard (Enter/Space)
- Mobile menu properly handles focus management

### Best Practices
- Always provide meaningful `alt` text via the logo image URL
- Ensure menu items have descriptive titles
- Test keyboard navigation (Tab, Enter, Escape)

---
## SSR Notes
- No direct DOM (`window` / `document`) access in core component → safe for SSR
- Styles are automatically injected when you import the library
- Works with Vite-based SSR and Nuxt 3 out of the box
- Mobile menu state is managed via Vue reactivity (no localStorage dependencies)

---
## Development
```bash
git clone https://github.com/TODOvue/tv-menu.git
cd tv-menu
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

---
## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

Please ensure:
- Code follows existing style conventions
- Tests pass (when available)
- Documentation is updated for new features

---
## License
MIT © TODOvue

---
### Attributions
Crafted for the TODOvue component ecosystem
