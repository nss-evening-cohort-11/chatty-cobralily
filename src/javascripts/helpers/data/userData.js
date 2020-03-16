const users = [
  { id: 'user1', name: 'Beth', photo: 'https://ca.slack-edge.com/T03F2SDTJ-USB74J3NG-bd9492cd1c78-512' },
  { id: 'user2', name: 'Davis', photo: 'https://ca.slack-edge.com/T03F2SDTJ-UQUEELZA9-b05c885e34a5-512' },
  { id: 'user3', name: 'Monique', photo: 'https://ca.slack-edge.com/T03F2SDTJ-UQWL7G33Q-gfa902f0f64d-512' },
  { id: 'user4', name: 'Zac', photo: 'https://ca.slack-edge.com/T03F2SDTJ-USF25R1P1-296d07f50e2b-512' },
];

let selectedUserId = '';

const setSelectedUser = (userId) => {
  selectedUserId = userId;
};

const getSelectedUser = () => selectedUserId;

const getUsers = () => users;

export default { getUsers, setSelectedUser, getSelectedUser };
