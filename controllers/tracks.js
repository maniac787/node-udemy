const {trackModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

const getItems = async (req, res) => {
  try {
    const data = await trackModel.find({});
    const user = await req.user;

    res.send({data, user})
  } catch (error) {
    handleHttpError(res, 'Error en getItems')
  }
};

const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const {id} = req;
    const data = await trackModel.findById(id);
    res.send(data)
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
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

const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await trackModel.findOneAndUpdate(id, body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM")
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const {id} = req;
    const data = await trackModel.delete({"_id": id});
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM")
  }
};

module.exports = {getItem, createItem, deleteItem, getItems, updateItem}