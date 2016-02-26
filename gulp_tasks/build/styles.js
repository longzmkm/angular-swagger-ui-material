var gulp = require('gulp');

gulp.task('styles', function () {
    var csso = require('gulp-csso');
    var concat = require('gulp-concat');
    var rename = require('gulp-rename');

    return gulp.src('src/**/*.css')
        .pipe(concat('swagger-ui-material.css'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(csso())
        .pipe(rename('swagger-ui-material.min.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('styles:gfm', function () {
    var csso = require('gulp-csso');
    var rename = require('gulp-rename');

    return gulp.src('bower_components/github-markdown-css/github-markdown.css')
        .pipe(gulp.dest('dist/styles'))
        .pipe(csso())
        .pipe(rename('github-markdown.min.css'))
        .pipe(gulp.dest('dist/styles'));
});
