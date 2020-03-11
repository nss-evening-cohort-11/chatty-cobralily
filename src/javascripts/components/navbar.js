
import utils from '../helpers/utils';


const buildNavbar = () => {
  let domString = '';
  domString += '<div>';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  domString += '<a class="navbar-brand" href="#">Navbar</a>';
  domString += '<form class="form-inline my-2 my-lg-0">';
  domString += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>';
  domString += '</form>';
  domString += '</div>';
  domString += '</nav>';
  utils.printToDom('nav', domString);
};

export default { buildNavbar };
