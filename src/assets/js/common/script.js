// import 'intersection-observer' // IEが非対応のため
import checkIE from '@/utils/checkIE'
import setPolifills from '@/utils/setPolifills'

window.globalVars = {
  data,
  isIE: checkIE()
}

if (window.globalVars.isIE) {
  setPolifills()
}
