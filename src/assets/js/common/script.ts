// polifil
import 'intersection-observer'; // for IE
import 'objectFitPolyfill'; // for IE
import '@/libs/object-assign-polifil'; // for IE

// utils
import checkIE from '@/utils/checkIE'; // for IE
import checkDevice from '@/utils/checkDevice';
import setPolifills from '@/utils/setPolifills'; // for IE

window.globalVars = {
  data,
  isIE: checkIE(),
  isPhone: false,
  isTablet: false,
  isDesktop: false,
};

const init = () => {
  checkDevice();
  if (window.globalVars.isIE) {
    setPolifills();
    window.objectFitPolyfill(document.querySelectorAll('.is-objectFit-cover'));
    document.documentElement.classList.add('is-IE');
  }
};

init();
