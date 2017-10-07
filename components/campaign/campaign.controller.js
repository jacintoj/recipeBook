const CampaignModel = require('./campaign.model');

exports.getOne = async function getOne(campaignId) {
  return await CampaignModel.getOne(campaignId);
};

exports.add = async function add(data) {
  return await CampaignModel.add(data);
};

exports.getAll = async function getAll() {
  return await CampaignModel.getAll();
};

exports.getByRecipentsNumber = async function getByRecipentsNumber() {
  return await CampaignModel.getByRecipentsNumber();
};
