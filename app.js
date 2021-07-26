require('dotenv').config();

const colors = require('colors');
const Server = require('./models/server');

console.clear();
console.log('=================='.bgGreen);
console.log(' Init the Server'.cyan);
console.log('==================\n'.bgGreen);



const server = new Server();


server.listen();





