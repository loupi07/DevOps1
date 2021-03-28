import mongoose from 'mongoose';
import Todo from '../models/todolist.js';

export const createItem = (req, res, next) => {
  const body = req.body;

  console.log('creating Item', body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item',
    });
  }
  const item = new Todo({
    _id: new mongoose.Types.ObjectId(),
    name: body.name,
    crossed: body.crossed === 'true',
  });
  if (!item) {
    return res.status(400).json({ success: false, error: err });
  }

  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item created',
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
        message: 'Item not created',
      });
    });
};

export const updateItem = async (req, res) => {
  const body = req.body;
  const id = req.params.itemId;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item to update',
    });
  }

  Todo.updateOne(
    { _id: id },
    { name: body.name, crossed: body.crossed == true }
  )
    .exec()
    .then((result) => {
      return res
        .status(200)
        .json({ success: true, id: result._id, message: 'Item updated' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
};

export const deleteItem = async (req, res) => {
  console.log('req', req.params.itemId);
  await Todo.findOneAndDelete({ _id: req.params.itemId }, (err, item) => {
    if (err) {
      return res.status(404).json({ success: false, error: err });
    }
    console.log('item', item);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    return res.status(200).json({ success: true, data: item });
  }).catch((err) => console.error(err));
};

export const getItemById = async (req, res) => {
  await Todo.findOne({ _id: req.params.itemId }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!item) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    return res.status(200).json({ success: true, data: item });
  }).catch((err) => console.error(err));
};

export const getItems = async (req, res) => {
  await Todo.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: items });
  }).catch((err) => console.log(err));
};
