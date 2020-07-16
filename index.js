/**
 * Created by lzane on 8/27/17.
 */
const renderer = require('./src/renderer');

function addCssTag() {
  const config = this.config?.lightgallery;
  if (!config) {
    return '';
  }
  return `<link rel="stylesheet" type="text/css" href="${config.css}" />`;
}

function addJsTag() {
  const config = this.config?.lightgallery;
  if (!config) {
    return '';
  }
  const plugins = Object.keys(config.plugins);
  let jsTag = `<script src="${config.js}"></script>`;
  for (const plugin of plugins) {
    jsTag += `<script src="${config.plugins[plugin]}"></script>`;
  }
  return `${jsTag}
    <script>if (typeof lightGallery !== 'undefined') {
      const options = { selector: '.gallery-item' };
      const gallery = Array.from(document.getElementsByClassName('article-gallery'));
      for (const target of gallery) {
        lightGallery(target, options);
      }
    }</script>`;
}

hexo.config.lightgallery = Object.assign({
  js: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/js/lightgallery.min.js',
  css: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/css/lightgallery.min.css',
  plugins: {},
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);
hexo.extend.injector.register('head_end', addCssTag, 'default');
hexo.extend.injector.register('body_end', addJsTag, 'default');
