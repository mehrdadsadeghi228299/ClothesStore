const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    populatedField: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductModel',
      autopopulate: true
    }
  });

schema.plugin(require('mongoose-autopopulate'));


const CategorySchema=new mongoose.Schema({
    title:{type:String,require:true},
    ListProduct : {type :[ mongoose.Types.ObjectId],ref:'ProductModel',autopopulate:true},
    EnableSelling: { type: Boolean, default: false }

});


module.exports={
    CategoryModel:mongoose.model('CategoryModel',CategorySchema)
}