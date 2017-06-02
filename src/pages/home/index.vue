<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle" v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>

  import dingtalk from 'weex-dingtalk';
  const modal = weex.requireModule('modal');
  export default {
    name: 'home',
    data: function(){
      return {
        link: 'DingTalk'
      }
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // 设置导航
        dd.biz.navigation.setTitle({
          title: 'Dingtalk'
        });
      });
    },
    methods: {
      getClick: function(){
        this.$router.push('dingtalk');
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
  }
</style>
