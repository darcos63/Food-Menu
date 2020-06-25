import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-joint.firebaseio.com/'
});

export default instance;