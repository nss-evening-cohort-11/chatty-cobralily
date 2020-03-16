import userData from '../../helpers/data/userData';
import utils from '../../helpers/utils';

const selectedUser = (e) => {
  const userId = e.target.id;
  userData.setSelectedUser(userId);
};

const buildRadioButtons = () => {
  const allUsers = userData.getUsers();
  let domString = '';
  allUsers.forEach((user) => {
    domString += '<div class="form-check form-check-inline userRadio">';
    domString += `<img class="userPhoto" src="${user.photo}">`;
    domString += `<input class="form-check-input userRadio" type="radio" name="exampleRadios" id="${user.id}">`;
    domString += `<label class="form-check-label" for="${user.id}">${user.name}</label>`;
    domString += '</div>';
  });
  utils.printToDom('userRadioBtnContainer', domString);
  $('body').on('click', '.userRadio', selectedUser);
};

export default { buildRadioButtons, selectedUser };
