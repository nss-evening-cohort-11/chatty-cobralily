import message from '../../helpers/data/messageData';
import utils from '../../helpers/utils';
import userList from '../userList/userList';

const messageBuilder = () => {
  let domString = '';
  const users = userList.createUserList();
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div class="bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div>';
    domString += userList.createUserList(users);
    domString += '</div>';
    domString += '<div class="ml-3">';
    domString += `<p>${text.message}</p>`;
    domString += `<p>${text.timeStamp}`;
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
};

const clearBtnFunction = (e) => {
  e.preventDefault();
  const messages = message.getMessages();
  messages.splice(0, messages.length);
  messageBuilder(messages);
};

export default { messageBuilder, clearBtnFunction };
