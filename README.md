<!--
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-05-30 17:53:10
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-05-30 18:01:57
-->

# gulp 版本：@3.9.1

## 标题: 利用 gulp-file-include 实现模板复用，大大提升开发效率

分支： dev-gulp@3-gulp-file-include-20200519

## 简介

在开发传统项目时，页头、页尾通常都是固定内容不会改变，页面中可能还存在一些可复用的版块样式。当使用 gulp-file-include 插件后，可以把这些通用的代码做成模板文件，在需要使用的页面中进行调用。遇到有修改时，只需要修改对应的模板文件即可更新所有页面。大大节省修改时间，也就提高了开发效率。

## 跑项目

下载代码后，进入项目目录，在 cmd 或终端中输入：npm install 并回车即可初始化项目环境，准备就绪后再输入：gulp 并回车即可生成 dist 目录。

## 目录说明

```
gulpfile.js /* gulp配置文件 */
package.json /* npm init命令创建的配置文件（由上面的命令自动生成） */
package-lock.json（由上面的命令自动生成）
assets /* 开发目录 */
index.html /* 首页 */
list.html /* 列表页 */
about.html /* 关于我们页面 */
js /* js文件目录 */
  xxx.js /* 若干js文件 */
css /* css样式表目录 */
  xxx.css /* 若干css样式表 */
images /* 图片目录 */
tem /* 模板目录 */
  head.tpl /* 页头模板（meta、css、js） */
  nav.tpl /* 导航模板 */
  footer.tpl /* 页尾模板 */
dist /* 打包后的目录（自动生成） */
```

## 演示图

![修改nav模板文件后所有页面都生效了.gif](https://img.alicdn.com/imgextra/i4/759415648/O1CN01YvbjFV1rapa8V0zPn_!!759415648.gif)

## 文章

详细说明见文章：[gulp3 实战技巧之利用 gulp-file-include 实现模板复用，大大提高开发效率！](http://www.yilingsj.com/xwzj/2020-05-19/gulp-file-include.html)
