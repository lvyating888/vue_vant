import { createRouter,createWebHistory } from 'vue-router';
import home from '../view/home';
import page1 from '../view/page1';
const routes=[
    {
        path:'/',
        name:'home',
        component:home,
        children:[
            {
                path: 'page1',
                component: page1
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