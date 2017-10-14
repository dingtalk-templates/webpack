<template>
  <div class="wrapper">
    <div class="bind-vue-container" @click="bindForvue">
      <text class="bind-vue">确定</text>
    </div>
  </div>
</template>
<script>
  import dingtalk from 'dingtalk-javascript-sdk';

  export default {
    name: 'bind-vue',
    data: function(){
      return {
        vueImage:'https://cn.vuejs.org/images/logo.png'
      }
    },
    mounted: function(){

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
  .bind-vue-container {
    width: 702px;
    height: 88px;
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
