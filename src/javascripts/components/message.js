// import message from '../components/helpers/data/messageData';
import utils from '../helpers/utils';

const messageBuilder = () => {
  let domString = '';
  domString += '<div class="card w-75 mx-auto">';
  domString += '<ul class="list-group list-group-flush">';
  domString += '<div>';
  domString += '<li class="list-group-item">Name Example</li>';
  domString += '</div>';
  domString += '<div>';
  domString += '<li class="list-group-item">Message Example</li>';
  domString += '</div>';
  domString += '</ul>';
  domString += '</div>';
  utils.printToDom('messageContainer', domString);
};

export default { messageBuilder };
