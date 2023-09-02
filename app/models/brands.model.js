const { default: mongoose } = require("mongoose");
const schema = new mongoose.Schema({
  populatedField: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ForeignModel',
    // `populatedField`
    autopopulate: true
  }
});

const BrandsSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  date: { type: Date, require: true },
  Author: {
    name: String,
    age: Int16Array,
  },
  ListProduct: { type: [mongoose.Types.ObjectId], ref: 'ProductModel', autopopulate: true },
  enableSailing: { type: Boolean, default: false }
});


module.exports = {
  BrandsModel: mongoose.model('BrandsSchema', BrandsSchema)
}