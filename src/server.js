// "C:\Program Files\nodejs\node.exe" server.js

const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(cors());

app.get('/prices', (req, res) => {
  res.type('application/json');
  fs.readFile(__dirname + '/prices.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/booking', (req, res) => {
  res.type('application/json');
  fs.readFile(__dirname + '/subscriptions.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

const server = app.listen(8080, '127.0.0.1',() => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});
