let text = document.getElementById('more');
let button = document.getElementById('moreButton');

// Show / hide About block content
const showMoreInfo = () => {
  if (button) {
    text.classList.add('hidden');

    button.addEventListener('click', function () {
      text.classList.toggle('hidden');
      if (text.classList.contains('hidden')) {
        button.innerHTML = 'Подробнее';
      } else {
        button.innerHTML = 'Скрыть';
      }
    });
  } else {
    return;
  }
};

export {showMoreInfo};
