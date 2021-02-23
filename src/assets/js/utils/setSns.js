/**
 * snsのリンクを設定
 * @param {Object} props
 * @param {String} props.url - シェアしたいurl
 * @param {String} props.tw - twitterシェアリンクを付加するセレクタ
 * @param {String} props.fb - facebookシェアリンクを付加するセレクタ
 * @param {String} props.line - lineシェアリンクを付加するセレクタ
 */

import qsa from './qsa';

const setSns = props => {
  const detail = encodeURIComponent(
    document.querySelector('meta[name="description"]').getAttribute('content')
  );
  let { tw, fb, line } = props;
  const url = encodeURIComponent(document.URL);
  tw = qsa(tw);
  fb = qsa(fb);
  line = qsa(line);

  tw.forEach(e => {
    e.setAttribute('href', 'https://twitter.com/share?url=' + url + '&text=' + detail);
  });

  fb.forEach(e => {
    e.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
  });

  line.forEach(e => {
    e.setAttribute('href', 'http://line.me/R/msg/text/?' + detail + '%20' + url);
  });
};

export default setSns;
