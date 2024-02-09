const createCard = (cardData, deleteCard, like, openCard) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-count');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener('click', openCard);

  likeButton.addEventListener('click', like);

  likeCount.textContent = cardData.likes.length;

  // Если карточка не моя, то скрыть кнопку удаления карточки
  if (cardData.owner._id === '989164bdc393fda019eca7de') {
    deleteButton.addEventListener('click', deleteCard);
  } else {
    deleteButton.style.visibility = 'hidden';
  }

  return cardElement;
};

const removeCard = (event) => event.target.closest('.places__item').remove();

const likeCard = (event) =>
  event.target.classList.toggle('card__like-button_is-active');

export { createCard, removeCard, likeCard };
