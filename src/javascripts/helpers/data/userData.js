const users = [
  { id: 'user1', name: 'Beth' },
  { id: 'user2', name: 'Davis' },
  { id: 'user3', name: 'Monique' },
  { id: 'user4', name: 'Zac' },
];

let selectedUserId = '';

const setSelectedUser = (userId) => {
  selectedUserId = userId;
};

const getSelectedUser = () => selectedUserId;

const getUsers = () => users;

export default { getUsers, setSelectedUser, getSelectedUser };
