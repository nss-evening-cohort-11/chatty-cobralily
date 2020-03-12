import utils from '../../helpers/utils';
import messageData from '../../helpers/data/messageData';
import message from '../message';
import './navbar.scss';

const clearLog = (e) => {
  e.preventDefault();
  const messages = messageData.getMessages();
  messages.splice(0, messages.length);
  message.messageBuilder(messages);
  console.error('clearbutton');
};

const buildNavbar = () => {
  let domString = '';
  domString += '<div>';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light sticky">';
  domString += '<a class="navbar-brand" href="#">Chatty!</a>';
  domString += '<form class="form-inline my-2 my-lg-0 w-75">';
  domString += '<input class="form-control mr-sm-2" type="text" id="message-field" placeholder="Enter message" aria-label="Search">';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" id="clear-log-button">Clear</button>';
  domString += '</form>';
  domString += '</nav>';
  domString += '</div>';
  utils.printToDom('nav', domString);
  $('#message-field').keypress((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const messages = messageData.getMessages();
      const newMessage = {
        id: `message${messages.length + 1}`,
        message: $('#message-field').val(),
        timeStamp: Date.now(),
      };
      messages.push(newMessage);
      $('form').trigger('reset');
      message.messageBuilder(messages);
    }
  });
  $('#clear-log-button').on('click', clearLog);
};

export default { buildNavbar };
