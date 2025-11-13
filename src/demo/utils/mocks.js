import Default from './demos/default.vue?raw';

export const demos = [
  {
    id: 1,
    title: "TvMenu",
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
      placeholder: "Search...",
      titleButton: "Search",
      imageMenu:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
      results: [
        {
          id: 1,
          title: 'How to use Vue 3',
          description: 'Vue 3 is the latest version of Vue.js',
          url: 'https://todovue.com/blog/how-to-use-vue-3',
        },
        {
          id: 2,
          title: 'How to use Vite',
          description: 'Vite is a build tool for modern web development',
          url: 'https://todovue.com/blog/how-to-use-vite',
        },
        {
          id: 3,
          title: 'How to use Pinia',
          description: 'Pinia is a modern store for Vue 3',
          url: 'https://todovue.com/blog/how-to-use-pinia',
        },
        {
          id: 4,
          title: 'How to use Windi CSS',
          description: 'Windi CSS is a utility-first CSS framework',
          url: 'https://todovue.com/blog/how-to-use-windi-css',
        },
        {
          id: 5,
          title: 'How to use Vitesse',
          description: 'Vitesse is a Vue 3 starter template',
          url: 'https://todovue.com/blog/how-to-use-vitesse',
        }
      ],
    },
    html: Default,
  },
];
