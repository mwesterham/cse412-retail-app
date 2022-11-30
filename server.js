const express = require('express');
const { Client } = require('pg');
var axios = require('axios');

// set up database
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'cse412',
  password: 'postgres',
  port: 4444,
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

// By default go to index.html route
app.get('/', function (req, res) {
  res.redirect('/Webpage.html')
})

app.get('/Webpage.html', function (req, res) {
  res.sendFile( __dirname + "/views/" + "Webpage.html" );
})

app.get('/addproduct.html', function(req,res){
  res.sendFile( __dirname + "/views/" + "AddProduct.html" );
})

app.get('/cart.html', function(req,res){
  res.sendFile( __dirname + "/views/" + "ShoppingCart.html" );
})

app.get('/CreateAccount.html', function(req,res){
  res.sendFile( __dirname + "/views/" + "LotsOfUserInfo.html" );
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
    const result = await client.query(`SELECT listing.*, contains.* FROM contains, listing WHERE contains.listing_id = listing.listing_id AND buyer_id = ${buyer_id};`);
    res.end(JSON.stringify(result.rows));
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})

// example: http://localhost:3000/add_to_cart/?buyer_id=289&listing_id=1099&quantity=3&status=ORDERED
app.get('/add_to_cart', async function (req, res) {
  var buyer_id = req.query.buyer_id;
  var listing_id = req.query.listing_id;
  var quantity = req.query.quantity;
  var status = req.query.status;
  
  var days_offset = Math.floor(Math.random() * 5);
  var date = new Date();
  date.setDate(date.getDate() + days_offset);
  var delivery_time = date.toISOString().split('T')[0];

  try {
    await client.query(`INSERT INTO contains VALUES(${listing_id}, ${buyer_id}, ${quantity}, '${delivery_time}', '${status}');`);
    res.end("SUCCESS");
  }
  catch(e) {
    res.end(JSON.stringify(e));
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});