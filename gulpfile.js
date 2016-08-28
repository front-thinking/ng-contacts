var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('js', function() {
    return gulp.src('src/ng-contacts.js')
        .pipe(gulp.dest('dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});


gulp.task('watch', function(){
    gulp.watch('src/ng-contacts.js', ['js']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['js', 'html'])