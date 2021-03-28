import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  crossed: { type: Boolean, required: true },
});

export default mongoose.model('Todo', todoSchema);
