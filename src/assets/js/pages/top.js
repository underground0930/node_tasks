/////
import 'core-js/stable'
import 'regenerator-runtime/runtime'
/////
import global from '@/utils/global'
import Vue from 'vue'
import Swiper from 'swiper'

import checkImgsLoad from '@/utils/checkImgsLoad'
import App from '@/components/pages/top/App'

const mySwiper = new Swiper('.swiper-container', {})

checkImgsLoad('.img', () => {
  console.log('img load complete!!!!!!!!!!!!')
})

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})

console.log(global)
