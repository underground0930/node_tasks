/**
 * デバイスの判定
 * @return {void}
 *
 */

// modules
import device from 'current-device';

const checkDevice = (): void => {
  if (device.mobile()) {
    window.globalVars.isMobile = true;
  } else if (device.tablet()) {
    window.globalVars.isTablet = true;
  } else {
    window.globalVars.isDesktop = true;
  }
};

export default checkDevice;
