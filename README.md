> A Weex and Vue.js project，你可以参考它来完善你的Weex应用架构或者直接使用它。

### 项目介绍

最重要的是，你需要明白src目录下的含义：

1. components 可以共享的组件放在这里
2. lib 可以共享的函数.js文件放在这里
3. mock 模拟数据
4. pages 真正的页面放在这里
5. platforms 平台相关的入口放在这里

在这个项目中，主要用webpack来解决构建打包的问题，babel来转译ES5，你可以访问build目录来查看构建脚本。

你可以在 [weex-generator-package](https://github.com/icepy/weex-generator-package) 访问并下载使用它。

### Build Setup

```bash
# install dependencies
npm install

# 启动 vue web dev 环境，自启服务器 at localhost:8080
npm run dev:web

# build vue web release 环境
npm run build:web

# 启动 一个临时服务器，用于访问 weex bundle 资源
python -m SimpleHTTPServer 8089

# 启动 weex dev 环境
npm run dev:weex

# 启动 weex release 环境
npm run build:weex

# 编译weex和Web环境下所需要的资源，这是可以正式部署的静态资源
npm run build
```

### 构建脚本学习资源

* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/guides/)

### 如何创建一个新页面

在初始状态下的generator-package项目中已经存在了一个Hello Dingtalk 的页面，你可以修改它，或者创建一个新的页面。

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
		<text>Hello Your Name</text>
	</div>
</template>
<script>
	export default {
		name: 'your name'
		data: {}
	}
</script>
<style>

</style>
```

3. 在build目录下的webpack.weex.conf.js文件中的entry里填上一个新的入口

```JavaScript
// webpack 配置

entry: {
	'weex-icepy-bundle': './src/platforms/weex/icepy-entry.js'
}
```

最后，在你的终端里输入 `npm run dev:weex`，感受一下吧。
