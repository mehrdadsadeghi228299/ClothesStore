const { ProductModel } = require("../../models/products.model");
const { CategoryModel } = require("../../models/category.model");
const { CheckIsEmpty, ErrorJsonForm } = require("../../utils/utils");
const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { BrandsModel } = require("../../models/brands.model");

class ProductController extends Controller {
        /* ***********************************               products Area                           **************************** */ 


    async getListProduct(req, res, next) {
        try {
            const CatchAllOfProduct = await ProductModel.find({showing:true});
             
            CheckIsEmpty(CatchAllOfProduct,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListProduct',false);

            theFormOfAnswer(CatchAllOfProduct,HttpStatus.OK,'/ProductControllerClass/getListProduct',false);


        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

    async findProductById(req, res, next) {
        try {
            const {id}=req.body
            CheckIsEmpty(id,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListProduct',false);

            const findProduct = await ProductModel.find();

            CheckIsEmpty(findProduct,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListProduct',false);

            theFormOfAnswer(findProduct,HttpStatus.OK,'/ProductControllerClass/getListProduct',false);

         
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

    async findProductByProductCode(req, res, next) {
        try {
            const {code}=req.body
            const check=checkIsNumber(code)
            if(!check){
                ErrorJsonForm("ProductCode value is not number ",HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/findProductByProductCode',false);
            }

            CheckIsEmpty(code,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/findProductByProductCode',false);

            const findProduct = await ProductModel.findOne({productCode:code});

            CheckIsEmpty(findProduct,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/findProductByProductCode',false);

            theFormOfAnswer(findProduct,HttpStatus.OK,'/ProductControllerClass/findProductByProductCode',false);

         
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

            /* ***********************************             Category   Area                           **************************** */ 

    async getListCategory(req, res, next) {
        try {
            const findProduct = await CategoryModel.find({enableSailing:true});


            CheckIsEmpty(findProduct,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findProduct,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }
    
    async getListCategoryWithProduct(req, res, next) {
        try {


            const findProduct = await CategoryModel.find().populate('ListProduct');

            CheckIsEmpty(findProduct,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findProduct,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

    async getListCategoryWithSpecialChildren(req, res, next) {
        try {
            const {titleCategory}=req.body;

            const findCategory = await BrandsModel.find({Name:titleCategory}).populate('ListProduct');

            CheckIsEmpty(findCategory,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findCategory,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

                /* ***********************************             Brands    Area                           **************************** */ 

    async getListBrands(req, res, next) {
        try {

            const findBrands = await BrandsModel.find({enableSailing:true});

            CheckIsEmpty(findBrands,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findBrands,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error);
        }
    }

    async getListBrandsWithProduct(req, res, next) {
        try {

            const findBrands = await BrandsModel.find().populate('ListProduct');

            CheckIsEmpty(findBrands,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findBrands,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);
            
            next(error);
        }
    } 
    
    async getListBrandsWithSpecialChildren(req, res, next) {
        try {
            
            const {nameBrands}=req.body;

            const findBrands = await BrandsModel.find({Name:nameBrands}).populate('ListProduct');

            CheckIsEmpty(findBrands,HttpStatus.NOT_IMPLEMENTED,'/ProductControllerClass/getListCategory',false);

            theFormOfAnswer(findBrands,HttpStatus.OK,'/ProductControllerClass/getListCategory',false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);
            
            next(error);
        }
    }


}