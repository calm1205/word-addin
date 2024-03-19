import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("./views/Index.vue"),
  },
  {
    path: "/taskpane",
    name: "taskpane",
    component: () => import("./views/TaskPaneMain.vue"),
  },
  {
    path: "/taskpaneSub",
    name: "taskpaneSub",
    component: () => import("./views/TaskPaneSub.vue"),
  },
  {
    path: "/assets",
    children: [
      {
        path: "/assets/icon-16",
        component: () => import("./views/Icon16.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
