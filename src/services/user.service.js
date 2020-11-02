const BASE_URL = 'http://localhost:8080/users';
const REQUEST_OPTIONS = {
  method: 'GET',
  redirect: 'follow'
};

const getUsers = (offset, limit) => {
  return new Promise((resolve, reject) => {
    const URL = `${BASE_URL}/?offset=${offset}&limit=${limit}`;
    fetch(URL, REQUEST_OPTIONS)
      .then(response => response.json())
      .then(result => resolve(result.data))
      .catch(error => reject(error));
  });
}

const getUser = (id) => {
  const URL = `${BASE_URL}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(URL, REQUEST_OPTIONS)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

const getUserFriends = (id, offset, limit) => {

  const URL = `${BASE_URL}/${id}/friends`;
  return new Promise((resolve, reject) => {
    fetch(URL, REQUEST_OPTIONS)
      .then(response => response.json())
      .then(result => resolve(result.data))
      .catch(error => reject(error));
  });
}

export {
  getUser,
  getUserFriends,
  getUsers
}