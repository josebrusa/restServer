require('dotenv').config();

const colors = require('colors');
const Server = require('./models/server');

console.clear();
console.log('==================\n'.bgGreen);
console.log(' the Server Init \n'.cyan);
console.log('==================\n'.bgGreen);



const server = new Server();


server.listen();





