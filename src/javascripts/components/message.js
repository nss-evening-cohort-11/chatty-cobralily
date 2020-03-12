import message from '../helpers/data/messageData';
import utils from '../helpers/utils';
import userList from './userList';

const messageBuilder = () => {
  let domString = '';
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div class="bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div>';
    domString += userList.createUserList();
    domString += '</div>';
    domString += '<div class="ml-3">';
    domString += `<p>${text.message}</p>`;
    domString += `<p>${text.timeStamp}`;
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
};

export default { messageBuilder };
