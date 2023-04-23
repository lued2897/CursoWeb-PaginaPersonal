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
        {
          path: '/Proyectos',
          name: 'Proyectos',
          component: () => import('../views/Proyectos.vue'),
        },
        {
          path: '/Contacto',
          name: 'Contacto',
          component: () => import('../views/Contacto.vue'),
        },
        {
          path: '/ref',
          name: 'ref',
          component: () => import('../views/ref.vue'),
        },
    ]
})

export default router