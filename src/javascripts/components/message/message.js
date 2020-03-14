import message from '../../helpers/data/messageData';
import utils from '../../helpers/utils';
import userList from '../userList/userList';

const messageBuilder = () => {
  let domString = '';
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div id="message" class="message bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div class="col-10">';
    domString += userList.createUserList(text.userId);
    domString += '<div>';
    domString += `<p>${text.message}</p>`;
    domString += `<p>${text.timeStamp}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '<div>';
    domString += `<button id="${text.id}" class="deleteBtn btn btn-danger">Delete <i class="fas fa-minus-circle"></i></button>`;
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
  const amountOfMessages = (e) => {
    if (textInfo.lenth <= 20) {
      console.error('setup working');
      e.preventDefault();
    } else {
      console.error(textInfo);
    }
  };
  amountOfMessages();

  const deleteMessageEvent = (e) => {
    const deleteId = e.target.id;
    const textPosition = textInfo.findIndex((p) => p.id === deleteId);
    textInfo.splice(textPosition, 1);
    messageBuilder();
  };
  $('.deleteBtn').click(deleteMessageEvent);
};

const clearBtnFunction = (e) => {
  console.error('clicked clear');
  e.preventDefault();
  const messages = message.getMessages();
  messages.splice(0, messages.length);
  messageBuilder(messages);
};

export default { messageBuilder, clearBtnFunction };
