var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('css', function() {
  gulp.src('css/**/*.css')
  .pipe(concat('application.css'))
  .pipe(gulp.dest('dist'));
});

gulp.task('css-min', function() {
  gulp.src('css/**/*.css')
  .pipe(concat('application.min.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('dist'));
});