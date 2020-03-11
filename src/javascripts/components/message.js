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
    domString += '<button class="btn btn-danger delete-message-button">Delete Message</button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
  let deleteButton = $('.delete-message-button');
  deleteButton.click(() => {
    for (i = 0; i < deleteButton.length; i++) {
      textInfo.splice(i, 1);
    }
    messageBuilder(textInfo);
});

export default { messageBuilder }};
