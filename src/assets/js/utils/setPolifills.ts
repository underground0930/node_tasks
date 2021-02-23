/**
 * レガシーブラウザ用のポリフィル
 */

import loadScript from '../utils/loadScript';

const setPolifills = () => {
  const array = [
    {
      name: 'object-fit-images',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/object-fit-images/3.2.4/ofi.js', // object-fit
      callback: () => {
        var someImages = document.querySelectorAll('.is-objectFit-cover');
        window.objectFitImages(someImages);
      },
    },
    {
      name: 'stickyfill',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/stickyfill/2.1.0/stickyfill.min.js', // position:sticky
      callback: () => {
        const elements = document.querySelectorAll('.is-sticky');
        window.Stickyfill.add(elements);
      },
    },
    // {
    //   name: 'css-vars-ponyfill',
    //   url:
    //     'https://cdnjs.cloudflare.com/ajax/libs/css-vars-ponyfill/2.3.2/css-vars-ponyfill.min.js', // css-variables
    //   callback: () => {
    //     window.cssVars({
    //       rootElement: document,
    //     });
    //   },
    // },
    {
      name: 'Picturefill',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.js', // picture
    },
  ];
  window.addEventListener('DOMContentLoaded', () => {
    array.forEach((item) => {
      loadScript(item.url, () => {
        console.log(item.name + ' is load');
        if (item.callback) {
          item.callback();
        }
      });
    });
  });
};

export default setPolifills;
