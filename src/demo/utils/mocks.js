import Default from './demos/default.vue?raw';
import ActiveState from './demos/active-state.vue?raw';
import CustomSlots from './demos/custom-slots.vue?raw';

export const demos = [
  {
    id: 1,
    title: "TvMenu",
    description: "A simple and customizable menu component for Vue 3.",
    propsData: {
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
      placeholder: "Type 'how'...",
      titleButton: "Search",
      imageMenu: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
      results: [
        {
          id: 1,
          title: 'How to use Vue 3',
          description: 'Vue 3 is the latest version of Vue.js',
          url: 'https://todo-vue.com/blog/how-to-use-vue-3',
        },
        {
          id: 2,
          title: 'How to use Vite',
          description: 'Vite is a build tool for modern web development',
          url: 'https://todo-vue.com/blog/how-to-use-vite',
        },
        {
          id: 3,
          title: 'How to use Pinia',
          description: 'Pinia is a modern store for Vue 3',
          url: 'https://todo-vue.com/blog/how-to-use-pinia',
        },
        {
          id: 4,
          title: 'How to use Windi CSS',
          description: 'Windi CSS is a utility-first CSS framework',
          url: 'https://todo-vue.com/blog/how-to-use-windi-css',
        },
        {
          id: 5,
          title: 'How to use Vitesse',
          description: 'Vitesse is a Vue 3 starter template',
          url: 'https://todo-vue.com/blog/how-to-use-vitesse',
        }
      ],
    },
    html: Default,
  },
  {
    id: 2,
    title: "Active State",
    description: "Demonstrates the active menu item functionality.",
    propsData: {
      activeMenu: 1,
      menus: [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'About', url: '/about' },
        { id: 3, title: 'Services', url: '/services' },
        { id: 4, title: 'Contact', url: '/contact' }
      ],
      placeholder: "Search...",
      titleButton: "Search",
      imageMenu: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
    },
    html: ActiveState,
  },
  {
    id: 3,
    title: "Custom Slots",
    description: "Shows how to use slots for custom rendering.",
    propsData: {
      activeMenu: 1,
      menus: [
        { id: 1, title: 'Dashboard', icon: 'fas fa-home' },
        { id: 2, title: 'Settings', icon: 'fas fa-cog' },
        { id: 3, title: 'Profile', icon: 'fas fa-user' }
      ],
      placeholder: "Find...",
    },
    html: CustomSlots,
  }
];
