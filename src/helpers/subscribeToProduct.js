import openSocket from 'socket.io-client';
import config from '../config';

const  socket = openSocket(`${config.BASE_API_URL}`);


function subscribeToProduct(callback) {
  socket.on('adminAddNewProduct', (data) => callback(null, data));
}
export { subscribeToProduct };