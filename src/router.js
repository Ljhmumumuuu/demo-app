/*
 * @Author: your name
 * @Date: 2019-11-02 04:54:12
 * @LastEditTime: 2019-11-04 16:46:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \代码\vue-demo\src\router.js
 */
import VueRouter from 'vue-router'

//导入对应的路由组件(注意路径./..)
import HomeContainer from './components/tabbar/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/search', component: SearchContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/member', component: MemberContainer },
  ],
  linkActiveClass: 'mui-active'//默认覆盖路由高亮的类  link-active-class
})

// 把路由对象暴露出去
export default router