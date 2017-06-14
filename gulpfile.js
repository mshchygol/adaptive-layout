var gulp = require('gulp');
var pug = require('gulp-pug');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var sourcemaps = require('gulp-sourcemaps');

var vendors = ['jquery'];

gulp.task('pug', function () {
  return gulp.src('./src/templates/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('build:vendor', function () {
  var b = browserify({
    debug: true
  });

  // require all libs specified in vendors array
  vendors.forEach(function (lib) {
    b.require(lib);
  });

  b.bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(streamify(uglify()))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('build:app', function () {
  return browserify({
      entries:'./src/js/main.js',
      debug: true
    })
    .external(vendors)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(streamify(uglify()))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/templates/**/*.pug', ['pug']);
  gulp.watch('./src/js/**/*.js', ['build:app']);
});

gulp.task('default', ['pug', 'build:app', 'build:vendor', 'watch']);