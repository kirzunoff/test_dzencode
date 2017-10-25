var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function(){
	return del.sync('dist')
});

gulp.task('build', function(){
	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
	var buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))
	var buildsFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
	var buildCss = gulp.src(['app/css/**/*.css',
							 '!app/css/libs.css'])
		.pipe(gulp.dest('dist/css'))
});

gulp.task('css',['sass'], function(){
	return gulp.src('app/css/libs.css')
			   .pipe(cssnano())
			   .pipe(rename({suffix : '.min'}))
			   .pipe(gulp.dest('app/css'))
});

gulp.task('js', function(){
	return gulp.src(['app/libs/owl-carousel/owl-carousel/owl.carousel.js',
					 'app/libs/magnific-popup/dist/jquery.magnific-popup.js'])
			   .pipe(concat('libs.min.js'))
			   .pipe(uglify())
			   .pipe(gulp.dest('app/js'))
});

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		    .pipe(sass({outputStyle: 'expanded'}))
			.pipe(autoprefixer({
				browsers: ['last 15 versions'],
				cascade: true
			}))
		    .pipe(gulp.dest('app/css'))
		    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
		notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass'])
	gulp.watch('app/js/**/*.js', browserSync.reload)
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);