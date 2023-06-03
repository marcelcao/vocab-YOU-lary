import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" href="#">vocab-YOU-lary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="allCards">
              All Cards <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="htmlCards">HTML Cards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="cssCards">CSS Cards</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#" id="jsCards">JS Cards</a>
          </li>
          <li>
          <input
            class="form-control mr-sm-2"
            id="searchCards"
            placeholder="Search Cards"
            aria-label="Search"
          />
          </li>
        </ul>
        <span class="navbar-text">
          <div id="logoutBtn"></div>
        </span>
      </div>
      </div>
    </nav>`;
  renderToDom('#navbar', domString);
};

export default navBar;
