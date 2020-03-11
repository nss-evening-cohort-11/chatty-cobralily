
import utils from '../helpers/utils';
import messageData from '../helpers/data/messageData';


const buildNavbar = () => {
  let domString = '';
  domString += '<div>';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  domString += '<a class="navbar-brand" href="#">Navbar</a>';
  domString += '<form class="form-inline my-2 my-lg-0">';
  domString += '<input class="form-control mr-sm-2" type="email" id="message-field" placeholder="Enter message" aria-label="Search">';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" id="clear-log-button">Clear</button>';
  domString += '</form>';
  domString += '</nav>';
  domString += '</div>';
  utils.printToDom('nav', domString);
  $('#message-field').on('keypress', (e) => {
    e.preventDefault();
    if (e.which === 13) {
      const messages = messageData.getMessages();
      const newMessage = {
        id: `message${messages.length + 1}`,
        message: $('#message-field').val(),
      };
      messages.push(newMessage);
      $('#message-field').trigger('reset');
      console.error(messages);
    }
  });
  // $('#clear-log-button').on('click' clearLog);
};

export default { buildNavbar };
