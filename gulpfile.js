const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const paths = {
    styles: {
      src: ['./src/css/**/*.css'],
      dest: './dist/css/',
    },
    scripts: {
      src: ['./src/js/**/*.js'],
      dest: './dist/js/',
    },
};

function compileStyles() {
    return src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(paths.styles.dest));
}

function minifyScripts() {
    return src(paths.scripts.src)
      .pipe(sourcemaps.init())
      .pipe(terser().on('error', (error) => console.log(error)))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(paths.scripts.dest));
}

exports.compileStyles = compileStyles;
exports.minifyScripts = minifyScripts;

exports.default = series(parallel(compileStyles, minifyScripts));