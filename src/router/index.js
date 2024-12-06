import { createRouter, createWebHistory } from "vue-router";

// 라우트 설정
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/array/index.vue"), // 동적 import
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/object/index.vue"),
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
