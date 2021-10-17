/**
 * テキストを指定のtagで囲う
 */

export class WrapTextInTag {
  static wrap(str: string, tag: string): string {
    if (!str) {
      return '';
    }
    const textArr = str
      .split(/\r?\n/)
      .map((v) => v.trim())
      .filter((v) => v);

    const result = textArr
      .map((t) => {
        const wrapText = t
          ?.split('')
          .map((c) => {
            if (/\s/.test(c)) {
              return `<${tag} class="child"></${tag}>`;
            }
            return `<${tag} class="child">${c}</${tag}>`;
          })
          .join('');
        return `<${tag} class="parent">${wrapText}</${tag}>`;
      })
      .join('');

    return result;
  }
  static wrapAll(target: string, tag: string): void {
    const elms: NodeListOf<HTMLElement> = document.querySelectorAll(target);
    elms.forEach((e: HTMLElement): void => {
      const wrapText = this.wrap(e.textContent ?? '', tag);
      e.innerHTML = wrapText ?? '';
    });
  }
}
