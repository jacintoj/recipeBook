const RecipeModel = require('./recipe.model');

exports.getOne = async function getOne(recipeId) {
  return await RecipeModel.getOne(recipeId);
};

exports.add = async function add(data) {
  return await RecipeModel.add(data);
};

exports.getAll = async function getAll() {
  return await RecipeModel.getAll();
};

exports.put = async function put(recipeId, data) {
  return await RecipeModel.put(recipeId, data);
};

exports.deleteOne = async function deleteOne(recipeId){
  return await RecipeModel.delete(recipeId);
};


