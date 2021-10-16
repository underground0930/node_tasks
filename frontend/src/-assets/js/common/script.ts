import { checkDevice } from '@/utils/checkDevice';
import { settingLegacyBrowser } from '@/utils/IE/settingLegacyBrowser';

// libs
import { ScrollTop } from '@/utils/ScrollTop';

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
  new ScrollTop();
};

init();
