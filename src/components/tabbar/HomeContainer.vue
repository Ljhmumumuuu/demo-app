<!--
 * @Author: your name
 * @Date: 2019-11-04 16:42:36
 * @LastEditTime: 2019-11-04 17:35:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\vue-demo\src\components\tabbar\HomeContainer.vue
 -->
<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.imgurl" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/icons/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/icons/menu2.png" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/icons/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

    <h3>HomeContainer</h3>
  </div>
</template>

<script>
//本地图片获取
export default {
  data() {
    return {
      lunbotuList: [
        { id: 1, imgurl: "./src/images/cat1.png" },
        { id: 2, imgurl: "./src/images/cat2.png" },
        { id: 3, imgurl: "./src/images/cat3.png" },
        { id: 4, imgurl: "./src/images/cat4.png" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: black;
    }
    &:nth-child(3) {
      background-color: yellow;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
