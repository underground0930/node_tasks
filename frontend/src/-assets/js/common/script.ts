// libs
import { PageScroll } from '@/utils/PageScroll'

window.globalVars = {
  data: data,
}

export class Common {
  constructor() {
    this.#setScrollTop()
  }

  #setScrollTop() {
    const scrollTop = document.querySelectorAll<HTMLElement>('.js-scrollTop')
    if (scrollTop) {
      new PageScroll(scrollTop, 900)
    }
  }
}
