const supertest = require('supertest');
const config = require('../../../config.json');
const shortid = require('shortid');
const should = require('chai').should();
const example = require('./campaign.json');

const route = '/campaign';

const api = supertest('localhost:3000');

describe('API', () => {
  describe('Endpoint for campaigns', () => {
    before(async () => {
      existingCampaign = {}; // for save changes later

      campaignModel = example;
    });

    it('Create a campaign', (done) => {
      api
        .post(route)
        .send(campaignModel)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.body.should.have.property('name', campaignModel.name);
          existingCampaign = res.body;
          return done();
        });
    });

    it('Get a campaign', (done) => {
      api
        .get(`${route}/${existingCampaign._id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          res.body.should.have.property('_id', existingCampaign._id);
          return done();
        });
    });

    it('Get all campaign', (done) => {
      api
        .get(route)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.body.should.be.instanceof(Array);
          res.body.should.have.length.at.most(10);
          return done();
        });
    });
  });
});
