var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect'),
  less = require('gulp-less');

  gulp.task('default', ['less','watch','connecter','jScript']);

  gulp.task('connecter', function(){
    connect.server({
      root: '',
      livereload: true
    });
  });

  gulp.task('html', function () {
    gulp.src('index.html')
      .pipe(connect.reload());
  });

  gulp.task('jScript', function () {
    gulp.src('js/*.js')
      .pipe(connect.reload());
  });

  gulp.task('less', function () {
      return gulp.src('less/*.less')
          .pipe(less())
          .pipe(gulp.dest('css/'))
          .pipe(connect.reload());
  });

  gulp.task('watch', function(){
    gulp.watch('less/*.less', ['less']);
    gulp.watch('index.html', ['html']);
    gulp.watch('js/*.js', ['jScript']);
  })
