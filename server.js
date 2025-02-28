// filepath: /Users/courtashdale/Desktop/Data/Sinatra/link-in-bio/server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('src'));

app.get('/get-token', (req, res) => {
  res.send(process.env.SPOTIFY_TOKEN);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});