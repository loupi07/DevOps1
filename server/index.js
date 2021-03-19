import express from 'express';
import cors from 'cors';

const apiPort = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});
