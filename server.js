const express = require('express');
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