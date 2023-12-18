// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const likeButton = cardTemplate.querySelector('.card__like-button');

// @todo: DOM узлы
let content = document.querySelector('.content');
let placesList = content.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(imageSource, titleValue) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  
  cardElement.querySelector('.card__image').setAttribute('src', imageSource);
  cardElement.querySelector('.card__title').textContent = titleValue;
  
  deleteButton.addEventListener('click', removeCard) 

  placesList.append(cardElement);
}

// @todo: Функция удаления карточки
function removeCard (element) {
  element.target.parentNode.remove();
}

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].link, initialCards[i].name);
}