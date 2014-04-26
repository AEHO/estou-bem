var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    path = require('path'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat-sourcemap'),
    browserify = require('gulp-browserify'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject');

var css_stream = gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));

var js_stream = gulp.src('js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(jshint())
    .pipe(gulp.dest('dist/js'));

gulp.task('sass', function(){
  return css_stream;
});

gulp.task('javascript', function(){
  return js_stream;
});


gulp.task('default', ['sass', 'javascript']);
