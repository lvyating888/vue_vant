import { createRouter,createWebHistory } from 'vue-router';
import home from '../view/home';
import about from '../view/about';
const routes=[
    {
        path:'/',
        name:'home',
        component:home,
        children:[
            {
                path: '',
                component: about
            },
            {
                path:'page2',
                component: ()=>import('../view/page2')
            }
        ]
    },
    {
        path: '/404',
        name:'404',
        component:()=>import('../view/404')
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;