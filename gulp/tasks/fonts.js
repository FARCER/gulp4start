module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./dev/static/fonts/**/*.*')
            .pipe($.gulp.dest('./build/static/fonts/'));
    });
};
