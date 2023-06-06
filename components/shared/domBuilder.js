import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="mainDiv">
    <div id="createWordBtn"></div>
    <div id="formContainer"></div>
    <div id="sortContainer"></div>
    <div id="cardsContainer"></div>
  </div> 
  `;
  renderToDom('#app', domString);
};

export default domBuilder;
