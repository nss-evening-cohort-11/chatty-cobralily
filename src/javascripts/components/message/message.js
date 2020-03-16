import messageData from '../../helpers/data/messageData';
import utils from '../../helpers/utils';
import userList from '../userList/userList';
import buttons from '../buttons/buttons';

const message = (text) => {
  let domString = '';
  domString += '<div id="message" class="message bg-white border-top row w-75 mx-auto m-1 p-2">';
  domString += '<div class="col-10">';
  domString += userList.createUserList(text.userId);
  domString += '<div>';
  domString += `<p class='fontIncrease standard'>${text.message}</p>`;
  domString += '<div id="gifID"></div>';
  domString += `<p>${text.timeStamp}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '<div>';
  domString += `<button id="${text.id}" class="deleteBtn btn btn-danger">Delete <i class="fas fa-minus-circle"></i></button>`;
  domString += '</div>';
  domString += '</div>';
  return domString;
};

const messageBuilder = () => {
  let domString = '';
  const textInfo = messageData.getMessages();
  textInfo.forEach((text) => {
    domString += text.userId.length > 0 ? message(text) : '';
  });
  utils.printToDom('messageContainer', domString);
  buttons.settings();
  const deleteMessageEvent = (e) => {
    const deleteId = e.target.id;
    const textPosition = textInfo.findIndex((p) => p.id === deleteId);
    textInfo.splice(textPosition, 1);
    messageBuilder();
  };
  $('.deleteBtn').click(deleteMessageEvent);
};

const clearBtnFunction = (e) => {
  e.preventDefault();
  const messages = messageData.getMessages();
  messages.splice(0, messages.length);
  messageBuilder(messages);
};

export default { messageBuilder, clearBtnFunction };
