## {{ name }}

> {{ description }}

> A Weex and Vue.js project，你可以参考它来完善你的Weex应用架构或者直接使用它。

# 项目介绍

这个项目为钉钉开发者准备了从构建，调试，到打包一系列的流程以及编写weex应用的最佳实践，我们使用`Webpack`来打包源代码，`Babel`帮助我们处理ES6的转译。

> 注意 ⚠️ 此刻，我们移除掉了很多不是必须的项目，比如flow静态类型检查，jasmine单元测试等。

关于转场，你可以选择使用`vue-router`的方式，也可以使用钉钉的js-api `openLink`来跳转页面。如果你使用钉钉的js-api，那么你的应用更像一个传统的Native App转场，比如iOS的NavigationController的push，pop等有animation效果转场。

在这个项目中，我们使用`vuex`来驱动整个UI的绘制和数据交互处理。

这个项目，你可以通过[weex-dingtalk-cli](https://github.com/icepy/weex-dingtalk-cli)来安装。

> 注意，如果你的项目非常简单，你可以尝试使用webpack-simple模板，用cli来安装。

# Getting started

访问 `weex` 页面，输入如下：

```bash
$ npm run dev:weex at http://localhost:8089/weex-bundle-dev.js?dd_wx_tpl=http://localhost:8089/weex-bundle-dev.js
```

访问 `web` 页面，输入如下：

```bash
$ npm run dev:web at http://localhost:8080
```

# 目录结构

1. components 可以共享的组件放在这里
2. container 如果你使用了vue-router，那么需要使用这里的共用容器
3. lib 可以共享的函数.js文件放在这里
4. pages 真正的页面放在这里
5. platforms 平台相关的入口放在这里
6. store 放置store的目录

# Build Setup

```bash
# install dependencies
npm install

# 启动 mock 服务器
npm run mock

# 启动 vue web dev 环境，自启服务器 at localhost:8080
npm run dev:web

# build vue web release 环境
npm run build:web

# 启动 weex dev 环境，自启服务器 at localhost:8089
npm run dev:weex

# 启动 weex release 环境
npm run build:weex

# 编译weex和Web环境下所需要的资源，这是可以正式部署的静态资源
npm run build
```

# Mock

本项目用koa写了一个简单的mock server，它非常的灵活可复制，你可以找到 `mock` 目录，在`router.js`中书写你想要mock的数据，比如GET：

```JavaScript
router.get('/weex/get', function *(next) {
    this.body = {
        success: 1
    };
});
```

如果你想写一个POST请求也很容易：

```JavaScript
router.post('/weex/post', function *(next) {
    this.body = {
        success: true
    };
});
```

# 构建脚本学习资源

* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/guides/)

# 如何创建一个weex页面

我们可以先看一个很传统的方式来创建一个新页面，一个页面就是一个`bundle.js`，你应该在`Webpack`配置中去处理这些`bundle.js`。

当你选择创建一个新的页面时，需要经过下列几个步骤：

1. 在platforms/weex目录下创建你的入口文件（icepy-entry.js）

```JavaScript
import Home from '../../pages/icepy/index.vue';
Home.el = '#app';
new Vue(Home);
```
2. 在pages/目录下创建一个`icepy`目录并且创建一个index.vue文件，你可以写一个很简单的Hello Your Name

```Vue
<template>
  <div>
    <text class="hello">Hello Your Name</text>
  </div>
</template>
<script>
  export default {
    name: 'your name'
    data: {}
  }
</script>
<style>
  .hello{

  }
</style>
```

3. 在build目录下的webpack.weex.conf.js文件中的entry里填上一个新的入口

```JavaScript
// webpack 配置

entry:{
  'weex-icepy-bundle': './src/platforms/weex/icepy-entry.js'
}
```

最后，在你的终端里输入 `npm run dev:weex`，感受一下吧。

# 如何创建一个带vue-router的页面

有时候类似一个UIViewController式的`bundle.js`并不是你想要的，很多事情不是很好处理，那么你可以选择vue-router来处理转场，为什么它可以运行weex环境帮你处理转场？因为vue-router本意上是可以运行在任意的JavaScript环境中，你可以设置mode为`abstract`，而且weex是需要上层框架的render来进行计算渲染Native页面的，这也意味着当我们的路由进行转换时，vue-router会去处理一个Vue Component，而这个Vue Component 正是你需要渲染的页面。

在`pages`目录下创建一个组件（页面），比如`dingtalk/index.vue`：

```Vue
<template>
  <div class="wrapper">
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
      return {};
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
<style>

</style>

```

访问`router.js`，参考 [https://router.vuejs.org/zh-cn/essentials/getting-started.html](https://router.vuejs.org/zh-cn/essentials/getting-started.html) 来配置路由。

```JavaScript
import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Dingtalk from '../pages/dingtalk/index.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home
  },
  {
    path: '/dingtalk',
    name: 'dingtalk',
    component: Dingtalk
  }
];

export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}

```
