// The innerHTML property sets or returns the HTML content (inner HTML) of an element. //
// need to update the ID elements with the specific targets that we want to clear out on the DOM//

const clearDom = () => {
  document.querySelector('#cardsContainer').innerHTML = '';
  document.querySelector('#createWordBtn').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
};

export default clearDom;
