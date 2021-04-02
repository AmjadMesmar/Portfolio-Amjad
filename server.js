'use strict';

// declare a variable called express to use the express library.
const express = require('express'); // then run npm install express

// initialise express, now server has all properties and methods of express!
const server = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;


server.use(express.static('./public'));

// Router definition
// localhost:3000/test
server.get('/test',(request,response) => {

  response.send('Your serve is alive!');
});

server.get('/', (req, res) => {
  res.send('home route');
});

// server is ready for lestining the requests.
server.listen (PORT,() => {

  console.log(`Listening on port: ${PORT}`);

});
