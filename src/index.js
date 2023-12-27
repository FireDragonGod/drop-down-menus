import './assets/component-one/style.css';
import dropDown from './js/nav-func';

window.addEventListener('load', () => {
  const navBarItem = document.querySelectorAll('div[data-nav-bar-item]');

  dropDown({
    elementToListen: navBarItem,
    itsDataAttribute: 'data-nav-bar-item',
    subElement: 'div[data-nav-sub-item',
    classListValue: 'visible',
    togglerClassListValue: 'active-toggler',
  }).dropDownElement();
});
