'use strict';
import gulp            from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import syntax          from 'postcss-scss';
import del             from 'del';
import runSequence     from 'run-sequence';
import browserify      from "browserify";
import source          from "vinyl-source-stream";
import buffer          from "vinyl-buffer";
import gutil           from 'gulp-util';

import PLUGINS         from './config/postcss.config';
import COPY_FILES      from './config/copy-files.config';
import DIST_FILES_JS   from './config/copy-files-js.config';
import DIST_FILES_CSS  from './config/copy-files-css.config';

const $        = gulpLoadPlugins();
const debug    = require('postcss-debug').createDebugger();

require('gulp-stats')(gulp);

gulp.task('clean', () => {
  del(['dist'], {dot: true, force: true});
});

gulp.task('styles', () => {
  return gulp.src([
    'src/scss/style.scss'
  ])
  .pipe($.newer('dist/'))
  .pipe($.sourcemaps.init())
  .pipe($.plumber())
  .pipe($.plumberNotifier())
  .pipe(
    $.sass.sync(
      {
        outputStyle: 'expanded'
      }
    )
  )
  .pipe($.postcss(debug(PLUGINS), {parser: syntax}))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('dist/'))
  .pipe($.size({title: 'styles'}))
});

gulp.task('scripts', () => {
  browserify(
    {
      entries: 'js/index.js', 
      debug: !0,
      fullPaths : !0,
      paths: ['js'],
      basedir: 'src',
      // insertGlobals: !0,
      // bundleExternal: false
    }
  )
  .transform("babelify", { presets: ["es2015"]})
  .bundle()
  .on('error',(err)=>{
    gutil.log('error', gutil.colors.red(err.message));
  })
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe($.sourcemaps.init({loadMaps: true}))
  // .pipe($.uglify())
  .pipe($.sourcemaps.write('/'))
  .pipe(gulp.dest('dist/js'))
  .pipe($.size({title: 'scripts'}))
  .pipe($.livereload());
});

gulp.task('copy', () => {
  return gulp.src(
    COPY_FILES,
    {
      base: 'src'
    }
  )
  .pipe(gulp.dest('dist'))
  .pipe($.size({title: 'copy'}))
});

gulp.task('copy_css', () => {
  return gulp.src(
    ['dist/*.css', 'dist/*.css.map'],
  )
  .pipe(gulp.dest(DIST_FILES_CSS))
  .pipe($.size({title: 'copy_css'}))
});

gulp.task('copy_js', () => {
  return gulp.src(
    ['dist/js/*.js','dist/js/*.js.map'],
  )
  .pipe(gulp.dest(DIST_FILES_JS))
  .pipe($.size({title: 'copy_js'}))
});

gulp.task('default', cb => {
  runSequence(
    'styles',
    'scripts',
    "copy",
    "copy_css",
    "copy_js",
    cb
  )

  gulp.watch(['src/scss/**'], ['styles', 'copy_css'])
  gulp.watch(['src/js/**'], ['scripts', 'copy_js'])
  gulp.watch(['src/*.html'], ['copy'])
});
