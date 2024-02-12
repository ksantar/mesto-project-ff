const fetchConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
  headers: {
    authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
    'Content-Type': 'application/json',
  },
};

// Получание карточек
const getCadrs = () => {
  return fetch(`${fetchConfig.baseUrl}/cards`, {
    method: 'GET',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Получение пользователей
const getUsers = () => {
  return fetch(`${fetchConfig.baseUrl}/users`, {
    method: 'GET',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Получить мои данные
const getMyData = () => {
  return fetch(`${fetchConfig.baseUrl}/users/me`, {
    method: 'GET',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Редактирование профиля
const editProfile = (userName, userAbout) => {
  return fetch(`${fetchConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      name: userName.value,
      about: userAbout.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Редактирование аватара
const editAvatar = (userAvatar) => {
  return fetch(`${fetchConfig.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      avatar: userAvatar.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Добавление новой карточки
const postNewCard = (cardTitle, cardLink) => {
  return fetch(`${fetchConfig.baseUrl}/cards`, {
    method: 'POST',
    headers: fetchConfig.headers,
    body: JSON.stringify({
      name: cardTitle.value,
      link: cardLink.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Лайк карточки
const likeCardFetch = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Анлайк карточки
const unlikeCardFetch = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Удаление карточки
const deleteCard = (cardId) => {
  return fetch(`${fetchConfig.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: fetchConfig.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getCadrs,
  getUsers,
  getMyData,
  editProfile,
  postNewCard,
  deleteCard,
  editAvatar,
  likeCardFetch,
  unlikeCardFetch,
};
