import { createCard, getCards, updateCard } from '../api/cardsData';
import { showCards } from '../pages/cards';
import timeStamp from '../utils/time';

const formEvents = (user) => {
  document.querySelector('#mainDiv').addEventListener('submit', (e) => {
    e.preventDefault();
    // SUBMIT CARD EVENT //
    if (e.target.id.includes('submitWord')) {
      const payload = {
        vocabWord: document.querySelector('#word').value,
        vocabDefinition: document.querySelector('#definition').value,
        vocabLanguage: document.querySelector('#langCategory').value,
        timestamp: timeStamp,
        uid: user.uid
      };
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
    // EDIT CARD EVENT //
    if (e.target.id.includes('updateWord')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        vocabWord: document.querySelector('#word').value,
        vocabDefinition: document.querySelector('#definition').value,
        vocabLanguage: document.querySelector('#langCategory').value,
        timestamp: timeStamp,
        uid: user.uid,
        firebaseKey
      };
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
