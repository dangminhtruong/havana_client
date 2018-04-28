import openSocket from 'socket.io-client';
import config from '../config';

const  socket = openSocket(`${config.BASE_API_URL}`);


function fetchMessage(callback) {
  socket.on('newMessage', (data) => callback(null, data));
}
export { fetchMessage };