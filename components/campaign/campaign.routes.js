const express = require('express');
const CampaignController = require('./campaign.controller.js');

module.exports.get = async function (req, res) {
  try {
    const result = await CampaignController.getAll();
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
  // on error: return Promise.reject(error); }
};


module.exports.getOne = async function (req, res) {
  try {
    const result = await CampaignController.getOne(req.params.camid);
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
  // on error: return Promise.reject(error); }
};

module.exports.getByRecipentsNumber = async function (req, res) {
  try {
    const result = await CampaignController.getByRecipentsNumber();
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
  // on error: return Promise.reject(error); }
};

module.exports.post = async function (req, res) {
  try {
    const result = await CampaignController.add(req.body);
    res.status(201).json(result);
  } catch (error) { res.status(500).json(error); }

  // on error: return Promise.reject(error); }
};
