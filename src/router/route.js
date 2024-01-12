import Index from '@/view/index.vue'
import Register from '@/view/register.vue'
import Login from '@/view/login.vue'
const routes =[
    {
    name:'index',
    path:'/',
    component:Index
   },
   {
    name: 'login',
    path: '/login',
    component: Login
},
{
    name: 'register',
    path: '/register',
    component: Register
}
];

 
export default routes
