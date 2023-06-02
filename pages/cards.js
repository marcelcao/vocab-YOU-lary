import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#cardsContainer', domString);
};

const showCards = (array) => {
  clearDom();

  let cardString = '';
  array.forEach((item) => {
    cardString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.vocabWord}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.vocabLanguage}</h6>
      <p class="card-text">${item.vocabDefinition}</p>
        <hr>
        <i id="editCardBtn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="deleteCardBtn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
  renderToDom('#cardsContainer', cardString);
};

export { emptyCards, showCards };
