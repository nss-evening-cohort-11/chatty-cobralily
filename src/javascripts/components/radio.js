import userData from '../helpers/data/userData';
import utils from '../helpers/utils';

const buildRadioButtons = () => {
  const allUsers = userData.getUsers();
  let domString = '';
  allUsers.forEach((user) => {
    domString += '<div class="form-check form-check-inline userRadio">';
    domString += `<input class="form-check-input userRadio" type="radio" name="exampleRadios" id="${user.id}">`;
    domString += `<label class="form-check-label" for="${user.id}">${user.name}</label>`;
    domString += '</div>';
  });
  utils.printToDom('userRadioBtnContainer', domString);
};

export default { buildRadioButtons };
