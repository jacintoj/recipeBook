const express = require('express');
const RecipeController = require('./recipe.controller.js');

module.exports.get = async function (req, res) {
  try {
    const result = await RecipeController.getAll();
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
};


module.exports.getOne = async function (req, res) {
  try {
    const result = await RecipeController.getOne(req.params.recipeid);
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
};


module.exports.post = async function (req, res) {
  try {
    const result = await RecipeController.add(req.body);
    res.status(201).json(result);
  } catch (error) { res.status(500).json(error); }
};


module.exports.put = async function (req, res) {
  try {
    const result = await RecipeController.put(req.params.recipeid, req.body);
    res.status(204).json(result);
  } catch (error) { res.status(500).json(error); }
};


module.exports.delete = async function (req, res) {
  try {
    const result = await RecipeController.deleteOne(req.params.recipeid);
    res.status(200).json(result);
  } catch (error) { res.status(500).json(error); }
};
