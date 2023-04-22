import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "AboutMe" },
				},
        {
          path: '/',
          name: 'AboutMe',
          component: () => import('../views/AboutMe.vue'),
        },
    ]
})

export default router