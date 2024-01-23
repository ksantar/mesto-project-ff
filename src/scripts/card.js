const createCard = (cardData, deleteCard, like, openCard) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener('click', openCard);

  likeButton.addEventListener('click', like);

  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
};

const removeCard = (event) => event.target.closest('.places__item').remove();

const likeCard = (event) =>
  event.target.classList.toggle('card__like-button_is-active');

export { createCard, removeCard, likeCard };
