import messages from './components/message';

import 'bootstrap';
import '../styles/main.scss';
import radio from './components/radio';

const init = () => {
  radio.buildRadioButtons();
  messages.messageBuilder();
};

init();
