const fetchConfig = {
  BASE_URL: 'https://nomoreparties.co/v1/wff-cohort-6/',
  autorisation: '70ed6172-e461-46e4-96d0-911b4afd383e',

}

// Получание карточек
const getCadrs = () => {
  return fetch(`${fetchConfig.BASE_URL}cards`, {
    method: 'GET',
    headers: {
      authorization: fetchConfig.autorisation,
    },
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
  return fetch(`${fetchConfig.BASE_URL}users`, {
    method: 'GET',
    headers: {
      authorization: fetchConfig.autorisation,
    },
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

// Получит мои данные
const getMyData = () => {
  return fetch(`${fetchConfig.BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      authorization: fetchConfig.autorisation,
    },
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
const editProfile = (userName, userAbout, userAvatar) => {
  return fetch(`${fetchConfig.BASE_URL}users/me`, {
    method: 'PATCH',
    headers: {
      authorization: fetchConfig.autorisation,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName.value,
      about: userAbout.value,
      avatar: userAvatar
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
  return fetch(`${fetchConfig.BASE_URL}cards`, {
    method: 'POST',
    headers: {
      authorization: fetchConfig.autorisation,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: cardTitle,
      link: cardLink,
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

// Удаление карточки
const deleteCard = (cardId) => {
  return fetch(`${fetchConfig.BASE_URL}cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: fetchConfig.autorisation,
    },
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

export { getCadrs, getUsers, getMyData, editProfile, postNewCard, deleteCard };
