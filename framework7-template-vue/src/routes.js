import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: () => import("@/pages/find"),
    tabs: [
      {
        name: "find",
        path: '/',
        id: 'find',
        component: () => import("@/pages/find"),
      },
      {
        name: "video",
        path: '/video/',
        id: 'video',
        component: () => import("@/pages/video"),
      },
      {
        name: "mine",
        path: '/mine/',
        id: 'mine',
        component: () => import("@/pages/mine"),
      },
      {
        name: "freind",
        path: '/freind/',
        id: 'freind',
        component: () => import("@/pages/freind"),
      },
      {
        name: "account",
        path: '/account/',
        id: 'account',
        component: () => import("@/pages/account"),
      },
    ]
  },
  {
    name: "login",
    path: '/login/',
    component: () => import("@/pages/user/login"),
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
