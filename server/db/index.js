import mongoose from 'mongoose';

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

const db = mongoose.connection;

export default db;
