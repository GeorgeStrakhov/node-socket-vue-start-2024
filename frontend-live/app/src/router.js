import { createRouter, createWebHistory } from 'vue-router'

//app components
import Landing from '@/components/Landing.vue'
import NotFound from '@/components/NotFound.vue'
import ChatExample from '@/components/ChatExample.vue'

//router
const routes = [
    { path: '/', name: 'Landing', component: Landing },
    { path: '/chat', name: 'ChatExample', component: ChatExample },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }
