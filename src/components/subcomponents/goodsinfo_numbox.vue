<!--
 * @Author: your name
 * @Date: 2019-11-05 09:07:20
 * @LastEditTime: 2019-11-09 22:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\vue-demo\src\components\subcomponents\goodsinfo_numbox.vue
 -->
<template>
  <!-- 问题：我们不知道什么时候能够拿到max，但是，总归有一刻，会得到真正的max值 -->
  <!-- 我们可以使用watch属性监听，来监听父组件传递过来的max值，不管watch会被触发几次 ，但最后一次-->
  <!-- data-numbox-max='max' 这特么异不异步 都没软用..只有定死了 才有反应... -->
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<!--分析：子组件什么时候把数据传递给父组件 -->
<script>
//视频中必须引入才能正确执行，实际操作中 不需要
//bug:页面切换后，+、- 失效
/* import mui from '../../lib/mui/js/mui.min.js'

    export default{
        mounted(){
            //初始化数字选择框组件
           ("mui-numbox")mui.numbox() 
        }
    } */
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    // 初始化数字选择框(否则点击+— 失效)
    // 因为此处没有使用http传值，直接设置其最大值
    mui(".mui-numbox").numbox();
    // console.log(this.max);
    mui(".mui-numbox")
        .numbox()
        .setOption("max", 20);
  },
  methods: {
    countChanged() {
      //每当文本框的数据被修改的时候，立即把 最新的数据，通过事件调用传递给父组件。
      //console.log(this.$refs.numbox.value)
      //parseInt 转化为数字
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    //属性监听 动态的设置某个值(在异步情况下 watch监听)
    max: function(newVal, oldVal) {
      console.log("newVal", newVal);
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
