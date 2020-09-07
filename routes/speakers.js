const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const speakersService = params.speakersService;
  router.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail Page of ${request.params.shortname}`);
  });

  return router;
};
