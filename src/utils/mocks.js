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
    },
    html: Default,
  },
];
