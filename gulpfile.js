var gulp = require('gulp');
var webpack = require('gulp-webpack')
var babel = require('babel-core/register')
var webpackConfig = require('./webpack.config')

gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./public/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(webpackConfig.output.path));
});
