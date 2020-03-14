import 'bootstrap';
import '../styles/main.scss';
import 'moment';
import navbar from './components/navbar/navbar';
import messages from './components/message/message';
import radio from './components/radio/radio';
import userData from './helpers/data/userData';

const init = () => {
  radio.buildRadioButtons(userData.getUsers);
  navbar.buildNavbar();
  messages.messageBuilder();
  $('body').on('click', '#clear-all-button', messages.clearBtnFunction);
};

init();
