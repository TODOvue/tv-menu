# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-11-13
### 🐛 Fixed
- Fixed search results display in TvSearch component.

### 🛠️ Changed
- Corrected demo application routes.

## [1.0.0] - 2025-10-20

### ✨ Added
- Initial release of TvMenu component
- Responsive navigation menu with desktop and mobile views
- Integrated search functionality using `@todovue/tv-search` component
- Logo/image support with click event handling (`@clickImage`)
- Menu items array support with configurable structure (`id`, `title`, `url`)
- Menu item click events with data payload (`@clickMenu`)
- Search event emission for custom search implementations (`@searchMenu`)
- Automatic mobile menu toggle with hamburger icon
- Mobile overlay menu with slide-in animation
- Props for customization:
  - `menus`: Array of menu items
  - `placeholder`: Search input placeholder
  - `titleButton`: Search button label
  - `imageMenu`: Logo/image URL
- Composable `useMenu` for menu state and event management
- SCSS styling with modular architecture (_variables, _mixins, _global)
- Icon assets (menu and cancel icons)
- SSR (Server-Side Rendering) compatibility
- Nuxt 3 support
- Tree-shakeable ES and CommonJS module exports
- TypeScript declarations generation
- Vite build configuration with CSS injection
- Demo playground with example implementations

[1.0.1]: https://github.com/TODOvue/tv-menu/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-menu/pull/1/files
