/////
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/////

import Vue from 'vue'
import Swiper from 'swiper'

import checkImgsLoad from '@/utils/checkImgsLoad'
import debounce from '@/utils/debounce'
import scrollCheck from '@/utils/scrollCheck'

import App from '@/components/pages/top/App'

const mySwiper = new Swiper('.swiper-container', {})

checkImgsLoad('.img', () => {
  console.log('img load complete!!!!!!!!!!!!')
})

checkImgsLoad({
  selector: '.img',
  callback: () => {
    console.log('callback')
  },
  callbackFinish: () => {
    console.log('callback Finish')
  }
})

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})

const d = debounce(() => {
  console.log('resize!')
})

window.addEventListener('resize', d)

const navChange = () => {
  const nav = document.querySelector('.p-boxNav')
  return elm => {
    const index = elm.dataset.id
    nav.innerHTML = index
  }
}

window.addEventListener('load', () => {
  const check = navChange()
  scrollCheck({
    targets: '.p-box',
    options: {},
    callback: (entry, observer) => {
      const {
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        isIntersecting,
        rootBounds,
        target,
        time
      } = entry
      if (entry.isIntersecting) {
        target.classList.add('is-show')
        check(entry.target)
        // observer.unobserve(entry.target)
        return
      }
      target.classList.remove('is-show')
    }
  })
})
