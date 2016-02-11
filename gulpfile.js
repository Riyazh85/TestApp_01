console.log("gulp running");
var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
var uglify = require('gulp-uglify');
 
gulp.task('build', function() {
  return gulp.src('./build/js/*.js')
    .pipe(uglify())
     .pipe(gulp.dest('./build/js'))
});
gulp.task('scripts', function() {
  // Single entry point to browserify 
  gulp.src('src/js/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./build/js'))
});
gulp.task('default',['scripts'],function(){
  console.log("default task");

})