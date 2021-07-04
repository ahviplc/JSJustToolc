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
