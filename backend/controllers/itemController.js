// controllers/itemController.js
const Item = require('../models/itemModel');

exports.getAllItems = (req, res) => {
  res.json(Item.getAll());
};

exports.getItemById = (req, res) => {
  const item = Item.getById(req.params.id);
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
};

exports.createItem = (req, res) => {
  const newItem = Item.create(req.body.name);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const updatedItem = Item.update(req.params.id, req.body.name);
  if (!updatedItem) return res.status(404).send('Item not found');
  res.json(updatedItem);
};

exports.deleteItem = (req, res) => {
  const deletedItem = Item.delete(req.params.id);
  if (!deletedItem) return res.status(404).send('Item not found');
  res.json(deletedItem);
};
