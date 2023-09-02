const { validationResult } = require("express-validator");
const { validatorProducts } = require("../../validators/products.Validator");
const Controller = require("../base.Controller");
const {StatusCodes: HttpStatus} = require("http-status-codes");
const { ProductModel } = require("../../models/products.model");
const { theFormOfAnswer } = require("../../utils/utils");
const { BrandsModel } = require("../../models/brands.model");
const { CategoryModel } = require("../../models/category.model");

class AdminController extends Controller{
    /* ***********************************               products Area                           **************************** */ 

    async post_AddProduct(req,res,next){
        try {
            let location='/AdminControllerClass/post_AddProduct';

            const errorValidator = validationResult(req);
            if(!errorValidator){
                ErrorJsonForm(errorValidator,HttpStatus.NOT_ACCEPTABLE,location,false);
            }

            const {Name,title,brand_id,tags,categoryFatherId,images,shortDescription,Description,productCode,size,color,price,count,numberOfSail,isModify,isAvailable,showing,pageView,features}=req.body 
           
            const resultCreatedProduct=await ProductModel.create(Name,title,brand_id,categoryFatherId,tags,images,shortDescription,Description,productCode,size,color,price,count,numberOfSail,isModify,isAvailable,showing,pageView,features);
           
            CheckIsEmpty(resultCreatedProduct,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultCreatedProduct,HttpStatus.CREATED,location,false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            next(error)
        }
    }

    async post_updateProduct(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    async post_enableProduct(req,res,next){
        try {
            let location='/AdminControllerClass/post_enableProduct';

            const {id,isAvailable}=req.body 
            if(! typeof isAvailable ==='boolean'){
                ErrorJsonForm("the type of numberOfSail is not boolean",HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            
            }
            const resultUpdateEnableSailingProduct=await ProductModel.findByIdAndUpdate({_id:id},{isAvailable:isAvailable})
            
            CheckIsEmpty(resultUpdateEnableSailingProduct,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultUpdateEnableSailingProduct,HttpStatus.ACCEPTED,location,false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);

            next(error)
        }
    }
    async post_removeProduct(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    async post_chooseForBestProduct(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    /* ***********************************               Brands Area                           **************************** */ 
    async post_AddBrands(req,res,next){
        try {
            let location='/AdminControllerClass/AddBrands';

            const errorValidator = validationResult(req);
            if(!errorValidator){
                ErrorJsonForm(errorValidator,HttpStatus.NOT_ACCEPTABLE,location,false);
            }

            const {Name,date,Author}=req.body 
           
            const resultCreatedBrands=await BrandsModel.create(Name,date,Author)
           
            CheckIsEmpty(resultCreatedBrands,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultCreatedBrands,HttpStatus.CREATED,location,false);
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);

            next(error)
        }
    }

    async put_updateListProductBrands(req,res,next){
        try {
            let location='/AdminControllerClass/updateListProductBrands';

            const errorValidator = validationResult(req);
            if(!errorValidator){
                ErrorJsonForm(errorValidator,HttpStatus.NOT_ACCEPTABLE,location,false);
            }

            const {id,ListProduct}=req.body 
            const answer=checkExistProduct(ListProduct,ProductModel);
            if(!answer){
                ErrorJsonForm(answer,HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            
            }
            const resultUpdateListProductBrands=await BrandsModel.findByIdAndUpdate({_id:id},{
                '$push':{
                    'ListProduct':ListProduct
                }
            });
            
            CheckIsEmpty(resultUpdateListProductBrands,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultUpdateListProductBrands,HttpStatus.ACCEPTED,location,false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);

            next(error)
        }
    }
    async put_enableBrands(req,res,next){
            try {
                let location='/AdminControllerClass/put_enableBrands';
    
                const {id,enableSailing}=req.body 
                if(! typeof enableSailing ==='boolean'){
                    ErrorJsonForm("the type of numberOfSail is not boolean",HttpStatus.INTERNAL_SERVER_ERROR,location,false);
                
                }
                const resultUpdateEnableSailingBrands=await BrandsModel.findByIdAndUpdate({_id:id},{enableSailing:enableSailing})
                
                CheckIsEmpty(resultUpdateEnableSailingBrands,HttpStatus.NOT_IMPLEMENTED,location,false);
                theFormOfAnswer(resultUpdateEnableSailingBrands,HttpStatus.ACCEPTED,location,false);
    
            } catch (error) {
                ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);
    
                next(error)
            }
        
    }
    async Delete_removeBrands(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    async post_chooseForBestBrands(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    /* ***********************************               Category Area                           **************************** */ 

    async post_AddCategory(req,res,next){
        try {
            let location='/AdminControllerClass/AddCategory';

            const errorValidator = validationResult(req);
            if(!errorValidator){
                ErrorJsonForm(errorValidator,HttpStatus.NOT_ACCEPTABLE,location,false);
            }

            const {title,ListProduct}=req.body 
           
            const resultCreateCategory=await CategoryModel.create(title,ListProduct)
           
            CheckIsEmpty(resultCreateCategory,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultCreateCategory,HttpStatus.CREATED,location,false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);

            next(error)
        }
    }

    async put_updateListProductsCategory(req,res,next){
        try {
            let location='/AdminControllerClass/put_updateListProductsCategory';

            const errorValidator = validationResult(req);
            if(!errorValidator){
                ErrorJsonForm(errorValidator,HttpStatus.NOT_ACCEPTABLE,location,false);
            }

            const {id,ListProduct}=req.body 
            const answer=checkExistProduct(ListProduct,ProductModel);
            if(!answer){
                ErrorJsonForm(answer,HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            
            }
            const resultUpdateListProductCategory=await CategoryModel.findByIdAndUpdate({_id:id},{
                '$push':{
                    'ListProduct':ListProduct
                }
            })
            
            CheckIsEmpty(resultUpdateListProductCategory,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultUpdateListProductCategory,HttpStatus.ACCEPTED,location,false);

            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            next(error)
        }
    }
    async put_enableCategory(req,res,next){
        try {
            let location='/AdminControllerClass/put_enableCategory';

            const {id,enableSailing}=req.body 
            if(! typeof enableSailing ==='boolean'){
                ErrorJsonForm("the type of numberOfSail is not boolean",HttpStatus.INTERNAL_SERVER_ERROR,location,false);
            
            }
            const resultUpdateEnableSailingCategory=await CategoryModel.findByIdAndUpdate({_id:id},{enableSailing:enableSailing})
            
            CheckIsEmpty(resultUpdateEnableSailingCategory,HttpStatus.NOT_IMPLEMENTED,location,false);
            theFormOfAnswer(resultUpdateEnableSailingCategory,HttpStatus.ACCEPTED,location,false);

        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,location,false);

            next(error)
        }
    }
    async Delete_removeCategory(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
    async post_chooseForBestCategory(req,res,next){
        try {
            
        } catch (error) {
            ErrorJsonForm(error,HttpStatus.INTERNAL_SERVER_ERROR,'/UserControllerClass/getListBrandsWithProduct',false);

            next(error)
        }
    }
} 