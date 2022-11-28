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
  if (err) console.log(err);
  else console.log("Connected!");
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
  res.redirect('/index.html')
})

// example: http://localhost:3000/get_all_listings
app.get('/get_all_listings', async function (req, res) {
  try {
    const result = await client.query('SELECT * FROM listing;');
    res.end(JSON.stringify(result));
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})

// example: http://localhost:3000/get_listing/?listing_id=6928
app.get('/get_listing', async function (req, res) {
  var id = req.query.listing_id;
  try {
    const result = await client.query(`SELECT * FROM listing WHERE listing_id = ${id};`);
    res.end(JSON.stringify(result.rows));
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})

// example: http://localhost:3000/get_buyer_cart/?buyer_id=289
app.get('/get_buyer_cart', async function (req, res) {
  var buyer_id = req.query.buyer_id;
  try {
    const result = await client.query(`SELECT buyer_id, listing.* FROM contains, listing WHERE contains.listing_id = listing.listing_id AND buyer_id = ${buyer_id};`);
    res.end(JSON.stringify(result.rows));
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})

// example: http://localhost:3000/add_to_cart/?buyer_id=289&listing_id=1099
app.get('/add_to_cart', async function (req, res) {
  var buyer_id = req.query.buyer_id;
  var listing_id = req.query.listing_id;

  try {
    await client.query(`INSERT INTO contains VALUES(${listing_id}, ${buyer_id});`);
    res.end("SUCCESS");
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});