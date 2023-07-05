import { createRouter,createWebHistory } from "vue-router";
const Home = ()=>import('../pages/Home/index.vue')
const Login = ()=>import('../pages/Login/index.vue')
const NotFound = ()=>import('../pages/NotFound/index.vue')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            name:'Home'
        },
        {
            path:'/login',
            component:Login,
            name:'Login'
        },
        {
            path:'/:pathMatch(.*)*',
            component:NotFound,
            name:'NotFound'
        }
    ]
})

export default router