/**
 * Created by lzane on 8/27/17.
 */
const renderer = require('./src/renderer');

function addCssTag() {
  if (!Object.prototype.hasOwnProperty.call(hexo.config, 'lightgallery')) {
    return '';
  }
  const configCss = hexo.config.lightgallery.css;
  hexo.log.debug(`lightgallery addCssTag: ${configCss}`);
  return `<link rel="stylesheet" type="text/css" href="${configCss}" />`;
}

function addJsTag() {
  if (!Object.prototype.hasOwnProperty.call(hexo.config, 'lightgallery')) {
    return '';
  }
  const config = hexo.config.lightgallery;
  const plugins = Object.keys(config.plugins);
  hexo.log.debug(`lightgallery addJsTag: ${config.js}`);
  let jsTag = `<script src="${config.js}"></script>\n`;
  for (const plugin of plugins) {
    jsTag += `<script src="${config.plugins[plugin]}"></script>\n`;
    hexo.log.debug(`lightgallery addJsTag: ${config.plugins[plugin]}`);
  }

  return `${jsTag}
    <script>if (typeof lightGallery !== 'undefined') {
      const gallery = document.getElementsByClassName('${config.className}');
      for (const album of gallery) {
        lightGallery(album, { selector: '.gallery-item' });
      }
    }</script>`;
}

hexo.config.lightgallery = Object.assign({
  js: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.2.0/dist/js/lightgallery.min.js',
  css: 'https://cdn.jsdelivr.net/npm/lightgallery.js@1.2.0/dist/css/lightgallery.min.css',
  className: 'article-gallery',
  plugins: {},
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);
hexo.extend.injector.register('head_end', addCssTag, 'default');
hexo.extend.injector.register('body_end', addJsTag, 'default');
