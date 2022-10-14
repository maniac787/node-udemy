const getItems = (req, res) => {
  const data = ["Hola", "mundo"];
  res.send(data)
};
const getItem = (req, res) => {
};
const createItem = (req, res) => {
};
const updateItem = (req, res) => {
};
const deleteItem = (req, res) => {
};

module.exports = {getItem, createItem, deleteItem, getItems, updateItem}