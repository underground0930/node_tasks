/////
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/////

import Vue from 'vue'
import Swiper from 'swiper'

import checkImgsLoad from '@/utils/checkImgsLoad'
import debounce from '@/utils/debounce'
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
