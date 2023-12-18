// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

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
initialCards.forEach(function (elem) {
  addCard(elem.link, elem.name)
})