/*
 * @Description: 
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-05-29 20:31:36
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-05-30 16:58:15
 */
/* @Description: gulp3的配置文件 */
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps'); /* 映射 */
var webserver = require('gulp-webserver'); /* 自动刷新浏览器 */
var stylus = require('gulp-stylus'); /* 处理.styl文件 */
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import'); /* 处理@import css */
var cssnano = require('cssnano'); /* 压缩css */
var base = './assets';
var dist = './dist';
var path = {
  assets: {
    css: base + '/css/*.css',
    styl: base + '/css/*.styl',
    js: base + '/js/*.js',
    html: base + '/*.html'
  },
  dist: {
    css: dist + '/css',
    js: dist + '/js'
  }
}
/* 自动刷新浏览器 */
gulp.task('webserver', function () {
  var options = {
    livereload: true, /*实现自动刷新，从此不再需要手动刷新页面了*/
    open: true /*服务器启动时自动打开网页*/
  };
  return gulp.src(dist).pipe(webserver(options))
});
/* 压缩css及解决@import */
var plugins = [
  postcssImport(), cssnano()
]
/* stylus任务 */
gulp.task('styl', function () {
  return gulp.src(path.assets.styl)
    // .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss(plugins))
    // .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.dist.css))
});
/* css任务 */
gulp.task('css', function () {
  return gulp.src(path.assets.css)
    // .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    // .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.dist.css))
});
/* js任务 */
gulp.task('js', function () {
  return gulp.src(path.assets.js).pipe(gulp.dest(path.dist.js))
});
/* html任务 */
gulp.task('html', function () {
  return gulp.src(path.assets.html).pipe(gulp.dest(dist))
});
/* 监听 */
gulp.task('watch', function () {
  gulp.watch(path.assets.styl, ['styl']); /* styl有修改时监听 */
  gulp.watch(path.assets.css, ['css']); /* css有修改时监听 */
  gulp.watch(path.assets.js, ['js']); /* js有修改时监听 */
  gulp.watch(path.assets.html, ['html']); /* html有修改时监听 */
});
/* 默认任务，启动后会执行一次 */
gulp.task('default', ['html', 'styl', 'css', 'js', 'webserver', 'watch']);