const {storageModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");
const fs = require("fs");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send(data)
};
const getItem = async (req, res) => {
  try {
    const {id} = matchedData(req);
    const data = await storageModel.findById(id);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
};

const createItem = async (req, res) => {
  const {body, file} = req;
  const fileDta = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileDta);
  res.send(data);
};
const updateItem = (req, res) => {
};
const deleteItem = async (req, res) => {
  try {
    const {id} = matchedData(req);
    const dataFile = await storageModel.findById(id);
    const {fileName} = dataFile;
    const filePath = `${MEDIA_PATH}/${fileName}`;
    fs.unlinkSync(filePath);

    const data = {
      filePath,
      deleted:1
    }
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
};

module.exports = {getItem, createItem, deleteItem, getItems, updateItem}