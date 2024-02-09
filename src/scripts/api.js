// Получание карточек
const getCadrs = () => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-6/cards', {
    method: 'GET',
    headers: {
      authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка');
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Получение пользователей
const getUsers = () => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-6/users', {
    method: 'GET',
    headers: {
      authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка');
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Редактирование профиля
const editProfile = () => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-6/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Александр',
      about: 'Студент',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка');
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Добавление новой карточки
const postNewCard = (cardTitle, cardLink) => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-6/cards', {
    method: 'POST',
    headers: {
      authorization: '70ed6172-e461-46e4-96d0-911b4afd383e',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: cardTitle,
      link: cardLink,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка');
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getCadrs, getUsers, editProfile, postNewCard };
