import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-backend-ec9d5.firebaseio.com/'
});

export default instance;