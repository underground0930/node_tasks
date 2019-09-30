/////
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/////

import setSns from '../modules/setSns'
import checkImgsLoad from '../modules/checkImgsLoad'
import Vue from 'vue'
import App from '../components/pages/top/App'
import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {})

checkImgsLoad('.img', () => {
  console.log('img load complete!!!!!!!!!!!!')
})

setSns({
  url: 'https://www.yahoo.co.jp/',
  tw: '.tw',
  fb: '.fb',
  line: '.line'
})

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})
