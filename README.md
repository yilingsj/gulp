# gulp 版本：@3.9.1

## 标题: gulp 项目中提高开发效率之神器 gulp-sourcemaps

分支： dev-gulp-sourcemaps-20200530

## 简介

为了提高开发效率，我们的项目中可能会使用@import 文件引入、stylus、sass、less 之类的 css 预处理器。为了优化代码，可能还会压缩 css。这一系列操作就导致了在开发过程中定位问题比较困难的现象。所以，我们需要一款神器来精准定位问题。而 gulp-sourcemaps 就可以帮助我们解决 css、js 定位的难题

## 项目初始化

拉完分支后，用 cmd 或终端进入项目目录，然后粘贴下方代码并回车即可。

```
npm install gulp@3.9.1 gulp-sourcemaps gulp-webserver gulp-stylus gulp-postcss postcss-import cssnano --save-dev
```

## 目录说明

```
demo-gulp-sourcemaps /* 目录 */
  node_modules /* 项目中的node包（由上面的命令自动生成） */
  gulpfile.js /* gulp配置文件 */
  package.json /* npm init命令创建的配置文件（由上面的命令自动生成） */
  package-lock.json（由上面的命令自动生成）
  assets /* 开发目录 */
    index.html /* 首页 */
    js /* js文件目录 */
      xxx.js /* 若干js文件 */
    css /* css样式表目录 */
      common.css /* 若干css样式表 */
      index.css /* 若干css样式表 */
      header.styl /* 页头样式 */
      theme.styl /* 皮肤文件 */
  dist /* 打包后的目录（自动生成） */
```

## 演示图

使用 sourcemaps 之前
![未使用sourcemaps前无法精准定位css样式在代码中的具体位置](https://img.alicdn.com/imgextra/i1/759415648/O1CN01naGo491rapaBrRii1_!!759415648.png)

使用 sourcemaps 之后
![安装了sourcemaps后可直观看到代码对应的真实文件及具体位置](https://img.alicdn.com/imgextra/i1/759415648/O1CN01FTx92N1rapa3FalUs_!!759415648.png)

## 文章

详细说明见文章：[gulp 实战技巧之日常开发定位样式难？不如试试神器 gulp-sourcemaps 吧！](http://www.yilingsj.com/xwzj/2020-05-30/gulp-sourcemaps.html)
