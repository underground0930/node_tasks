// import Swiper from 'swiper';
import React from 'react';
import ReactDOM from 'react-dom';

// import Swiper from 'swiper';
// import $ from 'jquery';
// import axios from 'axios';
// import gsap from 'gsap';
// import jump from 'jump.js';

// React components
import App from '../components/pages/App';

// modules
import checkImgsLoad from '../utils/checkImgsLoad';
import debounce from '../utils/debounce';
import scrollCheck from '../utils/scrollCheck';

// const mySwiper = new Swiper('.swiper-container', {});

ReactDOM.render(React.createElement(App, null, null), document.getElementById('app'));

checkImgsLoad({
  selector: '.img',
  callback: () => {
    console.log('callback');
  },
  callbackFinish: () => {
    console.log('callback Finish');
  },
});

const d = debounce(() => {
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
