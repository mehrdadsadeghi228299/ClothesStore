const { default: mongoose } = require("mongoose");
const {UserModel} = require("./user.model");
const {TagsModel} = require("./tags.model");
const { BrandsModel } = require("./brands.model");


const ProductSchema=new mongoose.Schema({
    Name:{type:String,require:true},
    title:{type:String,require:true},
    brand:{type:BrandsModel,require:true},
    tags : {type: [TagsModel], default : []},
    images : {type: [String], required : true},
    shortDescription:{type:String,require:true},
    Description:{type:String,require:true},
    productCode:{type:Number ,unique:true},
    size:{type:[String],require:true},
    color:{type:[String],require:true},
    price:{type:Number,require:true},
    count:{type:Number,require:true},
    numberOfSail:{type:Number,default:0},
    isModify: {type:Boolean,require:false,default:false},
    isAvailable: {type:Boolean,require:false,default:false},
    showing: {type:Boolean,require:false,default:false},
    pageView:{
        pdf:String,
    },
    Review:[{
        userId:{type:mongoose.Types.ObjectId,ref:'UserModel',required:true},
        userName:{type:String},
        title:String,
        star:{type:number ,minlength:0,maxlength:5},
        text:String 
    }]  ,
    features : {type: Object, default : {
        length : "",
        height : "",
        width : "",
        weight : "",
        colors : [],
        madeIn : ""
    }},
    


},{
    timestamps:true
});



module.exports={
    ProductModel:mongoose.model("ProductSchema",ProductSchema)
};