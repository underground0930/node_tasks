import React from 'react';
import ReactDOM from 'react-dom/client';
import SwiperCore, { Pagination, Navigation, Swiper } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

// React components
import App from '@/components/pages/App';

// modules
import { checkImgsLoad } from '@/utils/checkImgsLoad';
import { debounceEvent } from '@/utils/debounceEvent';
import { scrollCheck } from '@/utils/scrollCheck';

const mySwiper = new Swiper('.swiper-container', {});

const app = document.getElementById('app');
if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(App());
}

checkImgsLoad({
  imgArray: [],
  callback: () => {
    console.log('callback');
  },
  callbackFinish: () => {
    console.log('callback Finish');
  },
});

const d = debounceEvent(() => {
  console.log('resize!');
});

window.addEventListener('resize', d);

const navChange = () => {
  const nav = document.querySelector('.p-boxNav');
  if (nav === null) return false;
  return (elm: any) => {
    const index = elm.dataset.id;
    nav.innerHTML = index;
  };
};

window.addEventListener('load', () => {
  const check = navChange();
  if (!check) return;
  scrollCheck({
    targets: '.p-box',
    options: {},
    callback: (entry: any, observer: any) => {
      const {
        boundingClientRect,
        intersectionRatio,
        intersectionRect,
        isIntersecting,
        rootBounds,
        target,
        time,
      } = entry;
      if (entry.isIntersecting) {
        target.classList.add('is-show');
        check(entry.target);
        // observer.unobserve(entry.target)
        return;
      }
      target.classList.remove('is-show');
    },
  });
});

console.log('===param===');
console.log(param1);
console.log(param2);
console.log(param3);
