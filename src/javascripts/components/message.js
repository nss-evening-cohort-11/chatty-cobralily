import message from '../helpers/data/messageData';
import utils from '../helpers/utils';

const messageBuilder = () => {
  let domString = '';
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div id="message" class="message bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div class="col-10">';
    domString += '<h5>Name Example</h5>';
    domString += '<div>';
    domString += `<p>${text.message}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '<div>';
    domString += `<button id="${text.id}" class="deleteBtn btn btn-danger">Delete <i class="fas fa-minus-circle"></i></button>`;
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
  const deleteMessageEvent = (e) => {
    textInfo.forEach((deleteText) => {
      const deleteId = e.target.closest('.message').id;
      const textPosition = deleteText.findIndex((p) => p.id === deleteId);
      deleteText.splice(textPosition, 1);
      messageBuilder(deleteText);
    });
  };
  $('.deleteBtn').click(deleteMessageEvent);
};

export default { messageBuilder };
