import '../pages/index.css';
import { createCard, removeCard } from '../scripts/card.js';
import initialCards from '../scripts/cards.js';
import { openModal, closeModal } from '../scripts/modal.js'

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
// Добавить DOM-элементы модальных окон и кнопок
const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const cardTemplate2 = document.querySelector('#card-template').content;
const cardElement2 = cardTemplate2
    .querySelector('.places__item')
    .cloneNode(true);
const cardImage2 = cardElement2.querySelector('.card__image');

initialCards.forEach((elem) => {
  placesList.append(createCard(elem.link, elem.name, removeCard));
});

// Добавить обработчики событий
editButton.addEventListener('click', () => openModal(editPopup))
addButton.addEventListener('click', () => openModal(addPopup))
