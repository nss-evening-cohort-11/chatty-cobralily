import messages from './components/message';
import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar';



const init = () => {
  navbar.buildNavbar();
  messages.messageBuilder();
};

init();
