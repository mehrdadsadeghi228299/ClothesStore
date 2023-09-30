const createHttpError = require("http-errors");
const { WishListModel } = require("../../models/wishList.model");
const Controller = require("../base.Controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { ProductModel } = require("../../models/products.model");

class WishListClass extends Controller {

   async getWishlist(req, res, next) {
        try {
            var location='WishListClass/getWishlist';
            const {id} = req.user;
            const resultQuery = await WishListModel.findOne({user_id:id}).populate('ListProduct').exec();
            if(!resultQuery){
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    Modified: false,
                    Error: " WishList  is  Empty "
                });
            }
            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                message: resultQuery
            });


        } catch (error) {
            next(error)
        }
    }

   async AddWishlist(req, res, next) {
        try {
            var location='WishListClass/AddWishlist';
            const {id} = req.user;
            const {id_products} = req.body;
            if(!id_products) createHttpError.NotImplemented('id Products cannot be empty ');
            const checkProducts = await ProductModel.findById(id_products);
            if(!checkProducts) createHttpError.NotImplemented('id Products is not Exist in the products ');
            const CheckBeForAdding = await WishListModel.findOne({user_id:id});
            const ListProduct = CheckBeForAdding.ListProduct;
            if(ListProduct){
               for (let index = 0; index <ListProduct.length; index++) {
               if(ListProduct[index]==id_products){
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    where: location,
                    message: " products before Adding to "
                });
               }
               } 
            }else{
            const resultQuery = await WishListModel.findOneAndUpdate({user_id:id},{
                '$push':{ListProduct:id_products}
            });
            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                message: resultQuery
            });
            }

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                message: " there was a problem the products id  is not right or server in issus"
            });
          
        } catch (error) {
            next(error)
        }
    }
    async DeleteOneProductsWishlist(req, res, next) {
        try {
            var location='WishListClass/DeleteOneProductsWishlist';
            const {id} = req.user;
            const {id_products} = req.body;
            if(!id_products) createHttpError.NotImplemented('id Products cannot be empty ');
            const checkProducts = await ProductModel.findById(id_products);
            if(!checkProducts) createHttpError.NotImplemented('id Products is not Exist in the products ');
            const CheckBeForAdding = await WishListModel.findOne({user_id:id});
            const ListProduct = CheckBeForAdding.ListProduct;
            var listTempers=[];
            if(ListProduct){
               for (let index = 0; index <ListProduct.length; index++) {
                    if(ListProduct[index]!=id_products){
                    listTempers.push(ListProduct[index]);

                    }
               } 
            }else{
            const resultQuery = await WishListModel.findOneAndUpdate({user_id:id},{
                '$set':{ListProduct:listTempers}
            });
            return res.status(HttpStatus.OK).json({
                statusCodes: HttpStatus.OK,
                where: location,
                message: "the products Delete : "+ resultQuery
            });
            }

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                where: location,
                message: " there was a problem the products id  is not right or server in issus"
            });

        } catch (error) {
            next(error)
        }
    } 

    ChoseProductsToBasket(req,res,next){

    }
   
}
module.exports = {
    WishListController: new WishListClass()
}