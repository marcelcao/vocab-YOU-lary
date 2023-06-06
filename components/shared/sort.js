import renderToDom from '../../utils/renderToDom';

const sorter = () => {
  const sortString = `<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort Cards
</button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#" id="alpha">Alphabetical</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>`;
  renderToDom('#sortContainer', sortString);
};

export default sorter;
