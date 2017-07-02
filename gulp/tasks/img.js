module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest('./build/static/img/'));
    });
};
