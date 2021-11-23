import { checkDevice } from '@/utils/checkDevice';
import { settingLegacyBrowser } from '@/utils/IE/settingLegacyBrowser';

// libs
import { PageScroll } from '@/utils/PageScroll';

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
  const scrollTop = document.querySelectorAll<HTMLElement>('.js-scrollTop');
  if (scrollTop) {
    new PageScroll(scrollTop, 900);
  }
};

init();
