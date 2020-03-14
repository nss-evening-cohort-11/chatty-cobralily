import moment from 'moment';
import utils from '../../helpers/utils';
import messageData from '../../helpers/data/messageData';
import message from '../message/message';
// import radio from '../radio';
import userData from '../../helpers/data/userData';


const buildNavbar = () => {
  let domString = '';
  domString += '<div>';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light sticky">';
  domString += '<a class="navbar-brand" href="#">Chatty!</a>';
  domString += '<form class="form-inline my-2 my-lg-0 w-75">';
  domString += '<input class="form-control mr-sm-2" type="text" id="message-field" placeholder="Enter message" aria-label="Search">';
  domString += '</form>';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" id="clear-all-button">Clear</button>';
  domString += '</nav>';
  domString += '</div>';
  utils.printToDom('nav', domString);
  $('#message-field').keypress((e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const messages = messageData.getMessages();
      if (messages.length <= 19) {
        const newMessage = {
          id: `message${messages.length + 1}`,
          message: $('#message-field').val(),
          timeStamp: moment().format('MMM Do YYYY h:mm a'),
          userId: userData.setSelectedUser(),
        };
        messages.push(newMessage);
        $('form').trigger('reset');
        message.messageBuilder(messages);
      } else (document.write('Too many messages'));
    }
  });
};


export default { buildNavbar };
