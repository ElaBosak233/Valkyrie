const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../docs/.vuepress/theme-vdoing'), // 使用本地主题

  title: "Valkyrie",
  description: '仍然是那个 Bukkit / Spigot 插件开发教程，重制版 Valkyrie',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  head,
  plugins,
  themeConfig,
}
