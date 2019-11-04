// 入口文件
import Vue from 'vue'

// 引入整体mint
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入组件的router.js路由模块
import router from './router.js'


//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)


Vue.use(MintUI)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
   //1.4挂载路由对象到VM实例上
   router,
})