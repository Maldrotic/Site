var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpImageMin = require('gulp-imagemin');
var gulpMocha = require('gulp-mocha');
var del = require('del');

var paths = {
  src: {
    views: 'public/views/**.ejs',
    scss: 'public/scss/**.scss',
    js: 'public/js/**.js',
    images: 'public/images/*'
  },
  dist: {
    views: 'dist/views',
    css: 'dist/css',
    js: 'dist/js',
    images: 'dist/images'
  },
  distFolder: 'dist/',
  test: {
    src: 'tests/*.js'
  }
};

gulp.task('clean', function() {
  del([paths.distFolder]);
});

gulp.task('images', function() {
  gulp.src(paths.src.images)
    .pipe(gulpImageMin())
    .pipe(gulp.dest(paths.dist.images));
});

gulp.task('js', function() {
  gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.dist.js));
});

gulp.task('styles', function() {
  gulp.src(paths.src.scss)
    .pipe(gulpSass())
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('test', function() {
  gulp.src(paths.test.src, {read: false})
    .pipe(gulpMocha())
    .once('error', function() {
      process.exit(1);
    }).once('end', function() {
      process.exit();
    });
});

gulp.task('views', function() {
  gulp.src(paths.src.views)
    .pipe(gulp.dest(paths.dist.views));
});

gulp.task('watch', function() {
  gulp.watch(paths.src.views, ['views']);
  gulp.watch(paths.src.scss, ['styles']);
  gulp.watch(paths.src.js, ['js']);
});

gulp.task('build', ['images', 'js', 'styles', 'views',]);
gulp.task('default', ['build']);