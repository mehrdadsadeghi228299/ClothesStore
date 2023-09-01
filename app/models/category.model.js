const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    populatedField: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ForeignModel',
      // The below option tells this plugin to always call `populate()` on
      // `populatedField`
      autopopulate: true
    }
  });

schema.plugin(require('mongoose-autopopulate'));

const CategorySchema=new mongoose.Schema({
    title:{type:String,require:true},
    ListProduct : {type :[ mongoose.Types.ObjectId],ref:'ProductModel',autopopulate:true},

});


module.exports={
    CategoryModel:mongoose.model('CategorySchema',CategorySchema)
}