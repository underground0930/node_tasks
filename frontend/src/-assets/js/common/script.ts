import { checkDevice } from '@/utils/checkDevice';
import { settingLegacyBrowser } from '@/utils/IE/settingLegacyBrowser';

// libs
import { setScrollTop } from '@/utils/setScrollTop';

window.globalVars = {
  data,
  isIE: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const init = () => {
  checkDevice();
  settingLegacyBrowser();
  setScrollTop({ target: '.js-scrollTop' });
};

init();
