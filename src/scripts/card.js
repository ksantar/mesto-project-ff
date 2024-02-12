import { deleteCard, likeCardFetch, unlikeCardFetch } from './api.js';

const createCard = (cardData, remove, like, openCard) => {
  const cardOwnerId = '989164bdc393fda019eca7de';
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

  likeCount.textContent = cardData.likes.length;

  cardImage.addEventListener('click', openCard);

  likeButton.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__like-button_is-active')) {
      like(evt, cardDataId, likeCount);
    } else {
      like(evt, cardDataId, likeCount);
    }
  });

  // Если карточка не моя, то скрыть кнопку удаления карточки
  if (cardData.owner._id === cardOwnerId) {
    deleteButton.addEventListener('click', (evt) => {
      remove(evt, cardDataId);
    });
  } else {
    deleteButton.setAttribute('hidden', true);
  }

  // Проверка на наличие лайка
  cardData.likes.forEach((elem) => {
    if (elem._id === cardOwnerId) {
      likeButton.classList.add('card__like-button_is-active');
    }
  });

  return cardElement;
};

const removeCard = (event, cardId) => {
  deleteCard(cardId).then(() => {
    event.target.closest('.places__item').remove();
  });
};

const likeCard = (event, cardId, count) => {
  if (!event.target.classList.contains('card__like-button_is-active')) {
    likeCardFetch(cardId).then((data) => {
      event.target.classList.add('card__like-button_is-active');
      count.textContent = data.likes.length;
    });
  } else {
    unlikeCardFetch(cardId).then((data) => {
      event.target.classList.remove('card__like-button_is-active');
      count.textContent = data.likes.length;
    });
  }
};
// event.target.classList.toggle('card__like-button_is-active');

export { createCard, removeCard, likeCard };
