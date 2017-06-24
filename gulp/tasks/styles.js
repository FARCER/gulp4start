module.exports = function () {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'));
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
