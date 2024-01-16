const cardTemplate = document.querySelector('#card-template').content;

const createCard = (imageSource, titleValue, deleteCard) => {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = imageSource;
  cardImage.alt = titleValue;
  cardTitle.textContent = titleValue;

  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
};

const removeCard = (event) => event.target.closest('.places__item').remove();

// Добавить сюда функию лайка карточки

export { createCard, removeCard };
