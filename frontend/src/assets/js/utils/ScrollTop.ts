/**
 * スクロールトップ
 */

import jump from 'jump.js';

export class ScrollTop {
  constructor() {
    this.setScroll();
  }
  setScroll(): void {
    const btn = document.querySelector('.js-scrollTop');
    btn?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      jump(document.body, {
        duration: 500,
        offset: 0,
        callback: undefined,
        a11y: false,
      });
    });
  }
}
