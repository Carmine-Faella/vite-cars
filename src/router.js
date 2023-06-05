import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppMain from './pages/AppMain.vue';
import SingleCar from './pages/SingleCar.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/cars',
                name: 'cars',
                component: AppMain
            },
            {
                path: '/cars/:id',
                name: 'single-cars',
                component: SingleCar
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: NotFound
            }
        ]
    }
);

export { router };