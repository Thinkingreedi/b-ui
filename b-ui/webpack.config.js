const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
// 引入glob库遍历components文件夹（glob：node的static库）
const glob = require('glob')
const list = {}
// 同步读取文件，使用async
async function makeList(dirPath, list) {
  // 拿到dirPath文件夹下所有index.js文件路径
  const files = glob.sync(`${dirPath}/**/index.js`)
  // 循环遍历拆分拿到list，数据结构：{card: './components/lib/card/index.js'}
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`
  }
}

makeList('components/lib', list)
module.exports = {
  mode: 'development', // 打包模式
  // 入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始
  entry: list,
  // output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。
  output: {
    
    path: path.resolve(__dirname, 'dist'), // fix输出路径必须为absolute path（绝对路径）
    filename: 'static/js/[name].umd.js', // 打包后输出的组件文件名
    library: 'mui',
    libraryTarget: 'umd',
    clean:true
  },
  // webpack不识别.vue文件，引入插件vue-loader，进行转换
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ]
  }
}