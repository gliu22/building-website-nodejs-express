const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    return response.send('Feedback page');
  });

  router.post('/:shortname', (request, response) => {
    return response.send('Feedback from post');
  });

  return router;
};
