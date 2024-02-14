const fetchConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
  headers: {
    authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
    'Content-Type': 'application/json',
  },
};

// Функция обработки запроса
const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }
  return res.json();
};

// Получание карточек
const getCadrs = () => {
  return fetch(`${fetchConfig.baseUrl}/cards`, {
    method: 'GET',
    headers: fetchConfig.headers,
  }).then((response) => handleResponse(response));
};

// Получить мои данные
const getMyData = () => {
  return fetch(`${fetchConfig.baseUrl}/users/me`, {
    method: 'GET',
    headers: fetchConfig.headers,
  }).then((response) => handleResponse(response));
};

// Редактирование профиля
const editProfile = (userName, userAbout) => {
  return fetch(`${fetchConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  }).then((response) => handleResponse(response));
};

// Редактирование аватара
const editAvatar = (userAvatar) => {
  return fetch(`${fetchConfig.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      avatar: userAvatar,
    }),
  }).then((response) => handleResponse(response));
};

// Добавление новой карточки
const postNewCard = (cardTitle, cardLink) => {
  return fetch(`${fetchConfig.baseUrl}/cards`, {
    method: 'POST',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      name: cardTitle,
      link: cardLink,
    }),
  }).then((response) => handleResponse(response));
};

// Лайк карточки
const likeCardFetch = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: fetchConfig.headers,
  }).then((response) => handleResponse(response));
};

// Анлайк карточки
const unlikeCardFetch = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: fetchConfig.headers,
  }).then((response) => handleResponse(response));
};

// Удаление карточки
const deleteCard = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: fetchConfig.headers,
  }).then((response) => handleResponse(response));
};

export {
  getCadrs,
  getMyData,
  editProfile,
  postNewCard,
  deleteCard,
  editAvatar,
  likeCardFetch,
  unlikeCardFetch,
};
