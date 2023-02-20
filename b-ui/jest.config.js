module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
   // 开启生成覆盖率功能
   "collectCoverage": true,
   // 配置需要检查覆盖率的文件
   "collectCoverageFrom": [
     "src/**/*.{js,vue}"
   ]

}
