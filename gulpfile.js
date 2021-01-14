var gulp = require('gulp');
var runSequence = require('run-sequence');

// Project plugins
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

// Configuration
var config = require('./gulp.json');
var themePath = './wp-content/themes/' + config.theme;
var distPath = themePath + '/dist';
var assetPath = themePath + '/assets';

gulp.task('default', function() {
		gulp.watch(assetPath + '/scss/**/*.scss', gulp.series(['compile-styles']));
		gulp.watch(assetPath + '/js/**/*.js', gulp.series(['compile-scripts']));
		gulp.watch(assetPath + '/fonts/**/*', gulp.series(['compile-fonts']));
		gulp.watch(assetPath + '/images/**/*', gulp.series(['compile-images']));
		gulp.watch(assetPath + '/templates/**/*', gulp.series(['compile-templates']));
	}
);

gulp.task('deploy-assets', function(callback) {
	runSequence(
		'clean',
		['compile-styles','compile-scripts','compile-images','compile-fonts','compile-templates'],
		['optimize-styles','optimize-scripts','optimize-images'],
		callback
	);
});

gulp.task('clean', function() {
	return gulp.src([
		distPath,
		themePath + '/*.php'
	], { read: false })
		.pipe(clean({ force: true }));
});

// Styles

gulp.task('compile-styles', function() {
	return gulp.src(assetPath + '/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(gulp.dest(themePath));
});

gulp.task('optimize-styles', function() {
	return gulp.src(distPath + '/css/style.css')
		.pipe(minifyCss())
		.pipe(gulp.dest(themePath));
});

// Scripts

gulp.task('compile-scripts', function() {
	return (
		gulp.src([
			assetPath + '/js/script.js'
		])
		.pipe(concat('script.js'))
		.pipe(gulp.dest(distPath + '/js'))
	);
});

gulp.task('optimize-scripts', function() {
	return gulp.src(distPath + '/js/script.js')
		.pipe(uglify())
		.pipe(gulp.dest(distPath + '/js/'));
});

// Images

gulp.task('compile-images', function() {
	return gulp.src(assetPath + '/images/**/*')
		.pipe(gulp.dest(distPath + '/images'));
});

gulp.task('optimize-images', function() {
	return gulp.src(distPath + '/images/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(distPath + '/images'));
});

// Fonts

gulp.task('compile-fonts', function() {
	return gulp.src(assetPath + '/fonts/**/*')
		.pipe(gulp.dest(distPath + '/fonts'));
});

// Templates

gulp.task('compile-templates', function() {
	return gulp.src(assetPath + '/templates/**/*')
		.pipe(gulp.dest(distPath + '/templates'));
});


