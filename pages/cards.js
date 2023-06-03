import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#cardsContainer', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="new-card-btn" id="newCardBtn">Create a New Vocab Card</button>';
  renderToDom('#createWordBtn', btnString);

  let cardString = '';
  array.forEach((item) => {
    cardString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.vocabWord}</h5>
      <h6 class="lang">${item.vocabLanguage}</h6>
      <p class="card-text">${item.vocabDefinition}</p>
        <hr>
        <button id="editCardBtn--${item.firebaseKey}" class="btn btn-info">edit</button>
        <button id="deleteCardBtn--${item.firebaseKey}" class="btn btn-danger">delete</button>
    </div>
  </div>`;
  });
  renderToDom('#cardsContainer', cardString);
};

export { emptyCards, showCards };
