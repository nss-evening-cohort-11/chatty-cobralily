const users = [
  { id: 'user1', name: 'Beth' },
  { id: 'user2', name: 'Davis' },
  { id: 'user3', name: 'Monique' },
  { id: 'user4', name: 'Zac' },
];

const setSelectedUser = (userId) => {
  const selectedUserId = userId;
  console.error(selectedUserId);
};

const getUsers = () => users;

export default { getUsers, setSelectedUser };
