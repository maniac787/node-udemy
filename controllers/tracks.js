const {trackModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

const getItems = async (req, res) => {
  try {
    const data = await trackModel.find({});
    res.send(data)
  } catch (error) {
    handleHttpError(res, 'Error en getItems')
  }
};

const getItem = (req, res) => {
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await trackModel.create(body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS')
  }

};

const updateItem = (req, res) => {
};
const deleteItem = (req, res) => {
};

module.exports = {getItem, createItem, deleteItem, getItems, updateItem}