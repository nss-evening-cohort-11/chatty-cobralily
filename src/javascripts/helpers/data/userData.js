const users = [
  { id: 'user1', name: 'Beth', photo: 'https://vignette.wikia.nocookie.net/gumby/images/c/c7/Gumby_at_his_Desk.jpg/revision/latest/scale-to-width-down/340?cb=20140521010057' },
  { id: 'user2', name: 'Davis', photo: 'https://vignette.wikia.nocookie.net/gumby/images/c/c7/Gumby_at_his_Desk.jpg/revision/latest/scale-to-width-down/340?cb=20140521010057' },
  { id: 'user3', name: 'Monique', photo: 'https://vignette.wikia.nocookie.net/gumby/images/c/c7/Gumby_at_his_Desk.jpg/revision/latest/scale-to-width-down/340?cb=20140521010057' },
  { id: 'user4', name: 'Zac', photo: 'https://vignette.wikia.nocookie.net/gumby/images/c/c7/Gumby_at_his_Desk.jpg/revision/latest/scale-to-width-down/340?cb=20140521010057' },
];

let selectedUserId = '';

const setSelectedUser = (userId) => {
  selectedUserId = userId;
};

const getSelectedUser = () => selectedUserId;

const getUsers = () => users;

export default { getUsers, setSelectedUser, getSelectedUser };
