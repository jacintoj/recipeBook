// jshint esnext:true
const mongoose = require('mongoose');
// const config = require('./campaign.config.json');

const Schema = mongoose.Schema;

const RecipeSchema = Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  timePreparation: { type: Number, required: true },
  numberOfDiners: { type: Number },
  steps: { type: String, required: true },
  ingredients: { type: [String], required: true },
}, { timestamps: true });

const RecipeModel = mongoose.model('recipe', RecipeSchema);


// Curate what we send when transform to JSON

exports.add = async function add(recipeData) {
  try {
    const recipe = await new RecipeModel(recipeData);
    await recipe.save();

    return recipe;
  } catch (error) { return error; }
};

exports.getAll = async function () {
  try {
    const recipes = await RecipeModel.find({});

    return recipes;
  } catch (error) { return error; }
};

exports.getOne = async function (recipeId) {
  try {
    const recipe = await RecipeModel.findById(mongoose.Types.ObjectId(recipeId));
    return recipe;
  } catch (error) { return error; }
};

exports.put = async function (recipeId, recipeData) {
  try {
    const recipe = await RecipeModel.findOne({ '_id': mongoose.Types.ObjectId(recipeId) });

    recipe.name = recipeData.name || recipe.name; 
    recipe.origin = recipeData.origin ||  recipe.origin;
    recipe.timePreparation = recipeData.timePreparation || recipe.timePreparation;
    recipe.numberOfDiners = recipeData.numberOfDiners ||  recipe.numberOfDiners;
    recipe.steps = recipeData.steps || recipe.steps;
    recipe.ingredients = recipeData.ingredients || recipe.ingredients;

    await recipe.save();
    return recipe;

  } catch (error) { return error; }
}

exports.deleteOne = async function (recipeId) {
  try {
    const recipe = await RecipeModel.findOne({ '_id': mongoose.Types.ObjectId(recipeId) });
    await recipe.delete();

    return recipe;
  } catch (error) { return error; }
}



