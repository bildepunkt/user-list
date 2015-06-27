/**
 * http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
 */

var browserify = require('browserify');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
 
gulp.task('js', function() {
    var bundler = browserify({
        entries: ['js/app/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {},
        packageCache: {},
        fullPaths: true // Requirement of watchify
    });
    var watcher = watchify(bundler);

    return watcher.on('update', function() { // When any files update
        var updateStart = Date.now();

        console.log('Updating js...');
        
        watcher.bundle() // Create new bundle that uses the cache for high performance
            .pipe(source('main.js'))
            // minify
            .pipe(gulp.dest('build/'));

        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('build/'));
});

// I added this so that you see how to run two watch tasks
gulp.task('sass', function () {

    gulp.watch('scss/*.scss', function () {
        console.log('Updating styles...', 'Updated!');

        return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/'));
    });
});

gulp.task('default', ['js', 'sass']);