const express = require('express');
const SpeakerService = require('../services/SpeakerService');

const router = express.Router();

module.exports = (params) => {
  const feedbackService = params.feedbackService;
  router.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/:shortname', (request, response) => {
    return response.send('Feedback from post');
  });

  return router;
};
