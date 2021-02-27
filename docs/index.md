---
home: true
# heroImage: /img/web.png
heroText: Valkyrie 2
tagline: ⭐ 仍然是那个 Bukkit / Spigot 插件开发教程，重制版 Valkyrie 🌙

# actionText: 立刻进入 →
# actionLink: /about/

bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 焕然一新
    details: Vuepress & Vdoing 驱动的 Valkyrie，提供更灵活更稳定的视觉体验
    link: 
    imgUrl: /img/web.png # 可选
  - title: 重新启动
    details: 重写所有内容，只为提供更通俗的理解方式和更严谨的科学表达
    link: 
    imgUrl: /img/other.png
  - title: 更上一层楼
    details: 添加更多具有挑战性、实践性的知识，引入国内知名插件开发扩展库 TabooLib
    link: 
    imgUrl: /img/more.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
sidebar: false # 不显示侧边栏
article: false # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: false # 不显示评论栏
editLink: false # 不显示编辑按钮
---

![](https://i.loli.net/2020/12/29/1NJSrABm7PERv23.png)

## 序言

> 可能有些小伙伴知道 Valkyrie 是什么，Valkyrie 至今为止仍然是一个 **一个面向中文社区的 Bukkit / Spigot 插件开发教程**，而且在我的世界中文论坛（以下简称 MCBBS）上发布，但是，反响却不怎么样（如果你对曾经的 Valkyrie 感兴趣，你可以点击 [**这里**](https://github.com/ElaBosak233/Valkyrie/tree/v1.0.0) 阅读 Valkyrie v1.0）

好了，我们要准备进入旅程了，相信我，这肯定是一个精彩的旅途，第二版的 **Valkyrie** `[ˈvælkɪri]` 带给你的不仅仅是更简洁的版面和更精彩的教程，更是相对于第一版更好的学习模式，比如，我们不会单独讲解繁琐的 Java 基础（可能是因为 Ela 太蠢了），而是在写插件的过程中循序渐进，学习这门 *并不难* 的语言，虽然我不知道你为什么来看 Valkyrie，但是 Valkyrie 的定位仍然是 **低门槛的中文 Bukkit / Spigot 插件开发教程**，该讲学术的地方 Valkyrie 会很负责很严谨地说出普遍正确的理论，该幽默诙谐的地方也肯定少不了，好了，废话就不再多说了，为了帮助大家学习，我们来看几个疑问吧

::: note 我没学过 Java，我能学习 Bukkit 插件开发吗
:::
众所周知，Minecraft 是由 Java 编写的，就是说 Bukkit 插件也需要用 Java 编写，不过不用太担心，Valkyrie 的 **低门槛** 可以保证初学者能理解这门 *并不怎么高深* 的技术

::: note 学习插件开发我需要脑子吗，是不是看着教程照做一遍就能精通
:::
这个问题问得可能有点 *真实*，现在做啥事不都要脑子吗，何况是写插件这种事情，我们应该是去发现其中的规律，找到自己的编写方法，学的是技术，并不代表照做一遍 Valkyrie 上的案例就能成才，我们需要自己去思考，去总结

::: note Valkyrie 教程中会使用什么工具吗，所依赖的 Minecraft 版本是多少
:::
虽然我们后面会讲，但先提一句也不晚，为了方便开发和演示，Valkyrie 会使用 **IntelliJ IDEA** 这款优秀的 IDE 进行演示，你可以从 [**这里**](https://www.jetbrains.com/idea/) 下载它，所依赖的 Minecraft 版本是 1.13，原因很简单，1.13 兼容面相比于 1.12.2 或者最新版 Minecraft 而言更广、更稳定

::: note 我可以使用除了 Java 以外的语言吗，例如 Python，JavaScript，.NET 等
:::
如果站在 **纯净的** Bukkit 插件以及 Valkyrie 所扮演角色的立场上，我会毫不犹豫地回答：不行，因为 Minecraft 就是由 Java 编写的。但是事实并非如此，现在社区中已经出现了 `Python => Bukkit Plugin`，或者 `JS => Bukkit Plugin` 之类的组件了，但是它们并不在 Valkyrie 所能教给你们的东西范围之内，如果你有兴趣，可以去社区中查查看

::: note Valkyrie 会是一个怎样的学习过程呢
:::
很简单，我们会在学习写插件的同时学习到 Java 基础，或许这有点考验读者的 *找规律* 能力，但我可以保证，这不难

::: note Valkyrie v1 和 v2 的区别是什么
:::
Valkyrie 第二版相比第一版有重大的改进，Ela 去除了专门讲解 Java 基础的模块，学习编写插件之前，看到 Java 基础肯定是头痛的，正因如此，通过 Valkyrie 学习的时候，Ela 更能将基础融入进更简单更清楚的插件源码里面；以及，Valkyrie v2 是从头到尾重新写成的作品，第一次发布 Valkyrie 的时候，论坛上面对此是议论纷纷（大多都是因为内容问题的指责），

## 问题反馈

虽然说是第二版，但未免也还存在些错误对吧，如果你发现了 Valkyrie 的错误，请务必反馈到 [**issues**](https://github.com/ElaBosak233/Valkyrie)，Ela 表示由衷的感谢！当然，如果你有什么疑问，也可以提交到 issues 哦！

## 版权

Valkyrie 中所有的图片若未进行特殊标注，则都来源于互联网或者由 Ela 自主绘制，Valkyrie 中的所有未经特殊标注的代码、文本皆为原创，通常，非原创的文本、代码分别会这样标注：

> Java 是一门面向对象编程语言，不仅吸收了 C++ 语言的各种优点，还摒弃了 C++ 里难以理解的多继承、指针等概念，因此 Java 语言具有功能强大和简单易用两个特征。Java 语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程 —— 来源于 [**百度百科**](https://baike.baidu.com/item/java/85979)

```java
/**
 * 此部分代码来源于 CSDN
 */
public static void main(String[] args) {
    System.out.println("Helloworld");
}
```

## 开源

Valkyrie 坚持采用 `Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License（以下简称 CC-BY-NC-SA 4.0）` 许可证进行开源，请按照 CC-BY-NC-SA 4.0 的规则对文章进行修改、转载等操作，注意，文章转载请附上源地址！另外，本文未经特殊说明的所有代码、教学内容 等皆为 **原创**，不存在抄袭行为！特别注明，Valkyrie 与 MOJANG STUDIO、Bukkit.org、SpigotMC、Jetbrains、Oracle 皆无关系，为 **独立&公益** 运营机制，如有关于 Valkyrie 本身的问题，请联系 [**@ElaBosak233**](https://github.com/ElaBosak233)