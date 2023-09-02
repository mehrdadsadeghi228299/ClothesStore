const { default: mongoose } = require("mongoose");
const{UserModel}=require('./user.model');
const{ProductModel}=require('./products.model');


const TagsSchema = new mongoose.Schema({
    name:{type:String,require:true},
    user_id : {type : mongoose.Types.ObjectId,ref:'UserModel'},
    product_id : {type :[ mongoose.Types.ObjectId],ref:'ProductModel'},
    
});
module.exports = {
    TagsModel : mongoose.model("TagsSchema", TagsSchema)
}
