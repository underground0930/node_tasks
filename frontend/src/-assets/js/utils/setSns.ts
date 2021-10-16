/**
 * snsのリンクを設定
 * @param {Object} props
 * @param {String} props.url - シェアしたいurl
 * @param {String} props.tw - twitterシェアリンクを付加するセレクタ
 * @param {String} props.fb - facebookシェアリンクを付加するセレクタ
 * @param {String} props.line - lineシェアリンクを付加するセレクタ
 */

export const setSns = (props: { tw: string; fb: string; line: string }): void => {
  const { tw, fb, line } = props;
  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute('descrition');
  if (!description) return;
  const detail = encodeURIComponent(description);

  const url = encodeURIComponent(document.URL);
  const twElms = document.querySelectorAll<HTMLLinkElement>(tw);
  const fbElms = document.querySelectorAll<HTMLLinkElement>(fb);
  const lineElms = document.querySelectorAll<HTMLLinkElement>(line);

  twElms.forEach((e: HTMLLinkElement) => {
    e.setAttribute('href', 'https://twitter.com/share?url=' + url + '&text=' + detail);
  });

  fbElms.forEach((e: HTMLLinkElement) => {
    e.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
  });

  lineElms.forEach((e: HTMLLinkElement) => {
    e.setAttribute('href', 'http://line.me/R/msg/text/?' + detail + '%20' + url);
  });
};
