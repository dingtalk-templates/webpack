<template>
  <div class="wrapper">
    <text class="title">Hello icepy</text>
    <text class="subtitle" v-on:click="getClick">{{ link }}</text>
  </div>
</template>
<script>

    import dingtalk from 'weex-dingtalk';
    const modal = weex.requireModule('modal');
    const globalEvent = weex.requireModule('globalEvent');
    export default {
        name: 'home',
        data: function(){
            return {
                link: 'DingTalk'
            }
        },
        mounted: function(){
            console.log(dingtalk);
            dingtalk.ready(function(){
                const dd = dingtalk.apis;
                // 设置导航
                dd.biz.navigation.setTitle({
                    title: 'icepy'
                });
            });
        },
        methods: {
            getClick: function(){
              modal.toast({
                message: 'Hello World ICEPY !!!',
                duration: 2
              });
            }
        }
    }
</script>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333377;
    width: 750px;
    height: 1100px;
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
