'use strict';
var gulp = require('gulp'),
    karma = require('gulp-karma');

//Note that ordering of the file matters.
var testFiles = [
  
  'www/lib/angular/angular.js',
  'www/lib/angular-sanitize/angular-sanitize.js',
  'www/lib/ionic/js/ionic.bundle.js',
  //'www/lib/ionic/js/ionic-angular.js',
  //'www/lib/ionic/js/ionic.js',
  'www/lib/angular-mocks/angular-mocks.js',
  'test/unit/**/*.js',
  'www/js/**/*.js'  
];

gulp.task('unit-test', function () {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'watch'
    }))
    .on('error', function (err) {
      throw err;
    });
});

