<template>
  <div class="wrapper">
    <div class="bind-vue-prompt">
      <div class="bind-vue-image">
        <image class="image" :src="vueImage"/>
      </div>
      <div class="bind-vue-text">
        <text class="text-control">钉钉Weex小程序</text>
        <text class="text-control">快来使用Vue.js开发你的小程序吧</text>
      </div>
    </div>
    <div class="bind-vue-container" @click="bindForvue">
      <text class="bind-vue">确定</text>
    </div>
  </div>
</template>
<script>
  import dingtalk from 'weex-dingtalk';

  export default {
    name: 'bind-vue',
    data: function(){
      return {
        vueImage:'https://cn.vuejs.org/images/logo.png'
      }
    },
    mounted: function(){
      //resume
      dingtalk.on('resume',function(){
        console.log('resume weex generator-package')
      });

      //pause
      dingtalk.on('pause',function(){
        console.log('pause weex generator-package');
      });
    },
    methods: {
      bindForvue: function(){
        this.$router.back();
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
  }
  .bind-vue-prompt{
    width: 514px;
    justify-content: center;
    align-items: center;
    margin-bottom: 112px;
  }
  .bind-vue-image{
    width: 514px;
    height: 243px;
    margin-bottom: 73px;
  }
  .image{
    width: 514px;
    height: 243px;
  }
  .bind-vue-text{
    width: 388px;
    height: 108px;
  }
  .text-control{
    text-align: center;
    font-size: 34px;
    color: #000;
  }
  .bind-vue-container {
    width: 702px;
    height: 88px;
    position: fixed;
    bottom: 24px;
    left: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #4fc08d;
  }
  .bind-vue{
    font-size: 34px;
    color: #ffffff;
    text-align: center;
  }
</style>
