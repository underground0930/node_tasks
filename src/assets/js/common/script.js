import 'intersection-observer' // IEが非対応のため
import 'objectFitPolyfill' // IEが非対応のため
import checkIE from '@/utils/checkIE'
import setPolifills from '@/utils/setPolifills'

window.globalVars = {
  data,
  isIE: checkIE()
}

if (window.globalVars.isIE) {
  setPolifills()
  objectFitPolyfill(document.querySelectorAll('.is-objectFit-cover'))
  document.documentElement.classList.add('is-IE')
}
