// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础',
    link: '/basic/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
  {
    text: '进阶',
    link: '/advanced/',
  },
  {
    text: '挑战',
    link: '/challenging/',
  },
  {
    text: '附录',
    link: '/extra/',
    // items: [
    //   { text: '学习', link: '/pages/f2a556/' },
    //   { text: '面试', link: '/pages/aea6571b7a8bae86/' },
    //   { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
    //   { text: '实用技巧', link: '/pages/baaa02/' },
    //   { text: '友情链接', link: '/friends/' },
    // ],
  },
  {
    text: '关于',
    link: '/about/'
  }
]
