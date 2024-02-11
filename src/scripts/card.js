import { deleteCard } from './api.js';

const createCard = (cardData, deleteCard2, like, openCard) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-count');
  const cardDataId = cardData._id;

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener('click', openCard);

  likeButton.addEventListener('click', like);

  likeCount.textContent = cardData.likes.length;

  // Если карточка не моя, то скрыть кнопку удаления карточки
  if (cardData.owner._id === '989164bdc393fda019eca7de') {
    deleteButton.addEventListener('click', (evt) =>
      deleteCard2(evt, cardDataId)
    );
  } else {
    deleteButton.setAttribute('hidden', true);
  }

  return cardElement;
};

const removeCard = (event, cardId) => {
  deleteCard(cardId).then(() => {
    event.target.closest('.places__item').remove();
  });
};

const likeCard = (event) =>
  event.target.classList.toggle('card__like-button_is-active');

export { createCard, removeCard, likeCard };
