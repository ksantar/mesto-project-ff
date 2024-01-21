import '../pages/index.css';
import { createCard, removeCard, likeCard } from '../scripts/card.js';
import initialCards from '../scripts/cards.js';
import { openModal, closeModal } from '../scripts/modal.js';

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
// Кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
// Попапы
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');

// Доработать элементы карточки для попапов
// const cardTemplate2 = document.querySelector('#card-template').content;

// Добавить функцию открытия картинки

initialCards.forEach((elem) => {
  placesList.append(
    createCard(
      elem.link,
      elem.name,
      removeCard,
      likeCard,
      () => openModal(popupTypeImage) // заменить на отдельную функцию открытия картинки
    )
  );
});

// Добавить обработчики событий
editButton.addEventListener('click', () => openModal(popupTypeEdit));
addButton.addEventListener('click', () => openModal(popupTypeNewCard));

// Перенести в переменные либо выбрать кнопку закрытия из переменной попапа
popupTypeEdit
  .querySelector('.popup__close')
  .addEventListener('click', () => closeModal(popupTypeEdit));
popupTypeNewCard
  .querySelector('.popup__close')
  .addEventListener('click', () => closeModal(popupTypeNewCard));
