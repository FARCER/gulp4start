module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build'
        });
        // $.browserSync.watch('./build', $.browserSync.reload);
    });
};