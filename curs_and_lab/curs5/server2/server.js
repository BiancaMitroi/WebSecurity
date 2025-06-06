const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/receive_token', async (req, res) => {
    const data = req.url;
    console.log('Received data:', req.url);
    const match = data.match(/name=%22csrf%22%20value=%22([a-fA-F0-9]+)%22/);
    console.log('Match found:', match);
    if(match){
      fs.writeFile('token.txt', match[1], (err) => {
        if (err) {
          console.error('Error writing to file', err);
        }});
        console.log('Token received and saved:', match[1]);
    }
});

app.get('/csrf_token', (req, res) => {
    fs.readFile('token.txt', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading token');
        res.send(data);
    });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});