import '../pages/index.css';
import { createCard, removeCard, likeCard } from '../scripts/card.js';
import initialCards from '../scripts/cards.js';
import { openModal, closeModal } from '../scripts/modal.js';

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
// Кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
// Попапы
const popups = document.querySelectorAll('.popup');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');

// Элементы формы редактирования
const editFormElement = popupTypeEdit.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_description');
nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

// Элементы формы добавления новой карточки
const addFormElement = popupTypeNewCard.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__input_type_card-name');
const urlInput = addFormElement.querySelector('.popup__input_type_url');

// Элементы попапа карточки
const cardPicture = popupTypeImage.querySelector('.popup__image');
const cardName = popupTypeImage.querySelector('.popup__caption');

// Функция открытия картинки
const openFullImage = (link, title) => {
  openModal(popupTypeImage);
  cardPicture.src = link;
  cardPicture.alt = title;
  cardName.textContent = title;
};

// Функция редактирования профиля
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  const name = nameInput.value;
  const job = jobInput.value;
  profileTitle.textContent = name;
  profileDescription.textContent = job;
  closeModal(popupTypeEdit);
}

// Функция добавления новой карточки
const handleNewCardFormSubmit = (evt) => {
  evt.preventDefault();
  const url = urlInput.value;
  const place = placeInput.value;
  placesList.prepend(createCard(url, place, removeCard, likeCard, () => openFullImage(url, place)));
  addFormElement.reset();
  closeModal(popupTypeNewCard);
}

// Добавление всем попапам класса для плавности
popups.forEach(element => {
  element.classList.add('popup_is-animated');
});

// Начальные карточки
initialCards.forEach((elem) => {
  placesList.append(
    createCard(elem.link, elem.name, removeCard, likeCard, () =>
      openFullImage(elem.link, elem.name)
    )
  );
});

// Открытие попапов
editButton.addEventListener('click', () => openModal(popupTypeEdit));
addButton.addEventListener('click', () => openModal(popupTypeNewCard));

// Закрытие попапов
popupTypeEdit
  .querySelector('.popup__close')
  .addEventListener('click', () => closeModal(popupTypeEdit));
popupTypeNewCard
  .querySelector('.popup__close')
  .addEventListener('click', () => closeModal(popupTypeNewCard));
popupTypeImage
  .querySelector('.popup__close')
  .addEventListener('click', () => closeModal(popupTypeImage));

// Сабмит редактирования профиля
editFormElement.addEventListener('submit', handleEditFormSubmit);

// Сабмит добавления новой карточки
addFormElement.addEventListener('submit', handleNewCardFormSubmit);
