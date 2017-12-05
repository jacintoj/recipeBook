const receipt = require('./recipe/recipe.routes');

const routes = function (app) {
  app.get('/recipe/:recipeid', recipe.getOne);
  app.get('/recipes', recipe.getAll);
  app.post('/recipe', recipe.post);
  app.put('/recipe/:recipeid', recipe.put);
  app.delete('/recipe/:recipeid', recipe.delete);

  app.get('/', (req, res) => {
    res.send('Base Url Working for the Recipe Book!');
  });
};

module.exports = routes;
