import 'intersection-observer'; // for IE
import 'objectFitPolyfill'; // for IE
import "../libs/object-assign-polifil" // for IE
import checkIE from '../utils/checkIE'; // for IE
import setPolifills from '../utils/setPolifills'; // for IE

window.globalVars = {
  data,
  isIE: checkIE(),
};

if (window.globalVars.isIE) {
  setPolifills();
  window.objectFitPolyfill(document.querySelectorAll('.is-objectFit-cover'));
  document.documentElement.classList.add('is-IE');
}
