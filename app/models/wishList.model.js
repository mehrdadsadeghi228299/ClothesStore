const { default: mongoose } = require("mongoose");

const WishListSchema = new mongoose.Schema({
    user_id : {type : mongoose.Types.ObjectId,ref:'UserModel'},
    ListProduct : {type :[ mongoose.Types.ObjectId],ref:'ProductModel'},

});
module.exports = {
    WishListModel : mongoose.model("WishListModel", WishListSchema)
}