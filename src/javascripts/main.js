import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import messages from './components/message';
import radio from './components/radio';
import userData from './helpers/data/userData';
import userList from './components/userList';


const init = () => {
  radio.buildRadioButtons(userData.getUsers);
  navbar.buildNavbar();
  messages.messageBuilder();
  userList.createUserList();
};

init();
