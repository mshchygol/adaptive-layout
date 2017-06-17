var gulp = require('gulp');
var pug = require('gulp-pug');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

var vendors = ['jquery', 'masonry-layout'];

gulp.task('pug', function () {
  return gulp.src('./src/templates/*.pug')
    .pipe(pug({
      pretty: true
    }).on('error', errorLog))
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass({
      style: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('image', function () {
  return gulp.src('./src/assets/img/*')
    .pipe(imagemin()
      .on('error', errorLog))
    .pipe(gulp.dest('./dist/img'))
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
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('default', ['pug', 'sass', 'build:app', 'build:vendor', 'watch']);