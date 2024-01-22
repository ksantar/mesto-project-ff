// Функции работы с модальными окнами
const openModal = (element) => {
  element.classList.add('popup_is-opened');
  element.addEventListener('click', closeByOverlay);
  document.addEventListener('keydown', closeByKey);
};

const closeModal = (element) => {
  element.classList.remove('popup_is-opened');
  element.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', closeByKey);
};

const closeByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};

const closeByKey = (evt) => {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  }
};

export { openModal, closeModal };
