import ReactDOM from 'react-dom/client'
import SwiperCore, { Pagination, Navigation, Swiper } from 'swiper'
SwiperCore.use([Pagination, Navigation])

// React components
import App from '@/components/pages/App'

// modules
import { fetchApi } from '@/utils/fetchApi'
import { checkImgsLoad } from '@/utils/checkImgsLoad'
import { debounceEvent } from '@/utils/debounceEvent'

export class Top {
  swiper: any
  constructor() {
    this.#imageLoader()
    this.#setReact()
    this.#setSlider()
    this.#fetchJsonplaceholder()
    this.#listener()
  }
  #imageLoader() {
    checkImgsLoad({
      imgArray: [],
      callbackFinish() {
        console.log('callback Finish')
      },
    })
  }
  #setReact() {
    const app = document.getElementById('app')
    if (app) {
      const root = ReactDOM.createRoot(app)
      root.render(App({}))
    }
  }
  #setSlider() {
    this.swiper = new Swiper('.swiper-container', {})
  }
  async #fetchJsonplaceholder() {
    const result = await fetchApi<any>({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      debug: true,
    })
    console.log(result)
  }
  #fire() {
    console.log('fire!')
  }
  #listener() {
    const debounce = debounceEvent(this.#fire.bind(this))
    window.addEventListener('resize', debounce)
  }
}
