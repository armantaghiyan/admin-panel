import {createWebHistory, createRouter} from 'vue-router'

import sampleIndex from './pages/sample/index.vue'

const routes = [

    {path: "/sample", name: "sampleIndex", component: sampleIndex},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;