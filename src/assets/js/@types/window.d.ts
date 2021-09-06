interface Window {
  objectFitImages: (elms: NodeListOf) => void;
  objectFitPolyfill: (elms: NodeListOf) => void;
  Stickyfill: any;
  ga: any;
  IntersectionObserver: any;
  requestAnimationFrame: any;
  WebGLRenderingContext: any;
  globalVars: {
    data: any;
    isIE: boolean;
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
}
declare const window: Window;
