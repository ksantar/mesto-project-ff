// Функции работы с модальными окнами
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const openModal = (element) => {
  element.classList.add('popup_is-opened')
};

const closeModal = (evt) => {};

export { openModal, closeModal };
