import mongoose from 'mongoose';

const db = () => {
  const connectionString = process.env.MONGO_URI;
  mongoose
    .connect(
      'mongodb+srv://loupi07:' +
        process.env.MONGO_ATLAS_PW +
        '@banana.qbnq2.mongodb.net/<dbname>?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .catch((e) => {
      console.error('Connection error', e.message);
    });
};
export default db;
