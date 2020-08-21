/**
 * Created by lzane on 8/20/17.
 */
const imgRgr = /<img [^>]+>(?!\s*<\/a>)/g;

function ignore(data) {
  const source = data.source;
  const ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

function wrapImage(data) {
  data.content = `<div class="article-gallery">${data.content}</div>`;
  data.content = data.content.replace(imgRgr, function replace(match) {
    let isSrcMatched = false;
    let res = '<a ';
    const hrefResult = /src\s*=\s*"([^"]+?)"(?!.+?nolink)/g.exec(match);
    if (Array.isArray(hrefResult)) {
      res += `href="${hrefResult[1]}" `;
      isSrcMatched = true;
    }
    const titleResult = /alt\s*=\s*"(.+?)"/g.exec(match);
    if (Array.isArray(titleResult)) {
      res += `title="${titleResult[1]}" `;
    }
    res += `class="gallery-item">${match}</a>`;
    if (isSrcMatched) {
      return res;
    }
    return match;
  });
}

function render(data) {
  if (ignore(data)) {
    return;
  }
  wrapImage.call(this,data);
};

exports.render = render;
