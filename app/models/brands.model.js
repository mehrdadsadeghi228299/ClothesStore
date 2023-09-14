const { default: mongoose } = require("mongoose");
const schema = new mongoose.Schema({
  populatedField: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ForeignModel',
    // `populatedField`
    autopopulate: true
  }
});
const Author = new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true },

});

const BrandsSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  date: { type: String, require: true },
  AuthorName: {type:String,require:true },
  ListProduct: { type: [mongoose.Types.ObjectId], ref: 'ProductModel', autopopulate: true },
  EnableSelling: { type: Boolean, default: false }
});


module.exports = {
  BrandsModel: mongoose.model('BrandsSchema', BrandsSchema)
}