const messages = [
  {
    id: 'message1',
    message: 'Hello everyone! Welcome to hell',
    userId: 'user1',
    timeStamp: Date.now(),
  },
  {
    id: 'message2',
    message: 'Yall are weirdos!',
    userId: 'user3',
    timeStamp: Date.now(),
  },
  {
    id: 'message3',
    message: 'Hey! I think everyone is awesome!',
    userId: 'user2',
    timeStamp: Date.now(),
  },
  {
    id: 'message4',
    message: 'Thanks for saying that my friend.',
    userId: 'user4',
    timeStamp: Date.now(),
  },
  {
    id: 'message5',
    message: 'Hey buddy, what is up?',
    userId: 'user4',
    timeStamp: Date.now(),
  },
];

const getMessages = () => messages;


export default { getMessages };
