const { default: mongoose } = require("mongoose");

const AdminSchema=new mongoose.Schema({
    userName:{type:String,require:true,unique:true},
    mobile:{type:Number,require:true, unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String ,require:true},
    isEmail:{type:Boolean,default:false},
    isMobile:{type:Boolean,default:false},
    Active:{type:Boolean,default:true},
    otpMobile:{type:Object ,default:{
        code:11111,
        expireIn:0
    } },
    otpEmail:{type:Object ,default:{
        code:11111,
        expireIn:0
    } }
    
},{
    timestamps:true
});



module.exports={
    AdminModel:mongoose.model("AdminModel",AdminSchema)
};