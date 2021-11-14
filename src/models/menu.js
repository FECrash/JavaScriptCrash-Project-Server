import mongoose, { Schema } from 'mongoose';

const MenuSchema = new Schema({
  categoryId: String,
  categoryText: String,
  name: String,
  stock: Number,
  prices: [
    {
      size: String,
      price: Number,
    },
  ],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

MenuSchema.methods.serialize = function serialize() {
  const data = this.toJSON();
  return data;
};

const Menu = mongoose.model('Menu', MenuSchema);
export default Menu;
