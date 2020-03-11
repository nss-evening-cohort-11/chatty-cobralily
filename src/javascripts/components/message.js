import message from '../helpers/data/messageData';
import utils from '../helpers/utils';

const messageBuilder = () => {
  let domString = '';
  const textInfo = message.getMessages();
  textInfo.forEach((text) => {
    domString += '<div class="bg-white border-top row w-75 mx-auto m-1 p-2">';
    domString += '<div class="col-10">';
    domString += '<h5>Name Example</h5>';
    domString += '<div>';
    domString += `<p>${text.message}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '<div>';
    domString += '<button class="btn btn-danger mt-3">Delete <i class="fas fa-minus-circle"></i></button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('messageContainer', domString);
};

export default { messageBuilder };
