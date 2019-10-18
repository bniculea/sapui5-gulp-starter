var gulp = require('gulp'),
    del = require('del'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

var DEV_SRC = './src',
    DIST = './dist';

gulp.task('local-server-dev', () => {
    connect.server({
        root: DEV_SRC,
        port: 9000,
        livereload: true
    });
});

gulp.task('watch', () => {
    return watch([DEV_SRC + '/**/*.*', '!' + DEV_SRC + '/resources/**/*.*',], { ignoreInitial: false })
        .pipe(connect.reload());
});

// "PUBLIC" TASKS
gulp.task('default',gulp.series(gulp.parallel('local-server-dev','watch')));

gulp.task('clean', function(callback){
    return del([DIST + '/**'], callback);
});





