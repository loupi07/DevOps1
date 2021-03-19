import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    name: { type: String, required: true },
    crossed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Todo', todoSchema);
