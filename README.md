# Hexo-light-gallery

[![npm:](https://img.shields.io/npm/v/hexo-light-gallery.svg)](https://www.npmjs.com/packages/hexo-light-gallery) [![npm](https://img.shields.io/npm/l/hexo-light-gallery.svg)]() 

> Generate gallery for Hexo

 ![](http://i.imgur.com/RSJxBIa.jpg)

## Install

```
npm install --save hexo-light-gallery
```

## Usage

This plugin is based on [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js). Once you installed, all posts will add lightgallery feature automatically.

## Config

In your site's `_config.yml`:

```
lightgallery:
    # if you don't specify the css or js source, the default cdn will be used.
    # css: # css source url
    # js: #js source url
    # sorry that I can not find any cdn hosting following plugins,
    # please self-host the plugin js and add url here
    # plugins:
        # lg-thumbnail:
        # lg-zoom:
        # lg-autoplay:
        # lg-fullscreen:
        # lg-pager:
  
```

Your config will be merged into default config:

```json
{
    js: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/js/lightgallery.min.js',
    css: 'https://cdn.jsdelivr.net/lightgallery.js/1.0.1/css/lightgallery.min.css',
    plugins: {},
}
```

## Lightgallery.js Plugins
Download the plugin from following source and add url to the `_config.yml` file will automatically enable the plugin.

- lg-thumbnail: https://github.com/sachinchoolur/lg-thumbnail.js
- lg-fullscreen: https://github.com/sachinchoolur/lg-fullscreen.js
- lg-zoom: https://github.com/sachinchoolur/lg-zoom.js
- lg-autoplay: https://github.com/sachinchoolur/lg-autoplay.js
- lg-vedio: https://github.com/sachinchoolur/lg-video.js
- lg-hash: https://github.com/sachinchoolur/lg-hash.js
- lg-paper: https://github.com/sachinchoolur/lg-pager.js

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/lzane/hexo-light-gallery/issues/new).

