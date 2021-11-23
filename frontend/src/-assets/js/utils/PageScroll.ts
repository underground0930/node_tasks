/**
 * スクロールトップ
 */

import jump from 'jump.js';

export class PageScroll {
  breakpoint: number;
  links: NodeListOf<HTMLElement>;

  constructor(links: NodeListOf<HTMLElement>, breakpoint: number) {
    this.breakpoint = breakpoint;
    this.links = links;
    this.clickHandler = this.clickHandler.bind(this);
    this.init();
  }

  setDuration({ duration }: DOMStringMap): number {
    return duration !== undefined ? Number(duration) : 700;
  }

  setOffset({ offsetpc, offsetsp }: DOMStringMap): number {
    const offsetpcVal = offsetpc !== undefined ? Number(offsetpc) : 0;
    const offsetspVal = offsetsp !== undefined ? Number(offsetsp) : 0;
    return this.breakpoint >= window.innerWidth ? offsetpcVal : offsetspVal;
  }

  setTarget({ target }: DOMStringMap): HTMLElement {
    if (target) {
      const t = document.querySelector<HTMLElement>(target);
      if (t) {
        return t;
      }
    }
    return document.body;
  }

  clickHandler(e: Event): void {
    e.preventDefault();
    const elm = e.currentTarget as HTMLElement;
    const target = this.setTarget(elm?.dataset);
    const duration = this.setDuration(elm?.dataset);
    const offset = this.setOffset(elm?.dataset);
    jump(target, {
      duration,
      offset,
      callback: undefined,
      a11y: false,
    });
  }

  init(): void {
    if (this.links) {
      this.links.forEach((link: HTMLElement) => link.addEventListener('click', this.clickHandler));
    }
  }

  destroy(): void {
    if (this.links) {
      this.links.forEach((link: HTMLElement) =>
        link.removeEventListener('click', this.clickHandler)
      );
    }
  }
}
