const campaign = require('./campaign/campaign.routes');

const routes = function (app) {
  app.get('/campaign/:camid', campaign.getOne);
  app.get('/campaign', campaign.get);
  app.post('/campaign', campaign.post);

  app.get('/', (req, res) => {
    res.send('Base Url Working!');
  });
};

module.exports = routes;
