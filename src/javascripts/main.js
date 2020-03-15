import 'bootstrap';
import '../styles/main.scss';
import 'moment';
import messages from './components/message/message';
import radio from './components/radio/radio';
import userData from './helpers/data/userData';
import navbar from './components/navbar/navbar';
import viewSettings from './components/buttons/buttons';

const init = () => {
  radio.buildRadioButtons(userData.getUsers);
  navbar.buildNavbar();
  messages.messageBuilder();
  viewSettings.settings();
  $('body').on('click', '#clear-all-button', messages.clearBtnFunction);
};

init();
