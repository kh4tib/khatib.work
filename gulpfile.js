var gulp = require('gulp');

// // SASS Tasks
var sass = require('gulp-sass')(require('sass')); 
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require("gulp-rename");

// JS Tasks
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

// Handlebars Tasks
var handlebars = require('gulp-compile-handlebars');

// Build SASS
gulp.task('build-sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(rename({
      basename: "style",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest('dist/css'));
});



// Build JS
gulp.task('build-js', function (cb) {
  pump([
        gulp.src('app/js/**/*.js')
        .pipe(babel({
          presets: ['@babel/env']
        })),
        concat('all.js'),
        uglify(),
        rename({
          basename: "main",
          suffix: ".min",
          extname: ".js"
        }),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Build Handlebars
gulp.task('build-handlebars', done => {
  var templateData = {
	},
	options = {
    templates: 'app/templates',
    partials : 'app/partials',
  };
	gulp.src(['app/templates/*.hbs'])
  .pipe(handlebars(templateData,options))
  .pipe(rename({extname: ".html"}))
  .pipe(gulp.dest('.'));

   gulp.src(['app/templates/humanly/*.hbs'])
  .pipe(handlebars(templateData,options))
  .pipe(rename({extname: ".html"}))
  .pipe(gulp.dest('humanly'))

  done();
});

// Watchers
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['build-sass']);
  gulp.watch('app/js/**/*.js', ['build-js']);
});

// Build All
gulp.task('build', gulp.series('build-sass','build-js','build-handlebars'));

