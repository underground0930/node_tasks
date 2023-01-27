// libs
import { PageScroll } from '@/utils/PageScroll'

window.globalVars = {
  data: data,
}

const init = () => {
  const scrollTop = document.querySelectorAll<HTMLElement>('.js-scrollTop')
  if (scrollTop) {
    new PageScroll(scrollTop, 900)
  }
}

init()
