import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getCards } from '../api/cardsData';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  // Put all cards on the DOM on app load//
  // almost amazon reference: getBooks(user.uid).then((books) => showBooks(books)); //
};

export default startApp;
