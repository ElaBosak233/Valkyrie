# 1.3 第一个 Bukkit 程序

---

![Java](https://i.loli.net/2020/07/18/CKf9GPujkcHzyE2.png)

---

## 项目结构

其实，你在 **[前一节课](./source/part01/1.2-了解BukkitAPI.md)** 已经领略到了 **Java** 语言的冰山一角了，但如果你是对 **Java** 并不怎么熟悉的小白，那么这里就简单地讲一下 **Bukkit** 项目的结构，有了结构，你就知道该如何应战了！

!> 接下来的内容看起来有点难，虽然可以一知半解地过去，但是建议你如果真的看不懂，先跳过这一节

```txt
// 目录结构
src (资源目录)
 |- main (主目录)
 |    |- java
 |         |- Group ID (后面会讲，其实就是个反着写的域名)
 |                |- Main.java (主类，建议使用 Main 或者 含大写的插件名 作为主类名)
 |                |- utils (工具包文件夹，可以存放自制的或者外部导入的 .java 文件，以使用其方法为主)
 |                     |- xxx.java
 |                     |- ...
 |                |- sql (数据库工具包，存放控制数据库的 .java 文件，同样是使用其方法，但都是在操作数据库)
 |                     |- SQLite.java
 |                     |- ...
 |                |- ...
 |    |- resources (资源文件夹)
 |           |- plugin.yml (重要！这个文件缺失你的 Bukkit 插件是跑不起来的！这里定义了插件的主类地址、依赖的 API 版本、插件版本号等重要元素)
 |           |- config.yml (有时候你需要服务器管理员来给你提供配置文件信息，这个将作为模板存放到插件生成目录，非必需)
 |           |- ... (更多配置文件)
 |- test (测试目录，不常用，这里就省略了)
      |- ...

libs (外部依赖包文件夹，向其中投入 .jar 文件即可)

build (Gradle 构建内容文件夹)

.gradle (Gradle 缓存目录)

build.gradle (Gradle 构建配置文件)

settings.gradle (Gradle 配置文件)

gradlew (Gradle 运行脚本，适用于 Linux，MacOS)

gradlew.bat (Gradle 运行脚本，适用于 Windows)
```

如果你还能看到这里，那么恭喜你，你已经了解了 **Bukkit** 的项目结构，接下来，需要普及一下，一个普通的 `Main.java` 文件内，会出现的内容

## 上手 Main.java

```javascript
package ... // 这里写的是你的 Group ID + 项目名的小写

import ... // 这里是导入外部的依赖，经常用到，但是后面学习了 IntelliJ IDEA 后，导入的事情，几乎不用管

/**
 * @author ... //这里填写的是插件作者名称，增强版权意识！
 */
public final class Main extends JavaPlugin { // extends JavaPlugin 是 Java 语言面向对象的体现，说明主类 Main 是对 JavaPlugin 的扩展(这个仅限于写插件，如果你是在写普通的 Java 程序，JavaPlugin 千万不要添加)
    @Override // 重写标识，后面会讲
    public void onEnable() {
        Bukkit.getServer().getConsoleSender().sendMessage(ChatColor.GREEN+"我的插件被调用了"); // 这里连用了好多个 API，最后实现的就是向控制台发送一句话，而且还是绿色的~
    }
    @Override
    public void onDisable() {
        // 你觉得你的插件被关闭时，你会干什么？
    }
}
```

是不是少了什么？没错！少了 `plugin.yml`！

```yaml
name: Hello # 规定插件名称
version: 1.0.0 # 规定插件版本
main: Group ID + 项目名小写 + .Main # 这里规定的是插件的主类
api-version: 1.13 # 规定插件依赖的 Bukkit API 版本
authors: [Valkyrie]
description: xxxxx # 规定对插件的描述
website: https://valkyrie.ela.ac.cn # 规定插件的网页
```

其实，读到这里，第一个 Bukkit 程序就完成了，只不过，别人的 Bukkit 插件都是以 `.jar` 文件形式拖入服务器的 **plugins** 文件夹的，我们的都是一大堆文件夹和寥寥无几的文件，该如何制作出一个 `.jar` 文件呢？既然是 21 世纪，总不可能还用命令行来执行复杂的脚本吧？请你阅读下一节 **[初识 IntelliJ IDEA](/source/part01/1.4-初识IntelliJIDEA.md)**