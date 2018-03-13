import config from './config';
import axios from 'axios';

const instance = axios.create({
    baseURL: config.BASE_API_URL
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;