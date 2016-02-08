var gulp = require('gulp'),
	  jshint = require('gulp-jshint'),
	  jshintReporter = require('jshint-stylish'),
	  watch = require('gulp-watch'),
	  concat = require('gulp-concat'),
    scp = require('gulp-scp2'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass')
;



/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
  'js': ['./public/js/src/lib/**/*.js', './public/js/src/components/*.js', './public/js/src/master.js'],
  'sass': ['./public/css/src/styles.scss', './public/css/src/components/*.scss']
};





// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));

});





gulp.task('js', function() {
  gulp.src(paths.js)
    .pipe(plumber())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});




gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'));
});





gulp.task('default', function () {
  // watch for JS changes
  gulp.watch(paths.js, function() {
    gulp.run('js');
  });

  // watch for sass changes
  gulp.watch(paths.sass, function() {
    gulp.run('sass');
  });
});