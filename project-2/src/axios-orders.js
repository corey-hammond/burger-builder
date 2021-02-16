import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-2-bfe4b-default-rtdb.firebaseio.com/',
});

export default instance;
