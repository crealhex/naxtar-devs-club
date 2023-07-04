const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
    gulp.src('./src/scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            versions: 'last 2 versions'
        }))
        .pipe(gulp.dest('./public/css'))
);

gulp.task('default', ()=> {
    gulp.watch('./**/**.scss', ['sass'])
});