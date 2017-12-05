const supertest = require('supertest');
const config = require('../../../config.json');
const shortid = require('shortid');
const should = require('chai').should();
const example = require('./recipe.json');

const route = '/recipe';

const api = supertest('localhost:3000');

describe('API', () => {
  describe('Endpoint for recipe', () => {
    before(async () => {
      existingRecipe = {}; // for save changes later

      recipeModel = example;
    });

    it('Create a recipe', (done) => {
      api
        .post(route)
        .send(recipeModel)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.body.should.have.property('name', recipeModel.name);
          existingRecipe = res.body;
          return done();
        });
    });

    it('Get a recipe', (done) => {
      api
        .get(`${route}/${existingRecipe._id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          res.body.should.have.property('_id', existingRecipe._id);
          return done();
        });
    });

    it('Get all recipes', (done) => {
      api
        .get(route)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.body.should.be.instanceof(Array);
          return done();
        });
    });
  });
});
