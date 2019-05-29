import autoprefixer from 'autoprefixer';
import reporter from 'postcss-reporter';
import assets from 'postcss-assets';
import immutableCss from 'immutable-css';
import messages from 'postcss-browser-reporter';
import fontpath from 'postcss-fontpath';

const PLUGINS = [
  assets({
    basePath: 'src/',
    loadPaths: ['images/', 'fonts/**/'],
    relative: true
  }),
  fontpath({
    checkFiles: true,
    ie8Fix: true
  }),
  immutableCss,
  autoprefixer({
    browsers: ["last 50 versions", "ie >= 9"],
    cascade: false
  }),
  reporter({
    clearMessages: true,
    throwError: false
  }),
  messages({
    selector: 'body::before'
  })
]

export default PLUGINS;
