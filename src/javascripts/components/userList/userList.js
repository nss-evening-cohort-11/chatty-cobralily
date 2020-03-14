import userData from '../../helpers/data/userData';

const createUserList = (messageUserId) => {
  const users = userData.getUsers();
  let domString = '<h5>';
  const messageUsers = users.find((x) => x.id === messageUserId);
  domString += messageUsers.name;
  domString += '</h5>';
  return domString;
};

export default { createUserList };
