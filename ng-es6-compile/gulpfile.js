var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var babelOptions = {
  modules: 'system', //amd, commonjs
  moduleIds: true,
  stage: 2, // Draft, Candidate, Finished
  optional: [
    "es7.decorators"
  ]
};

var source = "src/**/*.js";
var html = "src/**/*.html";
var css = "src/**/*.css";
var resources = [html, css];
var destination = "app";

gulp.task('default', function () {
  gulp.src(source)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel(babelOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination));

  gulp.src(resources)
    .pipe(gulp.dest(destination));
    
});

gulp.task('watch', ['default'], function() {
  var watcher = gulp.watch([source, html, css], ['default']);
  watcher.on('change', function(event) {
    console.log('\nFile ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});