const express = require('express');
const { Client } = require('pg');

// set up database
const client = new Client({
  user: 'postgres',
  host: 'http://10.0.2.2',
  database: 'cse412',
  password: 'password',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// Set up server
const app = express();
const port = 3000;

// By default go to index.htm route
app.get('/', function (req, res) {
  res.redirect('/index.htm')
})

// Set routes
app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});