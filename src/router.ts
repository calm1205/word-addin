import { createRouter, createWebHashHistory } from "vue-router";
import TaskPane from "./views/TaskPane.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("./views/Index.vue"),
  },
  // {
  //   path: "/taskpane",
  //   name: "root",
  //   component: () => import("./views/TaskPane.vue"),
  // },
  {
    path: "/taskpane",
    name: "taskpane",
    component: TaskPane,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
