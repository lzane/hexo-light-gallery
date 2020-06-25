/**
 * Created by lzane on 8/20/17.
 */
var imgRgr = /<img [^>]+>(?!\s*<\/a>)/g;

function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

function addTag(data){
    var config = this.config.lightgallery;
    if(!config){
        return;
    }

    // add js
    data.content = '<div class="article-gallery">'+data.content+'</div>';
    data.content+='<script src="'+config.js+'"></script>';

    // add css
    var css = '<link rel="stylesheet" type="text/css" href="'+config.css+'" />';
    data.content = css + data.content;

    // add plugins
    var plugins = Object.keys(config.plugins);
    for (var plugin of plugins){
        var jsTag = '<script src="'+config.plugins[plugin]+'"></script>';
        data.content += jsTag;
    }
}

function addRunnableTag(data){
    data.content+='<script>'+
        `if (typeof lightGallery !== 'undefined') {
        var options = {
            selector: '.gallery-item'
        };
        lightGallery(document.getElementsByClassName('article-gallery')[0], options);
        }`
        +'</script>';
}

function wrapImage(data){
    data.content = data.content.replace(imgRgr, function replace(match){
        var isSrcMatched = false;
        var res = '<a ';
        var hrefResult = /src\s*=\s*"([^"]+?)"(?!.+?nolink)/g.exec(match);
        if (hrefResult){
            var href = hrefResult[1];
            res+='href="'+href+'" ';
            isSrcMatched = true;
        }
        var titleResult = /alt\s*=\s*"(.+?)"/g.exec(match);
        if (titleResult){
            var title = titleResult[1];
            res+='title="'+title+'" ';
        }
        res+='class="gallery-item">'+match+'</a>';
        if (isSrcMatched) {
            return res;
        }
        return match;
    });
}

function render(data){
    if (ignore(data)){
        return;
    }
    wrapImage.call(this,data);
    addTag.call(this,data);
    addRunnableTag.call(this,data);
};

exports.render = render;
