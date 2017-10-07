const campaign = require('./campaign/campaign.routes');

const routes = function (app) {
  app.get('/users/:user', campaign.getOne);
  app.get('/users', campaign.get);
  app.post('/users', campaign.post);

  app.get('/', (req, res) => {
    res.send('Base Url Working!');
  });
};

module.exports = routes;
