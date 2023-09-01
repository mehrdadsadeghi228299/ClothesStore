const { default: mongoose } = require("mongoose");

const AdminSchema=new mongoose.Schema({
    userName:{type:String,require:true,unique:true},
    name:{type:String,require:true},
    lastName:{type:String,require:true},
    mobile:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String ,require:true},
    isModify: {type:Boolean,require:false,default:false},
    otp:{type:Object ,default:{
        code:11111,
        expireIn:0
    } }
    


},{
    timestamps:true
});



module.exports={
    AdminModel:mongoose.model("AdminSchema",AdminSchema)
};