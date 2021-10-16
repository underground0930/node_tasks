/**
 * スクロールトップ
 */

import jump from 'jump.js';

type Props = {
  target: string;
  duration?: number;
};

export const setScrollTop = ({ target, duration = 500 }: Props): void => {
  const btn = document.querySelector(target);
  btn?.addEventListener('click', (e: Event) => {
    e.preventDefault();
    jump(document.body, {
      duration,
      offset: 0,
      callback: undefined,
      a11y: false,
    });
  });
};
