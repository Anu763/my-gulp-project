var gulp = require('gulp');
var sass = require('gulp-sass');// Requires the gulp-sass plugin


gulp.task('hello', function() {
    console.log('Hello World..!');
});


gulp.task('sass', function(){
    return gulp.src('app/scss/index.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['sass']);


gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
})
