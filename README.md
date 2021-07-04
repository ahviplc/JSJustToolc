<h1 align="center">Welcome to JSJustToolc 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> ❤JSJustToolc > JavaScript Tools For U (You) ❤.

### 🏠 [Homepage-gitee](https://gitee.com/ahviplc/JSJustToolc)

### 🏠 [Homepage-github](https://github.com/ahviplc/JSJustToolc)

内含`webpack` `nodejs` `js` 等知识点.

`使用webpack打包ts` 等.

## Install

`安装依赖`

```sh
npm i
npm install
或者
yarn
yarn install
```

## Usage

`其他一些打包命令 具体去看` `package.json`

`打包`

`生产模式 production`

```sh
npm run webpack-build-umd
或
yarn webpack-build-umd
```

`开发模式 development`

```sh
npm run webpack-build-umd-development
或
yarn webpack-build-umd-development
```

## Links

```markdown
感谢大神 GitHub - zxfjd3g/JSJustToolc: 尚硅谷前端工具函数库
https://github.com/zxfjd3g/JSJustToolc

fast - GitHub - zxfjd3g/JSJustToolc: 尚硅谷前端工具函数库
https://hub.fastgit.org/zxfjd3g/JSJustToolc

JustWebpack: JustWebpack,Webpack打包小demo.
https://gitee.com/ahviplc/JustWebpack

JustRollup: JustRollup,Rollup打包全平台JS库小demo.
https://gitee.com/ahviplc/JustRollup

扩展知识 GitHub - Trinea/android-open-project: A categorized collection of Android Open Source Projects, More powerful web
version:
https://github.com/Trinea/android-open-project

Lodash 简介 | Lodash 中文文档 | Lodash 中文网
https://www.lodashjs.com/

GitHub - lodash/lodash: A modern JavaScript utility library delivering modularity, performance, & extras.
https://github.com/lodash/lodash

JSON
https://www.json.org/json-en.html

json在线视图
https://www.bejson.com/jsonviewernew/

严格模式 - JavaScript | MDN
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

webpack中文文档
https://v4.webpack.docschina.org/

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading
parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON,
Coffeescript, LESS, ... and your custom stuff.
https://github.com/webpack/webpack

html-webpack-plugin - npm
https://www.npmjs.com/package/html-webpack-plugin

GitHub - jantimon/html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles
https://github.com/jantimon/html-webpack-plugin

html-webpack-plugin详解 - wonyun - 博客园
https://www.cnblogs.com/wonyun/p/6030090.html

webpack-dev-server - npm
https://www.npmjs.com/package/webpack-dev-server

GitHub - webpack/webpack-dev-server: Serves a webpack app. Updates the browser on changes.
Documentation https://webpack.js.org/configuration/dev-server/.
https://github.com/webpack/webpack-dev-server

[Preview] \README.md - webpack/webpack-dev-server - GitHub1s
https://github1s.com/webpack/webpack-dev-server

clean-webpack-plugin - npm
https://www.npmjs.com/package/clean-webpack-plugin

GitHub - johnagan/clean-webpack-plugin: A webpack plugin to remove your build folder(s) before building
https://github.com/johnagan/clean-webpack-plugin

fast - GitHub - johnagan/clean-webpack-plugin: A webpack plugin to remove your build folder(s) before building
https://hub.fastgit.org/johnagan/clean-webpack-plugin

[Preview] \README.md - johnagan/clean-webpack-plugin - GitHub1s
https://github1s.com/johnagan/clean-webpack-plugin

GitHub - ahviplc/JustTampermonkey: JustTampermonkey,一个TamperMonkey工具集装箱.
https://hub.fastgit.org/ahviplc/JustTampermonkey

webpack打包,生成js，提供给node和浏览器使用_weixin_33775582的博客-CSDN博客
https://blog.csdn.net/weixin_33775582/article/details/91438601

Output | webpack
https://webpack.js.org/configuration/output/

Output | globalobject | webpack
https://webpack.js.org/configuration/output/#output

这个写的非常好 非常详细 值得一看 windows10 下使用webpack创建library - SegmentFault 思否
https://segmentfault.com/a/1190000019152451

HTML <script> 标签的 defer 属性
https://www.w3school.com.cn/tags/att_script_defer.asp

package.json 中 你还不清楚的 browser，module，main 字段优先级_weixin_34396902的博客-CSDN博客
https://blog.csdn.net/weixin_34396902/article/details/93170277

Webpack打包UMD的export问题_daihaoxin的专栏-CSDN博客
https://blog.csdn.net/daihaoxin/article/details/106205639

配置webpack,让输出的JS支持ES6-Module的export和import - 宅小歪的BLOG
https://www.zhaixiaowai.com/Article/article-24.shtml

@purtuga/esm-webpack-plugin - npm
https://www.npmjs.com/package/@purtuga/esm-webpack-plugin

GitHub - purtuga/esm-webpack-plugin: A webpack plugin to help build/output ESM libraries
https://github.com/purtuga/esm-webpack-plugin

Nodejs 环境下.env配置环境变量（附源码分析）_奋斗的小绿萝-CSDN博客
https://blog.csdn.net/weixin_40817115/article/details/86189969
```

## Notes

### 1. 随记

#### 1.1 安装webpack

```sh
npm install --save-dev webpack webpack-cli
或
yarn add -D webpack webpack-cli
```

#### 1.2 安装webpack插件和其他以来

```sh
`ts处理的loader`
yarn add --dev ts-loader
和
`自动生成html内置打包生成的js`
yarn add --dev html-webpack-plugin
和
`webapck web服务`
yarn add -D webpack-dev-server
和
`自动清空dist再打包`
yarn add -D clean-webpack-plugin
和
`babel和webpack结合使用`
yarn add -D @babel/core @babel/preset-env babel-loader core-js
和
`帮助构建/输出 ESM 库的 webpack 插件`
yarn add -D @purtuga/esm-webpack-plugin
```

### 2. 注意点

`package.json`

```markdown
* "type": "commonjs", //   "type": "module" , 只有 不配置 `type` 按照当前的 webpack 配置文件 webpack.config.js 才可打包成功.
* .env.js 这里是 项目环境env配置项.
```

### 3. 小知识

`详解AMD、CommonJS和UMD模块化规范`

```markdown
CJS: CommonJS模块可以说是当前最流行的模块定义规范。相比于AMD，它的工作效率更高、语法更简单。一开始，CommonJS模块是JavaScript服务器模块的规范。

AMD：Asynchronous Module Definition（异步模块规范），为浏览器设计的模块定义规范，最老的方式之一，专为浏览器而设计。

UMD：Universal Module Definition（通用模块规范），是由社区想出来的一种整合了CommonJS和AMD两个模块定义规范的方法。让你的模块能在javascript所有运行环境中发挥作用。
```

`匹配规则`

```markdown
** 表示任意层级的子目录。

/* 表示第一层级下的任意子目录或文件。

/**/* 就是任意层级下的文件。
```

`package.json中的 browser，module 和 main 字段`

```markdown
字段定义 main : 定义了 npm 包的入口文件，browser 环境和 node 环境均可使用

module : 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用

browser : 定义 npm 包在 browser 环境下的入口文件
```

### 4. 代码段

```js
// ESM规范导入方式
// import path from 'path'
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import {CleanWebpackPlugin} from "clean-webpack-plugin";
```

## Author

👤 **LC ahlc@sina.cn**

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
