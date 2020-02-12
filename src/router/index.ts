import Vue from 'vue'
import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location){
//     return routerPush.call(this,location).catch(error=>{console.log(error)})
// }
const Home = ()=>import("../views/home/Home.vue")
const Category=()=>import("../views/category/Category.vue")
const ShopCart=()=>import("../views/cart/Cart.vue")
const Profile =()=>import('../views/profile/Profile.vue')
Vue.use(Router)
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:ShopCart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    }
]
export default new Router({
    routes:routes,
    mode:'history'
})