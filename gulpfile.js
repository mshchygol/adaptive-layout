/**
 * Created by userPC on 13.06.2017.
 */
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function () {
  gulp.src('./src/templates/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/templates/**/*.pug', ['pug'])
});

gulp.task('default', ['pug', 'watch']);