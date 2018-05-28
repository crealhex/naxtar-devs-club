const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
    gulp.src('./alpha/tests/scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            versions: 'last 2 versions'
        }))
        .pipe(gulp.dest('./alpha/tests/css'))
);

gulp.task('default', ()=> {
    gulp.watch('./**/**.scss', ['sass'])
});