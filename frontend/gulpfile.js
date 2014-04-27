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


gulp.task('sass', function(){
  gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('../assets/'))
    .pipe(livereload());
});

gulp.task('javascript', function(){
  gulp.src('js/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production,
      transform : ['browserify-hogan']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('../assets/'))
    .pipe(livereload());
});


gulp.task('default', ['sass', 'javascript'], function(){
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**', ['javascript']);
});

