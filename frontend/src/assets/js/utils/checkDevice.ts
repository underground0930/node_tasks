import device from 'current-device';

/**
 * デバイスの判定
 * @return {void}
 *
 */

export const checkDevice = (): void => {
  if (device.mobile()) {
    window.globalVars.isMobile = true;
  } else if (device.tablet()) {
    window.globalVars.isTablet = true;
  } else {
    window.globalVars.isDesktop = true;
  }
};
