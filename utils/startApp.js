import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import sorter from '../components/shared/sort';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  sorter();
  navBar();
  logoutButton();
  navigationEvents(user);
  // Put all cards on the DOM on app load//
  // almost amazon reference: getBooks(user.uid).then((books) => showBooks(books)); //
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
