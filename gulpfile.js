var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var through = require('through2');

var CONF = {
    src: 'src',
    build: 'assets'
};

gulp.task('default', ['build']);

gulp.task('build', ['style']);

gulp.task('style', function () {
    return gulp.src([
        CONF.src + '/style/style.less'
    ])
        .pipe(less())
        .pipe(minifycss())
        .pipe(through.obj(function (file, enc, cb) {
            file.contents = new Buffer('---\n---\n' + file.contents.toString());
            this.push(file);
            return cb();
        }))
        .pipe(gulp.dest(CONF.build + '/css/'));
});