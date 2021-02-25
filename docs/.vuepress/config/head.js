// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/Valkyrie.png' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '教程,Minecraft,我的世界,Bukkit,Spigot,插件,开发',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['link', { href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css', rel: 'stylesheet'}],
  // ['link', { href: 'https://cdn.bootcdn.net/ajax/libs/bulma/0.9.2/css/bulma.min.css', rel: 'stylesheet'}]
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]
