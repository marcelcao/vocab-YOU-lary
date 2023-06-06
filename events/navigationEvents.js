import { signOut } from '../utils/auth';
import {
  getCards, htmlCards, cssCards, jsCards, sortAlpha
} from '../api/cardsData';
import { showCards } from '../pages/cards';

const navigationEvents = (user) => {
  // LOGOUT BUTTON //
  document.querySelector('#logoutBtn').addEventListener('click', signOut);

  // ALL CARDS //
  document.querySelector('#allCards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  // HTML CARDS //
  document.querySelector('#htmlCards').addEventListener('click', () => {
    htmlCards(user.uid).then(showCards);
  });

  // CSS CARDS //
  document.querySelector('#cssCards').addEventListener('click', () => {
    cssCards(user.uid).then(showCards);
  });

  // JS CARDS //
  document.querySelector('#jsCards').addEventListener('click', () => {
    jsCards(user.uid).then(showCards);
  });

  // SORT ALPHABETICAL //
  document.querySelector('#alpha').addEventListener('click', () => {
    sortAlpha(user.uid).then(showCards);
  });
};

export default navigationEvents;
