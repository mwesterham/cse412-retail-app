const express = require('express');
const { Client } = require('pg');
var axios = require('axios');

// set up database
const client = new Client({
  user: 'postgres',
  host: '192.168.1.31',
  database: 'cse412',
  password: 'postgres',
  port: 5432,
});
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// Set up server
const app = express();
const port = 3000;

// Statically vended files
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'));
app.use(express.static('public'));

// By default go to index.htm route
app.get('/', function (req, res) {
  res.redirect('/index.htm')
})

// Set routes
app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/get_profile', function (req, res) {
  response = {
    profile_name: "Matthew",
    profile_money: "-1"
 };
 res.end(JSON.stringify(response));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});