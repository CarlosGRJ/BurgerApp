import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c93af-default-rtdb.firebaseio.com',
});

export default instance;
