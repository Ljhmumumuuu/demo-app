<!--
 * @Author: your name
 * @Date: 2019-11-02 04:54:12
 * @LastEditTime: 2019-11-09 20:52:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\vue-demo\src\App.vue
 -->
<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="Vue"></mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-lib" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span></span
        >
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>


<style scoped>
.mint-header.is-fixed {
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

/* .v-enter.v-leave-to 写在一起的话：左进右出；分开写：左进左出 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  /* 防止动画时上移 */
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 改类名解决tabber无法切换的问题 */
.mui-bar-tab .mui-tab-item-lib.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-lib {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-lib .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
