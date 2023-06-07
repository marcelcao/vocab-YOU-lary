import client from '../utils/client';

const endpoint = client.databaseURL;

// GET CARDS //

const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE CARDS //

const deleteCards = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE CARD //
const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE CARD //
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE CARD //

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET HTML CARDS //
const htmlCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((obj) => obj.vocabLanguage === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

// GET CSS CARDS //
const cssCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((obj) => obj.vocabLanguage === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

// GET JS CARDS //
const jsCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.vocabLanguage === 'Javascript');
      resolve(js);
    })
    .catch(reject);
});

const sortAlpha = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const alpha = Object.values(data).sort((a, b) => {
        if (a.vocabWord.toLowerCase() < b.vocabWord.toLowerCase()) return -1;
        if (a.vocabWord.toLowerCase() > b.vocabWord.toLowerCase()) return 1;
        return 0;
      });
      resolve(alpha);
    })
    .catch(reject);
});

const sortOldest = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const alpha = Object.values(data).sort((a, b) => {
        if (a.timestamp < b.timestamp) return -1;
        return 0;
      });
      resolve(alpha);
    })
    .catch(reject);
});

const sortNewest = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const alpha = Object.values(data).sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        return 0;
      });
      resolve(alpha);
    })
    .catch(reject);
});

const searchCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const searching = Object.values(data).filter((obj) => obj.vocabWord.toLowerCase());
      resolve(searching);
    })
    .catch(reject);
});

export {
  getCards,
  deleteCards,
  getSingleCard,
  createCard,
  updateCard,
  htmlCards,
  cssCards,
  jsCards,
  sortAlpha,
  sortOldest,
  sortNewest,
  searchCards
};
