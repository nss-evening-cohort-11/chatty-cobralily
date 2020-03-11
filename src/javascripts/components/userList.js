import userData from '../helpers/data/userData';

const createUserList = (messages) => {
  const users = userData.getUsers();
  messages.forEach((message) => {
    const messageUsers = users.find((x) => x.id === message.userId);
  });
};
