# 附录 2 中文 Plugin.yml

?> 文档翻译自 **[https://www.spigotmc.org/wiki/plugin-yml/](https://www.spigotmc.org/wiki/plugin-yml/)**

`plugin.yml` 是一个包含有关您的插件信息的文件，如果没有这个文件，你的插件将 **不会** 工作，它由一组属性组成，每个属性都在新行中定义，**没有** 缩进，所有属性均 **区分大小写**，**粗体** 属性是必要设置项，***斜体*** 的属性是选择性设置项

## 必要设置项

要使 `plugin.yml` 文件有效，必须具备下列三个属性

### main

- 此属性指向继承 `JavaPlugin` 的类 ( 即插件主类 )
- 它必须包含完整的名称空间，包括类文件本身

```yaml
main: org.spigotmc.testplugin.Test
```

### name

- 此属性是您的插件的名称
- 只能存在大小写字母数字和下划线 (az，AZ，0-9，_ )
- 用于确定插件的数据文件夹的名称
- 优良作法是将您的jar命名为相同的名称 ( 例如：MyPlugin.jar )

```yaml
name: MyPlugin
```

### version

- 插件的版本
- 最常见的版本控制格式是 [Semantic Versioning](https://semver.org/)，它被编写为 MAJOR.MINOR.PATCH ( 例如：`1.4.1` 或 `9.12.4` )

```yaml
version: 1.4.1
```

## 选择性设置项

### description

- 插件提供的功能的人性化描述
- 描述可以有多行

```yaml
description: This plugin does so much stuff it can't be contained!
```

### api-version

- 您要使用的 API 版本
- 可用版本有 1.13、1.14、1.15 和 1.16
- 这将向服务器发出信号，说明您的插件已经考虑了特定的服务器版本，并且不应应用任何向后兼容措施，因此，您还需要确保已对代码进行重新编程，以解决旧配置，数据等的读取问题，每个服务器版本都可以决定兼容性的实现方式，未知或以后的版本将阻止插件启用，从 1.14 版开始，仍允许使用 1.13 的 api 版本 —— 但是将来的版本可能会基于该版本而向后支持

```yaml
api-version: 1.16
```

### load

- 明确说明何时应加载插件。如果未提供，则默认为 `POSTWORLD`
- 有两个可选择的值：`STARTUP` 和 `POSTWORLD`

```yaml
load: POSTWORLD
```

### author

- 标识谁开发了此插件的唯一标识
- 在某些服务器错误消息中使用，以提供有关发生错误时与谁联系的有用信息
- 建议使用 SpigotMC.org 论坛用户名或电子邮件地址
- 如果是协作项目，则允许您列出多个作者
- 必须采用有效的 [YAML列表](https://en.wikipedia.org/wiki/YAML#Lists) 格式

```yaml
author: md_5
```

```yaml
authors: [md_5, thinkofdeath]
```

### website

- 此插件或者插件作者的网站
- 如果您没有专门的网站，则建议您链接到公布该插件的页面

```yaml
website: www.spigotmc.org
```

### depend

- 插件需要加载的插件列表
- 必须采用有效的 [YAML列表](https://en.wikipedia.org/wiki/YAML#Lists) 格式
- 使用所需插件的名称属性以指定依赖性
- 如果未找到此处列出的任何插件，则您的插件将无法加载
- 如果有多个插件相互依赖，那么就不会有没有可卸载依赖项的插件，所有插件都将无法加载

```yaml
depend: [WorldEdit, Towny]
```

### prefix

- 希望在登录控制台时使用的名称，而不是插件的名称

```yaml
prefix: Testing
```

### softdepend

- 插件具有完整功能所需的插件列表
- 该值必须为 [YAML列表](https://en.wikipedia.org/wiki/YAML#Lists) 格式
- 使用所需插件的名称属性以指定依赖性
- 您的插件将在此处列出的所有插件之后加载
- 循环软依赖关系可以任意加载

```yaml
softdepend: [Essentials, AnotherPlugin]
```

### loadbefore

- 此插件之后应加载的插件列表
- 该值必须采用有效的 [YAML列表](https://en.wikipedia.org/wiki/YAML#Lists) 格式
- 就像列出的插件软件一样依赖于此插件
- 使用所需插件的名称属性以指定目标
- 您的插件将在此处列出的所有插件之前加载
- 循环软依赖关系可以任意加载

```yaml
loadbefore: [OnePlugin, AnotherPlugin]
```

### commands

- 插件希望注册的命令名称，以及可选的命令属性列表
- 命令名称不应包含发出命令所需的前导 "/"

```yaml
commands:
    flagrate:
        [optional command attributes]
```

### permissions

- 插件希望注册的权限。每个节点代表一个注册许可
- 每个权限可以具有多个属性
- 权限注册是可选的，也可以通过代码完成
- 权限注册允许您设置描述，默认值和子级-父级关系
- 权限名称应使用 \<pluginname\>.[category].[category].\<permission\> 样式

```yaml
permissions:
    inferno.*:
        [optional permission attributes]
    inferno.flagate:
        [optional permission attributes]
```

## Commands

命令块以命令名称开头，然后具有可选属性列表

### description

- 命令功能的简短描述
- 可以与 `/help` 结合使用

```yaml
description: A simple description.
```

### aliases

- 用户可以使用的替代命令名称
- 您可以指定任何一个，一个或多个别名
- 如果您指定多个别名，则它们必须采用有效的 [YAML列表](https://en.wikipedia.org/wiki/YAML#Lists) 格式

```yaml
aliases: foobar
```

```yaml
aliases: [foobar, fubar]
```

### permission

- 使用该命令所需的最基本的权限节点
- 此权限节点可用于确定用户是否被允许看到此命令

```yaml
permission: test.foo
```

### permission-message

- 如果用户没有使用此命令所需的权限，则会向用户显示禁止信息
- 您可以使用空引号表示不显示任何内容

```yaml
permission-message: You do not have permission to use this command.
```

### usage

- 有关如何使用此命令的简短描述
- 当插件的命令处理程序 ( 通常为onCommand ) 未返回true时，显示给发出命令的人
- \<command\>是一个占位符，无论该占位符出现在哪里，它都会被发出的命令替换
- 要使用字符串 "Usage:" ( 即用法：Usage:/test command )，请在用法标签后的文本两边加上双引号 ( 例如：usage: "Usage: /test command" )

```yaml
usage: "Usage: /<command> [test|stop]"
```

## Permissions

权限块以权限名称开头，后跟属性节点

### description

- 关于此权限允许的简短描述
- 允许以代码访问这里，并帮助服务器管理员理解

```yaml
description: Allows you to use the command /test
```

### default

- 设置权限的默认值
- 如果节点不存在，则权限默认为 op
- 允许的默认值为：true，false，op，not op

```yaml
default: true
```

- 默认值为 true 将始终授予玩家权限
- 默认值为 false 将不会授予玩家权限
- 如果玩家是管理员，则默认值为 op 时，将始终授予玩家权限
- not op 与 op 是相反的

### children

- 允许您为许可设置子级，子节点是权限名称
- 每个子节点必须设置为 true 或 false
- 子节点为 true 会继承父权限
- 子节点为 false 会继承反向父级权限
- 也可以包含其他权限节点

> 以下的值不是本文中使用的值，它们仅用于说明目的

```yaml
permissions:
    test.all:
        children:
            test.foo: true
            test.bar: false
```

## Example

```yaml
main: org.spigotmc.annotationtest.Test
name: TestPlugin
version: '1.0'
description: A test plugin
load: POSTWORLD
author: md_5
website: spigotmc.org
prefix: Testing
depend:
    - WorldEdit
    - Towny
softdepend:
    - FAWE
loadbefore:
    - Essentials
commands:
    foo:
    description: Foo command
    aliases:
        - foobar
        - fubar
    permission: test.foo
    permission-message: You do not have permission!
    usage: /<command> [test|stop]
permissions:
    test.foo:
        description: Allows foo command
        default: op
    test.*:
        description: Wildcard permission
        default: op
        children:
            test.foo: true
```