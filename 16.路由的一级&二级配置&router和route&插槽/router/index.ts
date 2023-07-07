import { createRouter,createWebHistory } from "vue-router";
const Home = ()=>import('../pages//Home/Home.vue')
const Login = ()=>import('../pages/Login/Login.vue')
const NotFound = ()=>import('../pages/NotFound/NotFound.vue')
const Play = ()=>import('../pages/Home/components/Play.vue')
const Music = ()=>import('../pages/Home/components/Music.vue')

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            name:'Home',
            children:[
                {
                    path:'play',
                    component:Play,
                    name:'Play'
                },
                {
                    path:'music/:id?',
                    component:Music,
                    name:'Music'
                }
            ]
        },
        {
            path:'/login',
            component:Login,
            name:'Login'
        },
        {
            path:'/:pathMatch(.*)*',
            name:'NotFound',
            component:NotFound
        }
    ]
})

export default router