import {Accordions} from './accordions';

const NOJS_ACCORDION_CLASSNAME = 'is-active';
let accordions;
let activeElements = document.querySelectorAll('.is-active');

const initAccordions = () => {
  activeElements.forEach((el) => el.classList.remove(NOJS_ACCORDION_CLASSNAME));

  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
