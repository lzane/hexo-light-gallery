/**
 * Created by lzane on 8/27/17.
 */
var renderer = require('./src/renderer');

hexo.config.lightgallery = Object.assign({
    js: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/js/lightgallery.min.js',
    css: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/css/lightgallery.min.css',
    plugins: {},
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);
