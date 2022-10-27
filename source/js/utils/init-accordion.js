import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  document.querySelectorAll('.is-active').forEach((el) => el.classList.remove('is-active'));

  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
