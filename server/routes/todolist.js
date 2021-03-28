import express from 'express';

import {
  createItem,
  updateItem,
  deleteItem,
  getItemById,
  getItems,
} from '../controllers/todolist.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);
router.post('/:itemId', updateItem);
router.delete('/:itemId', deleteItem);
router.get('/:itemId', getItemById);

export default router;
