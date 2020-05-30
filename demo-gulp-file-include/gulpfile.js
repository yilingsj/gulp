/*
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-05-19 21:29:54
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-05-19 21:34:00
 */
var gulp = require('gulp');
var gulpFileInclude = require('gulp-file-include'); /* 实现模板复用 */
var base = './assets';
var dist = './dist';
var path = {
  assets: {
    css: base + '/css/*.css',
    js: base + '/js/*.js',
    html: base + '/*.html',
    tem: base + '/tem/**'
  },
  dist: {
    css: dist + '/css',
    js: dist + '/js'
  }
};
/* css任务 */
gulp.task('css', function () {
  return gulp.src(path.assets.css)
    .pipe(gulp.dest(path.dist.css));
});
/* js任务 */
gulp.task('js', function () {
  return gulp.src(path.assets.js)
    .pipe(gulp.dest(path.dist.js));
});
/* html任务 */
gulp.task('html', function () {
  var options = {
    basepath: base + '/tem/' /* 模板路径 */
  };
  return gulp.src(path.assets.html)
    .pipe(gulpFileInclude(options)).pipe(gulp.dest(dist));
});
/* 监听 */
gulp.task('watch', function () {
  gulp.watch(path.assets.css, ['css']); /* css有修改时监听 */
  gulp.watch(path.assets.js, ['js']); /* js有修改时监听 */
  gulp.watch([path.assets.html, path.assets.tem], ['html']); /* html有修改时监听 */
});
/* 默认任务，启动后会执行一次 */
gulp.task('default', ['html', 'css', 'js', 'watch']);