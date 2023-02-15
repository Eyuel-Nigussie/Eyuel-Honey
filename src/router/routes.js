const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/HomePage.vue"),
      },
      { path: "/products", component: () => import("pages/ProductsPage.vue") },
      { path: "/buy", component: () => import("pages/ProductCheckout.vue") },
      { path: "/confirm", component: () => import("pages/ProductConfirm.vue") },

      { path: "/about", component: () => import("pages/AboutPage.vue") },
      { path: "/share", component: () => import("pages/SharePage.vue") },
    ],
  },

  // { path: "/products", component: () => import("pages/ProductsPage.vue") },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
