import { deleteCards, getCards, getSingleCard } from '../api/cardsData';
import addWordForm from '../components/forms/newWordForm';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  document.querySelector('#mainDiv').addEventListener('click', (e) => {
    // DELETE CARD //
    if (e.target.id.includes('deleteCardBtn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this card?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCards(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    // SHOW FORM TO ADD NEW CARD EVENT //
    if (e.target.id.includes('newCardBtn')) {
      addWordForm({}, user);
    }

    // EDIT CARD EVENT //
    if (e.target.id.includes('editCardBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addWordForm(cardObj, user));
    }
  });
};

export default domEvents;
