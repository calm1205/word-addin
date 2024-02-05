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
    component: () => import("./views/TaskPane.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
