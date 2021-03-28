import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/index.js';
import itemsRoute from './routes/todolist.js';

const apiPort = process.env.PORT || 5000;

dotenv.config();
db();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/items', itemsRoute);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});
