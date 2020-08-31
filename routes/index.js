const express = require('express');

const router = express.Router();

const speakersRouter = require('./speakers');
const feedbackRouter = require('./feedback');

module.exports = () => {
  router.get('/', (request, response) => {
    //response.sendFile(path.join(__dirname, './provided/static/index.html'));
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRouter());
  router.use('/feedback', feedbackRouter());

  return router;
};
