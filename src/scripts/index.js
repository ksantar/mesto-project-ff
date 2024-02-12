import '../pages/index.css';
import { createCard, removeCard, likeCard } from '../scripts/card.js';
import { openModal, closeModal, closeByOverlay } from '../scripts/modal.js';
import { enableValidation, clearValidation } from '../scripts/validation.js';
import {
  getCadrs,
  getUsers,
  getMyData,
  editProfile,
  postNewCard,
  editAvatar,
} from './api.js';

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');
const profileAvatar = content.querySelector('.profile__image');

// Кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__close');

// Попапы
const popups = document.querySelectorAll('.popup');
const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');

// Элементы попапа смены аватара
const avatarFormElement = popupTypeAvatar.querySelector('.popup__form');
const avatarUrlInput = avatarFormElement.querySelector(
  '.popup__input_type_url'
);
const saveButton = avatarFormElement.querySelector('.popup__button');

// Элементы формы редактирования
const editFormElement = popupTypeEdit.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector(
  '.popup__input_type_description'
);
const editProfileButton = editFormElement.querySelector('.popup__button');

// Элементы формы добавления новой карточки
const addFormElement = popupTypeNewCard.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__input_type_card-name');
const urlInput = addFormElement.querySelector('.popup__input_type_url');
const newCardButton = addFormElement.querySelector('.popup__button');

// Элементы попапа карточки
const cardPicture = popupTypeImage.querySelector('.popup__image');
const cardName = popupTypeImage.querySelector('.popup__caption');

// Конфиг
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// Функция открытия картинки
const openFullImage = (cardData) => {
  openModal(popupTypeImage);
  cardPicture.src = cardData.link;
  cardPicture.alt = cardData.name;
  cardName.textContent = cardData.name;
};

// Функция редактирования аватара
const handleEditAvatarSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, saveButton);
  editAvatar(avatarUrlInput)
    .then((data) => {
      profileAvatar.style = `background-image: url('${data.avatar}')`;
      closeModal(popupTypeAvatar);
    })
    .finally(() => {
      renderLoading(false, saveButton);
    });
};

// Функция редактирования профиля
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, editProfileButton);
  editProfile(nameInput, jobInput)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(popupTypeEdit);
    })
    .finally(() => {
      renderLoading(false, editProfileButton);
    });
};

// Функция добавления новой карточки
const handleNewCardFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, newCardButton);
  postNewCard(placeInput, urlInput)
    .then((data) => {
      placesList.prepend(
        createCard(data, removeCard, likeCard, () => openFullImage(data))
      );
      addFormElement.reset();
      closeModal(popupTypeNewCard);
    })
    .finally(() => {
      renderLoading(false, newCardButton);
    });
};

// Функция улучшения UX попапов
const renderLoading = (isLoading, buttonElement) => {
  if (isLoading) {
    buttonElement.textContent = 'Сохранение...';
  }
};

// Добавление всем попапам класса для плавности
popups.forEach((element) => {
  element.classList.add('popup_is-animated');
});

// Начальные карточки
Promise.all([getCadrs(), getUsers()]).then(([cards, users]) => {
  cards.forEach((elem) => {
    placesList.append(
      createCard(elem, removeCard, likeCard, () => openFullImage(elem))
    );
  });
});

// Открытие попапов
profileAvatar.addEventListener('click', () => {
  clearValidation(popupTypeAvatar, validationConfig);
  openModal(popupTypeAvatar);
  saveButton.textContent = 'Сохранить';
  getMyData().then((data) => {
    avatarUrlInput.value = data.avatar;
  });
});

editButton.addEventListener('click', () => {
  clearValidation(editFormElement, validationConfig);
  openModal(popupTypeEdit);
  editProfileButton.textContent = 'Сохранить';
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

addButton.addEventListener('click', () => {
  clearValidation(popupTypeNewCard, validationConfig);
  openModal(popupTypeNewCard);
  newCardButton.textContent = 'Сохранить';
  addFormElement.reset();
});

// Закрытие попапов
buttonCloseList.forEach((btn) => {
  const popup = btn.closest('.popup');
  popup.addEventListener('mousedown', closeByOverlay);
  btn.addEventListener('click', () => closeModal(popup));
});

// Сабмит изменения аватара
avatarFormElement.addEventListener('submit', handleEditAvatarSubmit);

// Сабмит редактирования профиля
editFormElement.addEventListener('submit', handleEditFormSubmit);

// Сабмит добавления новой карточки
addFormElement.addEventListener('submit', handleNewCardFormSubmit);

// Вызов валидации
enableValidation(validationConfig);

// Получение данных профиля
getMyData().then((data) => {
  profileTitle.textContent = data.name;
  profileDescription.textContent = data.about;
  profileAvatar.style = `background-image: url('${data.avatar}')`;
});
