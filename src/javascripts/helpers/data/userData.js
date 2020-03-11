const users = [
  { id: 'user1', name: 'Beth' },
  { id: 'user2', name: 'Davis' },
  { id: 'user3', name: 'Monique' },
  { id: 'user4', name: 'Zac' }
];

const setSelectedUser = (userId) => {
  const selectedUserId = userId;
  console.log('selectedUserId', selectedUserId);
};

const getSelectedUser = () => {
  const findUser = users.find((x) => x.id === selectedUserId)
  return findUser;
}

const getUsers = () => {
  return users;
};

export default { setSelectedUser, getSelectedUser, getUsers }