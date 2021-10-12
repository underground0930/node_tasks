// polifil
import 'intersection-observer'; // for IE
import 'objectFitPolyfill'; // for IE
import '@/utils/IE/objectAssignPolifil'; // for IE

// utils
import { checkIE } from '@/utils/IE/checkIE'; // for IE
import { setPolifills } from '@/utils/IE/setPolifills'; // for IE

export const settingLegacyBrowser = () => {
  window.globalVars.isIE = checkIE();
  if (window.globalVars.isIE) {
    console.log('IE');
    setPolifills();
    window.objectFitPolyfill(document.querySelectorAll('.is-objectFit-cover'));
    document.documentElement.classList.add('is-IE');
  }
};
