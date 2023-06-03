import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `updateWord--${obj.firebaseKey}` : 'submitWord'}" class="mb-4">
  
  <div class="form-group">
    <label for="word">New Vocab Word</label>
    <input type="text" class="form-control" id="word" aria-describedby="cardTitle" placeholder="Type Vocab Word" value="${obj.vocabWord || ''}" required>
  </div>
  
  <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Type Definition" id="definition" style="height: 100px">${obj.vocabDefinition || ''}</textarea>
  </div>
  
  <div class="form-group">
  <label for="language">Programming Language</label>
  <select id="langCategory" name="vocabLang" value="${obj.vocabLanguage || ''}" required>
    <option value="HTML" ${obj.vocabLanguage === 'HTML' ? 'selected' : ''}>HTML</option>
    <option value="CSS" ${obj.vocabLanguage === 'CSS' ? 'selected' : ''}>CSS</option>
    <option value="Javascript" ${obj.vocabLanguage === 'Javascript' ? 'selected' : ''}>Javascript</option>
  </select>
</div>
  
  <button type="submit" class="form-btn">Submit Vocab Word
  </button>

</form>`;
  renderToDom('#formContainer', domString);
};

export default addWordForm;
