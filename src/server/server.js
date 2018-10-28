const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// some data for the API
var foods = [
  { "id": 1, "name": "Donuts" },
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Tacos" }
];

//adsf
app.use(express.static(__dirname + '/app'));
// var path = require('path');
// app.use(express.static(path.resolve(__dirname, './../')));
// app.use(express.static(path.join(__dirname, '/my-app/dist')));
app.use(bodyParser.json()); // support json encoded bodies
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// the GET "foods" API endpoint
app.get('/api/food',bodyParser.json(), function (req, res) => (){
  // Callback for validation here...
} {
    res.send(foods);
});



app.get('/api', (req, res) => {
  // res.send('Hello World');
  console.log('Hello from server.js!');
  // res.sendFile('./../index.html');
  // res.sendFile(path.resolve('./../index.html'));app.use(express.static(path.join(__dirname, '/client/dist')));
// res.sendFile(__dirname + '/my-app/dist/index.html');
  // res.sendFile(path.resolve('./../../dist/my-app/index.html'));
});



// app.use(express.static(path.join(__dirname, '/client/dist')));
// res.sendFile(__dirname + '/client/dist/index.html');



// app.get('/authorize/medium', (req, res) => {
//   res.send('Authorize Medium...');
// });


// ALl routes before this point should be API calls

// Fallback for default routes
app.get('*', function (req, res) {
  // res.sendFile('./app.component.html');
  res.sendFile("../index.html", {"root": __dirname});
});

app.listen(3000, () => console.log('Listening on port 3000...'));
