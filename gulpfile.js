var gulp = require('gulp');
var changed = require('gulp-changed');
var jade = require('gulp-jade');
var minify = require('gulp-cssmin');
var coffee = require('gulp-coffee');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var JADE_SRC = './dev/*.jade';
var JADE_DIR = './deploy/';

var JADE_VIEW_SRC = './dev/views/*.jade';
var JADE_VIEW_DIR = './deploy/views/';

var JS_SRC = './dev/js/*.js'
var JS_DIR = './deploy/js'

var COFFEE_SRC = './dev/coffee/*.coffee';
var COFFEE_DIR = './deploy/js';

var SASS_SRC = './dev/sass/*.scss';
var SASS_DIR = './deploy/css';

var handleErr = function(err) {
  console.log("ERROR DETECTED:\n" + "Plugin: " + err.plugin + "\nFile: " + err.fileName + "\nLine: " + err.lineNumber + "\nMessage: " + err.message)
  this.emit('end');
};

gulp.task('jade', function() { // CONVERT JADE FILES TO HTML
  return  gulp.src(JADE_SRC)
    .pipe(jade({
      pretty: true // IF FALSE, OUTPUT WILL BE MINIFIED
    }))
    .on('error', handleErr)
    .pipe(gulp.dest(JADE_DIR))
    .pipe(connect.reload());
});

gulp.task('jade-views', function() { // CONVERT JADE FILES TO HTML
  return  gulp.src(JADE_VIEW_SRC)
    .pipe(jade({
      pretty: true // IF FALSE, OUTPUT WILL BE MINIFIED
    }))
    .on('error', handleErr)
    .pipe(gulp.dest(JADE_VIEW_DIR))
    .pipe(connect.reload());
});

gulp.task('coffee', function() { // CONVERT COFFEE FILES TO JS
	return gulp.src(COFFEE_SRC)
		.pipe(coffee({bare: true}))
		.on('error', handleErr)
		.pipe(rename(function(path) {
			path.extname = '.js'
		}))
		.pipe(gulp.dest(COFFEE_DIR))
		.pipe(connect.reload());
});

gulp.task('js', function() { // COPY JS FILES FROM DEV FOLDER TO DEPLOYMENT FOLDER (IF WORKING WITH VANILLA JS)
    gulp.src(JS_SRC)
    .pipe(gulp.dest(JS_DIR))
    .pipe(connect.reload());
});

gulp.task('sass', function() { // CONVERT SASS FILES TO CSS
	return gulp.src(SASS_SRC)
		.pipe(sass())
		.on('error', handleErr)
		.pipe(minify())
		.pipe(gulp.dest(SASS_DIR))
		.pipe(connect.reload());
});

gulp.task('connect', function() { // RUN LOCAL SERVER AND INIT LIVERELOAD
	connect.server({
		root: [JADE_DIR],
		port: process.env.PORT || 8000,
		livereload: true,
	});
});

gulp.task('watch', function() {
	gulp.watch([JADE_SRC], ['jade']);
	gulp.watch([JADE_VIEW_SRC], ['jade-views']);
	gulp.watch([COFFEE_SRC], ['coffee']);
	gulp.watch([JS_SRC], ['js']);
	gulp.watch([SASS_SRC], ['sass']);
});

gulp.task('default', ['connect', 'watch']);



