// jshint esnext:true
const mongoose = require('mongoose');
// const config = require('./campaign.config.json');

const Schema = mongoose.Schema;

const CampaignSchema = Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  subject: { type: String, required: true },
  html: { type: String, required: true },
  schedule: { type: Number, required: true },
  recipents: [{ type: String }],
  numberOfRecipents: { type: Number },
}, { timestamps: true });

const CampaignModel = mongoose.model('campaign', CampaignSchema);


// Curate what we send when transform to JSON

exports.add = async function add(campaignData) {
  try {
    const campaign = await new CampaignModel(campaignData);
    campaign.numberOfRecipents = campaign.recipents.length;
    await campaign.save();

    return campaign;
  } catch (error) { return error; }
};

exports.getAll = async function () {
  try {
    const campaign = await CampaignModel.find({});

    return campaign;
  } catch (error) { return error; }
};

exports.getOne = async function (id) {
  try {
    const campaign = await CampaignModel.findOne({ '_id': mongoose.Types.ObjectId(id) });
    return campaign;
  } catch (error) { return error; }
};

exports.getByRecipentsNumber = async function () {
  try {
    const campaignSorted = await CampaignModel.find({}).sort({ numberOfRecipents: -1 });
    return campaignSorted;
  } catch (error) { return error; }
};

