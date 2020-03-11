import message from '../helpers/data/messageData';
import utils from '../helpers/utils';
const messageBuilder = () => {
  let domString = '';
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div class="bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div>';
    domString += '<h5>Name Example</h5>';
    domString += '</div>';
    domString += '<div class="ml-3">';
    domString += `<p>${text.message}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
};

export default { messageBuilder };
