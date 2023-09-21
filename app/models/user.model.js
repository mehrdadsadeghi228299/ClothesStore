const { default: mongoose } = require("mongoose");

const BasketSchema = new mongoose.Schema({
    productId: { type: mongoose.Types.ObjectId, ref: 'ProductModel', required: true },
    countItem: { type: Number, require: true, default: 1 },
});

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    mobile: { type: Number, require: true , unique: true},
    email: { type: String, require: true },
    password: { type: String, require: true },
    isModify: { type: Boolean, require: false, default: false },
    otp: {
        type: Object, default: {
            code: 11111,
            expireIn: 0
        }
    },

    basket: { type: [BasketSchema], default: [] }

}, {
    timestamps: true
});



module.exports = {
    UserModel: mongoose.model("UserModel", UserSchema)
};