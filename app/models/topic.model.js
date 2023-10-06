const { default: mongoose } = require("mongoose");
const{UserModel}=require('./user.model');
const{ProductModel}=require('./products.model');


const TopicSchema = new mongoose.Schema({
    name:{type:String,require:true},
    product_id : {type :[ mongoose.Types.ObjectId],ref:'ProductModel'},
    
});
module.exports = {
    TopicModel : mongoose.model("TopicModel", TopicSchema)
}
