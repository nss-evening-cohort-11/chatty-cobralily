import messageData from '../helpers/data/messageData';
import message from './message';
import utils from '../helpers/utils';


const buildNavbar = () => {
  let domString = '';
  domString += '<div>';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  domString += '<a class="navbar-brand" href="#">Navbar</a>';
  domString += '<form id="navForm" class="form-inline my-2 my-lg-0">';
  domString += '<input id="nav-input" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
  domString += '<button id="submit-message-button" class="btn btn-danger my-2 my-sm-0" type="submit">Add Message</button>';
  domString += '<button id="clear-all-button" class="btn btn-outline-success my-2 my-sm-0" type="submit">CLEAR</button>';
  domString += '</form>';
  domString += '</div>';
  domString += '</nav>';
  utils.printToDom('nav', domString);
};
const addMessageBtn = (e) => {
  if (e.target.id === 'submit-message-button') {
    e.preventDefault();
    $('.submit-message-button').keydown(addMessageBtn);
    const messages = messageData.getMessages();
    const newMessageForUser = {
      id: `messageid${messages.length + 1}`,
      message: document.getElementById('nav-input').value,
    };
    messages.push(newMessageForUser);
    message.messageBuilder(message);
  }
};
export default { buildNavbar, addMessageBtn };
