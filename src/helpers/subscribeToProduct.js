import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000');


function subscribeToProduct(callback) {
  socket.on('adminAddNewProduct', (data) => callback(null, data));
}
export { subscribeToProduct };