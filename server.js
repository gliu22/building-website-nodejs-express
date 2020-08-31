const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './provided/static')));

app.use('/', routes());

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './provided/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express Server Listing port ${port}.`);
});
