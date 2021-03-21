import { json } from 'express';
import Todo from '../models/todolist.js';

export const createItem = (req, res, next) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item',
    });
  }

  const item = new Todo(body);
  if (!item) {
    return res.status(400).json({ success: false, error: err });
  }

  item.save().then(() => {
    return res
      .status(201)
      .json({
        success: true,
        id: item._id,
        message: 'Item created',
      })
      .catch((err) => {
        return res.status(400).json({
          error: err,
          message: 'Item not created',
        });
      });
  });
};

export const updateItem = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item to update',
    });
  }

  Todo.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(404).json({
        error: err,
        message: 'Item not found',
      });
    }
    item.name = body.name;
    item.crossed = body.crossed;
    item.save().then(() => {
      return res
        .status(200)
        .json({ success: true, id: item._id, message: 'Item updated' })
        .catch((err) => {
          return res.status(404).json({
            error: err,
            message: 'Item not updated',
          });
        });
    });
  });
};

export const deleteItem = async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(404).json({ success: false, error: err });
    }
    if (!item) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }
    return res.status(200).json({ success: true, data: item });
  }).catch((err) => console.error(err));
};

export const getItemById = async (req, res) => {
  await Todo.findOne({ _id: req.params.id }, (err, item) => {
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
  }).catch(console.error(err));
};
