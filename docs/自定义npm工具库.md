# 自定义工具函数库

# 说明

## 1. 包含以下8个方面

    1). 函数相关
    2). 数组相关
    3). 对象相关
    4). 字符串相关
    5). 事件总线
    6). 消息订阅与发布
    7). Promise
    8). ajax函数axios
    9). 数据结构与算法

## 2. 使用

    1). 下载: 
        npm install -S JSJustToolc
        yarn add JSJustToolc
    
    2). 网页中使用
        <script src="./node_modules/JSJustToolc/lib/JSJustToolc.js"></script>
        <script>
          console.log(JSJustToolc.flatten1([1, [3, [2, 4]]]))  // [1, 3, 2, 4]
        </script>
    
    3). 模块化引入
        import {flatten1} from 'JSJustToolc'
        const {flatten2} = require('JSJustToolc')
        console.log(JSJustToolc.flatten1([1, [3, [2, 4]]]))
        console.log(JSJustToolc.flatten2([1, [3, [2, 4]]]))
    
    4). 完整的功能函数测试
        test文件夹下都一系列测试页面

# API

## 1. 函数相关

### call()

    语法: call(fn, obj, ...args)
    功能: 等同于函数对象的call方法

### apply()

    语法: apply(fn, obj, args)
    功能: 等同于函数对象的apply方法

### bind(fn, obj, args)

    语法: bind(fn, obj, ...args)
    功能: 等同于函数对象的bind方法

### throttle()

    语法: throttle(callback, delay)
    功能: 用来生成节流函数的工具函数

### debounce()

    语法: debounce(callback, delay)
    功能: 用来生成防抖函数的工具函数

## 2. 数组相关

### map()

### reduce()

### filter()

### find()

### findIndex()

### every()

### some()

### unique1() / unique2() / unique3()

### concat()

### slice()

### flatten()

### compact()

### chunk() / chunk2()

### difference()

### mergeArray()

### pull()

### pullAll()

### drop()

### dropRight()

## 3. 对象相关

### newInstance()

### myInstanceOf()

### mergeObject()

### clone1() / clone2()

### deepClone1() / deepClone2() / deepClone3() / deepClone4()

## 4. 字符串相关

### reverseString()

### palindrome()

### truncate()

## 5. 事件总线: eventBus

### eventBus.on()

### eventBus.emit()

### eventBus.off()

## 6. 消息订阅与发布: PubSub

### PubSub.subscribe()

### PubSub.publish()

### PubSub.unsubscribe()

## 7. Promise

### Promise()

### Promise.prototype.then()

### Promise.prototype.catch()

### Promise.resolve()

### Promise.reject()

### Promise.all()

### Promise.race()

### Promise.resolveDelay()

### Promise.rejectDelay()

## 8. ajax函数axios

### axios()

### axios.get()

### axios.post()

### axios.delete()

### axios.put()

------

====================================================

------

# 打包自定义工具库

## 1. 编码与配置

### 1). 入口JS

    export { apply } from './function/apply'
    export { default as axios } from './axios'

### 2). webpack配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const myEnvs = require("./.env.js")

// console.log(myEnvs)
// console.log(myEnvs.mode) // production

// webpack中的所有的配置信息都应该写在 module.exports 中.
module.exports = {
    // webpack配置
    // 模式
    // mode: 'development', // 开发模式 development 和 生产环境 production
    mode: myEnvs.mode,
    // 入口起点 指定入口文件
    entry: './src/index.js',
    // loader的配置
    module: {
        rules: [
            {}
        ]
    },
    // 用来设置引用模块
    resolve: {
        extensions: ['.js']
    },
    // 输出 指定打包文件所在目录
    output: {
        // 打包文件的名称
        // filename: 'JSJustToolc.js', // 这是开发模式使用的打包文件名称
        filename: myEnvs.mode === 'production' ? 'JSJustToolc.min.js' : 'JSJustToolc.js',
        // 打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 由于globalObject默认是window，所以我们需要修改成this
        // 要使umd 在浏览器和node.js 上都可用，globalObject需要设置成this
        globalObject: "this",
        // 配置打包的环境
        environment: {
            // 告诉webpack 不使用箭头函数
            arrowFunction: false
        },
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
        // 向外暴露的对象的名称
        library: 'JSJustToolc'
    },
    // 构建目标
    // target: 'web', // node webpack 将在类 Node.js 环境编译代码 || 默认 web 编译为类浏览器环境里可用
    // 外部扩展
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_' // 页面引入的全局变量
        }
    },
    // 插件
    plugins: [
        // 自动生成html
        new HtmlWebpackPlugin({
            title: "WebPack打包JSJustToolc这个js工具库库模板html.",
            template: "./test/index.html",
            scriptLoading: "blocking"
        }),
        // 主动清理dist
        new CleanWebpackPlugin(),
    ]
};
```

### 3). package.json

   ```json
{
  "name": "JSJustToolc",
  "version": "1.0.0",
  "description": "❤JSJustToolc > JavaScript Tools For U (You) ❤.",
  "scripts": {
    "webpack-build": "npx webpack",
    "webpack-build-umd": "npx webpack --config webpack.config.js",
    "webpack-build-umd-development": "npx webpack --config webpack.config.js --mode development",
    "webpack-watch": "webpack --watch",
    "webpack-conf": "webpack --config webpack.config.js",
    "webpack-serve": "npx webpack serve --open chrome.exe"
  },
  "keywords": [
    "webpack",
    "demo"
  ],
  "author": "LC ahlc@sina.cn",
  "homepage": "https://gitee.com/ahviplc/JustTypeScript",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "html-webpack-plugin": "^5.3.2",
    "webpack": "^5.41.1",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "bin": {
    "JSJustToolc": "test/welcome.js"
  },
  "main": "./lib/JSJustToolc.min.js",
  "module": "./lib/JSJustToolc.js",
  "browser": "./lib/JSJustToolc.min.js",
  "files": [
    "src",
    "test",
    "README.md",
    "webpack.config.js",
    "package.json",
    "dist",
    "lib",
    "docs"
  ],
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

### 4). 生成打包库文件

    npm run build

## 2. 发布到npm仓库

		1). 前置
	    npm配置的中央仓库不能是淘宝镜像
	    npm config set registry https://registry.npmjs.org/
	    npm config set registry http://registry.npm.taobao.org/
	      
	2). 注册npm中央仓库账号
	    https://www.npmjs.com/
	    用户名/密码/邮箱
		
	3). npm addUser
	    登陆npm仓库
	    依次指定用户名/密码/邮箱
		
	4). npm publish
			  将库发布到npm仓库
			  要求: 库的名称一定要唯一
		
	5). npm unpublish --force
	    强制删除已发布的库
	    注意: 必须在72小时内, 否则不能再删除

## 3. 下载并使用自定义工具包

    1). 下载并使用自定义工具包
          yarn add JSJustToolc
     
    2). 网页中使用
    	    <script src="./node_modules/JSJustToolc/lib/JSJustToolc.js"></script>
        <script>
          console.log(JSJustToolc.flatten1([1, [3, [2, 4]]]))  // [1, 3, 2, 4]
        </script>
      
    3). 模块引入并使用
        import {flatten1} from 'JSJustToolc'
        const {flatten2} = require('JSJustToolc')
        console.log(JSJustToolc.flatten1([1, [3, [2, 4]]]))
        console.log(JSJustToolc.flatten2([1, [3, [2, 4]]]))