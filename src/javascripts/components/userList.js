import userData from '../helpers/data/userData';


const createUserList = () => {
  const users = userData.getUsers();
  let domString = '<h5>';
  users.forEach((user) => {
    const messageUsers = users.find((x) => x.id === user.id);
    domString += messageUsers.name;
  });
  domString += '</h5>';
  return domString;
};

export default { createUserList };
